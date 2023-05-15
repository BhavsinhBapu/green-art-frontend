import { formateData } from "common";
import { STAKING_TERMS_TYPE_STRICT } from "helpers/core-constants";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import { WalletWithdrawProcessApiAction } from "state/actions/wallet";

const MyModalsPayment = ({ modalData }: any) => {
  const { t } = useTranslation("common");
  console.log(modalData, "modalDatamodalData");
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {t("Google Authentication")}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row pt-6 mt-3">
              <div className="col-lg-12">
                <div className="est-price">
                  <p>Type</p>
                  <h6 className="pl-3 text-warning">
                    {modalData?.terms_type === STAKING_TERMS_TYPE_STRICT
                      ? "Locked"
                      : "Flexible"}
                  </h6>
                </div>

                <div className="est-price">
                  <p>Stake Date</p>
                  <h6 className="pl-3">{formateData(modalData?.stake_date)}</h6>
                </div>
                <div className="est-price">
                  <p>Value Date</p>
                  <h6 className="pl-3">{formateData(modalData?.value_date)}</h6>
                </div>
                <div className="est-price">
                  <p>Interest Period</p>
                  <h6 className="pl-3">{modalData?.interest_period} Days</h6>
                </div>
                <div className="est-price">
                  <p>Interest End Date</p>
                  <h6 className="pl-3">{modalData?.interest_end_date} </h6>
                </div>
                {modalData?.terms_type !== STAKING_TERMS_TYPE_STRICT && (
                  <div className="est-price">
                    <p>Minimum Maturity Period</p>
                    <h6 className="pl-3">
                      {modalData?.minimum_maturity_period} Day
                    </h6>
                  </div>
                )}
                <div className="est-price">
                  <p>Minimum Amount</p>
                  <h6 className="pl-3">{modalData?.minimum_investment}</h6>
                </div>
                <div className="est-price">
                  <p>Available Amount</p>
                  <h6 className="pl-3">
                    {!parseFloat(modalData?.total_investment_amount)
                      ? parseFloat(modalData?.maximum_investment) - 0
                      : parseFloat(modalData?.maximum_investment) -
                        parseFloat(modalData?.total_investment_amount)}
                  </h6>
                </div>
                {modalData?.terms_type !== STAKING_TERMS_TYPE_STRICT && (
                  <div className="est-price">
                    <p>Minimum Maturity Period</p>
                    <h6 className="pl-3">
                      {modalData?.minimum_maturity_period} Day
                    </h6>
                  </div>
                )}

                <div className="est-price mt-5">
                  <h4>Est. APR</h4>
                  <h4 className="text-success">
                    {modalData?.offer_percentage}%
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyModalsPayment;
