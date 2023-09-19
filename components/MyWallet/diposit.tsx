import useTranslation from "next-translate/useTranslation";
import React, { useEffect, useRef, useState } from "react";
import { copyTextById, formateZert } from "common";
import { GetWalletAddressAction } from "state/actions/wallet";
import Qr from "components/common/qr";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import QRCode from "react-qr-code";
import { networkHandlerApi } from "service/wallet";

export const DipositComponent = ({
  responseData,
  router,
  setDependecy,
  fullPage,
}: any) => {
  console.log("responseData", responseData);
  const { t } = useTranslation("common");
  const [selectedNetwork, setSelectedNetwork] = useState<any>();
  const [initialHit, setInitialHit] = useState(false);
  const selectAddressCopy: any = React.useRef(null);
  // useEffect(() => {
  //   if (
  //     responseData?.network &&
  //     responseData?.network[0] &&
  //     initialHit === false
  //   ) {
  //     setSelectedNetwork(responseData?.network[0]);
  //     setInitialHit(true);
  //   }
  // }, [responseData?.network[0]]);
  // const checkNetworkFunc = (networkId: any) => {
  //   if (networkId == 4) {
  //     return `(ERC20 Token)`;
  //   }
  //   if (networkId == 5) {
  //     return `(BEP20 Token)`;
  //   }
  //   if (networkId == 6) {
  //     return `(TRC20 Token)`;
  //   }
  //   return "";
  // };
  const networkHandler = async (networkId: any) => {
    console.log("network", networkId);
    const findObje = responseData?.network?.find(
      (x: any) => x.id === parseInt(networkId)
    );
    setDependecy(Math.random() * 100);
    setSelectedNetwork(findObje);
    if (Number(networkId) === 8) {
      return;
    }
    const response = await networkHandlerApi(
      responseData?.wallet?.id,
      networkId
    );
    console.log("response", response);
  };
  return (
    <>
      <div className="my-wallet-new px-0">
        <h5>{t("Total Balance")}</h5>
        <div className="coin-list-item mt-3">
          <div className="coint-flex">
            <img
              className="icon"
              src={responseData?.deposit?.coin_icon || "/bitcoin.png"}
              alt="coin"
              width="25px"
              height="25px"
            />
            <h6>{responseData?.deposit?.coin_type}</h6>
          </div>

          <p className="coin-price">
            {responseData?.deposit?.balance
              ? formateZert(responseData?.deposit?.balance) +
                " " +
                responseData?.deposit?.coin_type
              : "Loading.."}
          </p>
        </div>

        <div className="wallet-addres">
          <div className="total-balance">
            <h5>{t("Select Network")}</h5>
            <div className="cp-select-area">
              <select
                name="currency"
                className="form-control coin-list-item  mt-3"
                style={{ height: "44px" }}
                onChange={(e) => {
                  networkHandler(e.target.value);
                }}
              >
                {responseData?.network?.map((item: any, index: number) => (
                  <option value={item.id} key={index}>
                    {item?.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {selectedNetwork?.id && (
          <>
            <div className="wallet-addres">
              <h5>{t("Address")}</h5>
              <div className="coin-list-item  mt-3">
                {/* <p className="waring-wallet-text">
              {t(
                `Only send ${
                  responseData?.deposit?.coin_type ?? ""
                } ${checkNetworkFunc(
                  responseData?.deposit?.network
                )} to this address. Sending any others asset to this adress may result in the loss of your deposit!`
              )}
            </p> */}
              </div>
            </div>

            <div className="wallet-addres-generate">
              <div className="coin-list-item">
                <div className="wallet-bar-code">
                  {responseData?.address && (
                    <div className="qr-background">
                      <QRCode
                        className="qrCodeBg rounded"
                        value={responseData?.address}
                        size={150}
                      />
                    </div>
                  )}
                  {selectedNetwork?.address &&
                    responseData?.wallet.coin_type === "USDT" && (
                      <div className="qr-background">
                        <QRCode
                          className="qrCodeBg rounded"
                          value={selectedNetwork?.address}
                          size={150}
                        />
                      </div>
                    )}

                  <div className="copy-box">
                    <div className="input-url input-copy mt-4">
                      {selectedNetwork?.address ? (
                        <>
                          <input
                            onClick={() => {
                              copyTextById(
                                responseData?.wallet.coin_type == "USDT"
                                  ? selectedNetwork?.address
                                  : responseData?.address
                              );
                              selectAddressCopy?.current.select();
                            }}
                            ref={selectAddressCopy}
                            className="address-box address-copy-box border-0 pl-3"
                            type="text"
                            value={
                              responseData?.wallet.coin_type == "USDT"
                                ? selectedNetwork?.address
                                : responseData?.address
                            }
                          />

                          <span
                            className="btn copy-url-btn"
                            onClick={() => {
                              copyTextById(
                                responseData?.wallet.coin_type == "USDT"
                                  ? selectedNetwork?.address
                                  : responseData?.address
                              );
                              selectAddressCopy?.current?.select();
                            }}
                          >
                            <i className="fa fa-clone"></i>
                          </span>
                        </>
                      ) : responseData?.address ? (
                        <>
                          <input
                            onClick={() => {
                              copyTextById(
                                responseData?.wallet.coin_type == "USDT"
                                  ? selectedNetwork?.address
                                  : responseData?.address
                              );
                              selectAddressCopy?.current.select();
                            }}
                            ref={selectAddressCopy}
                            className="border-0 address-copy-box ml-3"
                            type="text"
                            value={responseData?.address}
                          />

                          <span
                            className="copy-url-btn cp-button"
                            onClick={() => {
                              copyTextById(responseData?.address);
                              selectAddressCopy?.current?.select();
                            }}
                          >
                            <i className="fa fa-clone"></i>
                          </span>
                        </>
                      ) : (
                        <p
                          ref={selectAddressCopy}
                          id="url-copy"
                          className="address-box"
                        >
                          {t("No address found!")}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* {!selectedNetwork?.address &&
                responseData?.wallet.coin_type == "USDT" &&
                parseInt(responseData?.wallet.network) === 1 && (
                  <button
                    className=" primary-btn-outline btn-withdraw text-white w-100 mt-4"
                    onClick={() => {
                      GetWalletAddressAction(
                        {
                          wallet_id: router.query.coin_id,
                          network_type: selectedNetwork?.network_type ?? "",
                        },
                        setSelectedNetwork,
                        setDependecy
                      );
                    }}
                  >
                    {t("Get address")}
                  </button>
                )} */}
            </div>
          </>
        )}
      </div>
    </>
  );
};
