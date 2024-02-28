import SectionLoading from "components/common/SectionLoading";
import Footer from "components/common/footer";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
import { GetServerSideProps } from "next";
import useTranslation from "next-translate/useTranslation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  checkCoinTransactionDepositApi,
  getCoinListsForCheckDeposit,
  getNetworkListsForCheckDeposit,
} from "service/user";

export default function CheckDeposit() {
  const { t } = useTranslation();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState<any>(false);
  const [isLoading, setIsLoading] = useState<any>(false);
  const [networkLists, setNetworkLists] = useState([]);
  const [selectedNetwork, setSelectedNetwork] = useState<any>("");
  const [coinLists, setCoinLists] = useState<any>([]);
  const [selectedCoin, setSelectedCoin] = useState<any>("");
  const [transactionId, setTransactionId] = useState<any>("");
  const [depositInfo, setDepositInfo] = useState<any>({});
  useEffect(() => {
    getNetworkLists();
  }, []);

  const getNetworkLists = async () => {
    setIsLoading(true);
    const response = await getNetworkListsForCheckDeposit();
    if (!response?.success) {
      toast.error(response.message);
      setIsLoading(false);
      return;
    }
    setNetworkLists(response.data);
    setIsLoading(false);
  };

  const getCoinLists = async (event: any) => {
    if (!event.target.value) {
      setSelectedNetwork(event.target.value);
      return;
    }

    setSelectedNetwork(event.target.value);
    const response = await getCoinListsForCheckDeposit(event.target.value);
    if (!response?.success) {
      toast.error(response.message);
      return;
    }
    setCoinLists(response.data);
  };

  const handleCheckDeposit = async () => {
    if (!selectedNetwork) {
      toast.error("Please select a network");
      return;
    }
    if (!selectedCoin) {
      toast.error("Please select a coin");
      return;
    }

    if (!transactionId) {
      toast.error("Please enter transaction ID");
      return;
    }
    setIsProcessing(true);

    let value = {
      coin_id: Number(selectedCoin),
      network_id: Number(selectedNetwork),
      trx_id: transactionId,
    };
    setIsModalOpen(true);
    const response = await checkCoinTransactionDepositApi(value);

    if (!response?.success) {
      toast.error(response?.message);
      setIsProcessing(false);
      setIsModalOpen(false);
      return;
    }
    setDepositInfo(response?.data);
    setSelectedCoin("");
    setSelectedNetwork("");
    setTransactionId("");
    setIsProcessing(false);
  };

  return (
    <div>
      <div className="mb-5 pb-5">
        <div className="my-0 wallet-overview-header-main bg_cover_dashboard">
          <div className="profle-are-top container-4xl">
            <h2 className="wallet-overview-header-title text-center">
              Check Deposit
            </h2>
          </div>
        </div>
        {isLoading ? (
          <SectionLoading />
        ) : (
          <div
            className="container"
            style={{
              marginTop: "-60px",
              marginBottom: "30px",
            }}
          >
            <div className="row">
              <div className="offset-md-2 col-md-8 shadow-sm section-padding-custom wallet-card-info-container">
                <div className="total-balance">
                  <h5>{t("Select Network")}</h5>
                  <div className="cp-select-area">
                    <select
                      name="currency"
                      className="form-control coin-list-item  mt-3"
                      style={{ height: "44px" }}
                      onChange={getCoinLists}
                      value={selectedNetwork}
                    >
                      <option value="">Select Network</option>
                      {networkLists.map((item: any, index: number) => (
                        <option value={item?.id} key={index}>
                          {item?.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="total-balance mt-4">
                  <h5>{t("Select Coin")}</h5>
                  <div className="cp-select-area">
                    <select
                      name="currency"
                      className={`form-control coin-list-item  mt-3 ${
                        !selectedNetwork && "cursor-not-allowed"
                      }`}
                      style={{ height: "44px" }}
                      disabled={!selectedNetwork}
                      onChange={(e: any) => setSelectedCoin(e.target.value)}
                      value={selectedCoin}
                    >
                      <option value="">Select Coin</option>
                      {coinLists.map((coin: any, index: number) => (
                        <option value={coin?.id} key={index}>
                          {coin?.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="total-balance mt-4">
                  <h5>{t("Transaction ID")}</h5>
                  <div className="input-group input-address-bar mt-3">
                    <input
                      type="text"
                      className="form-control border-0 h-50"
                      id="amountWithdrawal"
                      name="amount"
                      placeholder={t("Enter Transaction ID")}
                      value={transactionId}
                      onChange={(e: any) => setTransactionId(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  className={`primary-btn-outline bg-primary-color w-100 mt-4 ${
                    isProcessing && "cursor-not-allowed"
                  }`}
                  type="button"
                  style={{ height: "44px" }}
                  onClick={handleCheckDeposit}
                  disabled={isProcessing}
                >
                  {isProcessing ? t("Processing") : t("Submit")}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
      {isModalOpen && (
        <>
          <div className="modal d-block">
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{t("Deposit Info")}</h5>
                  <button
                    type="button"
                    className="close"
                    onClick={() => setIsModalOpen(false)}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body py-3 px-5">
                  {isProcessing ? (
                    <SectionLoading />
                  ) : (
                    <div>
                      <table className="table">
                        <tbody>
                          <tr>
                            <td className="font-bold">{t("Address")}</td>
                            <td>: {depositInfo?.address}</td>
                          </tr>
                          <tr>
                            <td className="font-bold">{t("From Address")}</td>
                            <td>: {depositInfo?.from_address}</td>
                          </tr>
                          <tr>
                            <td className="font-bold">{t("Transaction ID")}</td>
                            <td>: {depositInfo?.txId}</td>
                          </tr>
                          <tr>
                            <td className="font-bold">{t("Amount")}</td>
                            <td>
                              : {depositInfo?.amount} {depositInfo?.coin_type}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
                {/* <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      )}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  await SSRAuthCheck(ctx, "/user/check-deposit");

  return {
    props: {},
  };
};
