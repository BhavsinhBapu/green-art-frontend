import React, { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CardForm from "components/deposit/cardForm";
import { loadStripe } from "@stripe/stripe-js";
import useTranslation from "next-translate/useTranslation";
import { TokenBuyIcoStripeAction } from "state/actions/launchpad";
import { STRIPE } from "helpers/core-constants";
const StripePayment = ({ initialData }: any) => {
  const [loading, setLoading] = useState(false);
  const [credential, setCredential] = useState<any>({
    amount: 0,
    stripe_token: null,
  });
  const { t } = useTranslation("common");

  //@ts-ignore
  const stripe = loadStripe(process.env.NEXT_PUBLIC_PUBLISH_KEY);
  return (
    <div className="w-100 ico-tokenCreate row">
      {!credential.stripe_token && (
        <div className="col-lg-12 mb-3">
          <Elements stripe={stripe}>
            <CardForm setCredential={setCredential} credential={credential} />
          </Elements>
        </div>
      )}
      {credential.stripe_token && (
        <>
          <div className="col-md-12 form-input-div">
            <label className="ico-label-box" htmlFor="">
              {t("Amount")}
            </label>
            <input
              type="number"
              name="amount"
              value={credential.amount}
              placeholder="amount"
              required
              className={`ico-input-box`}
              onChange={(e: any) => {
                setCredential({
                  ...credential,
                  amount: e.target.value,
                });
              }}
            />
          </div>
          <button
            disabled={!credential.amount}
            className="primary-btn-outline w-100"
            type="button"
            onClick={() => {
              TokenBuyIcoStripeAction(
                initialData,
                setLoading,
                credential.amount,
                credential.stripe_token,
                STRIPE
              );
            }}
          >
            {loading ? "Please Wait" : t("Make Payment")}
          </button>
        </>
      )}
    </div>
  );
};

export default StripePayment;
