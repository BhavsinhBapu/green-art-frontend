import Footer from "components/common/footer";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
import { GetServerSideProps } from "next";
import useTranslation from "next-translate/useTranslation";
import React, { useState } from "react";

export default function index() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
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
                  >
                    {[1, 2, 3].map((item: any, index: number) => (
                      <option value={item} key={index}>
                        Option 1
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
                    className="form-control coin-list-item  mt-3"
                    style={{ height: "44px" }}
                  >
                    {[1, 2, 3].map((item: any, index: number) => (
                      <option value={item} key={index}>
                        Option 1
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
                  />
                </div>
              </div>
              <button
                className="primary-btn-outline bg-primary-color w-100 mt-4"
                type="button"
                style={{ height: "44px" }}
              >
                {t("Submit")}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {!isModalOpen && (
        <>
          <div className="modal d-block">
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Modal title</h5>
                  <button
                    type="button"
                    className="close"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>Modal body text goes here.</p>
                </div>
                <div className="modal-footer">
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
                </div>
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
