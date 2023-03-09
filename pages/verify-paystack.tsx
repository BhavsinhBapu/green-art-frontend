import SectionLoading from "components/common/SectionLoading";
import { PAYSTACK } from "helpers/core-constants";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  VerificationPaystackPayment,
  currencyDepositProcess,
} from "service/deposit";
import { TokenBuyIcoPaystackAction } from "state/actions/launchpad";

const VerifyPaystack = () => {
  const [loading, setLoading] = useState(true);
  //http://localhost:3001/verify-paystack?phase_id=1&token_id=1&amount=33&payment_method=9&trxref=396c6jb4u7&reference=396c6jb4u7
  const router = useRouter();
  const {
    reference,
    trxref,
    wallet_id,
    amount,
    phase_id,
    token_id,
    payment_method,
    api_type,
  } = router.query;
  useEffect(() => {
    if (api_type == "ico") {
      TokenBuyIcoPaystackAction({
        phase_id: phase_id,
        token_id: token_id,
        payment_method: payment_method,
        amount: amount,
      });
    } else {
      reference &&
        trxref &&
        wallet_id &&
        amount &&
        VerificationPaystackPayment(reference).then((response: any) => {
          if (response.success) {
            //   toast.success(response.message);
            currencyDepositProcess({
              transaction_id: trxref,
              payment_method_id: "pay_stack",
              wallet_id: wallet_id,
              amount: amount,
            }).then((currencyResponse: any) => {
              if (currencyResponse.success) {
                toast.success(currencyResponse.message);
              } else {
                toast.error(currencyResponse.message);
              }
            });
          } else {
            toast.error(response.message);
          }
          router.push("/fiat-deposit");
        });
    }
  }, [reference]);
  return <div>{loading && <SectionLoading />}</div>;
};

export default VerifyPaystack;
