import SectionLoading from "components/common/SectionLoading";
import { PAYSTACK } from "helpers/core-constants";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  VerificationPaystackPayment,
  currencyDepositProcess,
} from "service/deposit";

const VerifyPaystack = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { reference, trxref, wallet_id, amount } = router.query;
  useEffect(() => {
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
  }, [reference]);
  return <div>{loading && <SectionLoading />}</div>;
};

export default VerifyPaystack;
