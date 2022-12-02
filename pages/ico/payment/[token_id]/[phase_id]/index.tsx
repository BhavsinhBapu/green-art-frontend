import ScaletonLoading from "components/common/ScaletonLoading";
import BankDeposit from "components/deposit/bank-deposit";
import PaypalSection from "components/deposit/PaypalSection";
import SelectDeposit from "components/deposit/selectDeposit";
import StripeDeposit from "components/deposit/stripe-deposit";
import WalletDeposit from "components/deposit/wallet-deposit";
import BankPayment from "components/ico/payment/Bank-payment";
import CryptoPayment from "components/ico/payment/CryptoPayment";
import PaypalPayment from "components/ico/payment/PaypalPayment";
import StripePayment from "components/ico/payment/StripePayment";
import {
  BANK_DEPOSIT,
  CRYPTO_DEPOSIT,
  PAYPAL,
  SKRILL,
  STRIPE,
  WALLET_DEPOSIT,
} from "helpers/core-constants";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { TokenBuyPageAction } from "state/actions/launchpad";

const index = () => {
  const { t } = useTranslation("common");
  const [selectedMethod, setSelectedMethod] = useState<any>({
    method: BANK_DEPOSIT,
  });
  const router = useRouter();
  const [initialData, setInitialData] = useState<any>({
    phase_id: 0,
    token_id: 0,
  });
  const [loading, setLoading] = useState(true);
  const [pageInfo, setPageInfo] = useState<any>({});
  useEffect(() => {
    TokenBuyPageAction(setPageInfo, setLoading);
  }, []);
  useEffect(() => {
    setInitialData({
      phase_id: router.query.phase_id,
      token_id: router.query.token_id,
    });
  }, [router.query]);

  return (
    <div>
      <div className="page-main-content">
        <div className="container-fluid">
          <div className="deposit-page">
            <div className="section-top-wrap mb-25">
              <div className="profle-are-top">
                <h2 className="section-top-title">{t("ICO Payment")}</h2>
              </div>
            </div>

            <div className="asset-balances-area">
              <div className="section-wrapper boxShadow bank-section">
                <div className="container">
                  <div className="deposit-conatiner">
                    <div className="cp-user-title">
                      <h4>{t("Select method")}</h4>
                    </div>
                    {pageInfo?.payment_methods && (
                      <SelectDeposit
                        setSelectedMethod={setSelectedMethod}
                        depositInfo={pageInfo}
                        selectedMethod={selectedMethod}
                      />
                    )}
                    <div className="row">
                      {loading ? (
                        <ScaletonLoading />
                      ) : (
                        <div className={`col-sm-12`}>
                          {parseInt(selectedMethod.method) ===
                          CRYPTO_DEPOSIT ? (
                            <CryptoPayment
                              initialData={initialData}
                              walletlist={pageInfo?.wallet}
                            />
                          ) : parseInt(selectedMethod.method) ===
                            BANK_DEPOSIT ? (
                            <BankPayment
                              pageInfo={pageInfo}
                              initialData={initialData}
                            />
                          ) : parseInt(selectedMethod.method) === STRIPE ? (
                            <StripePayment initialData={initialData} />
                          ) : parseInt(selectedMethod.method) === PAYPAL ? (
                            <PaypalPayment initialData={initialData} />
                          ) : (
                            ""
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
