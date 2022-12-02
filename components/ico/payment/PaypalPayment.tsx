import PaypalButtons from "components/ico/payment/PaypalComponent";
import { PAYPAL } from "helpers/core-constants";
import useTranslation from "next-translate/useTranslation";
import React, { useState } from "react";

const PaypalPayment = ({ initialData }: any) => {
  const { t } = useTranslation("common");
  const [credential, setCredential] = useState<any>({
    payment_method_id: PAYPAL,
    amount: 0,
    currency: "USD",
    paypal_token: null,
    phase_id: initialData.phase_id,
    token_id: initialData.token_id,
  });
  return (
    <div className="w-100 ico-tokenCreate row">
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
      {credential.amount && (
        <div className="col-lg-12 mb-3">
          <PaypalButtons
            credential={credential}
            setCredential={setCredential}
          />
        </div>
      )}
    </div>
  );
};

export default PaypalPayment;
