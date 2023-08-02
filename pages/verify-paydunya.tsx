import SectionLoading from "components/common/SectionLoading";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { VerificationPayDunya, currencyDepositProcess } from "service/deposit";
import { submitFiatWalletDepositApi } from "service/fiat-wallet";
import { TokenBuyIcoPaystackAction } from "state/actions/launchpad";

const VerifyPaystack = () => {
  const [loading, setLoading] = useState(true);
  //http://localhost:3001/verify-paystack?phase_id=1&token_id=1&amount=33&payment_method=9&token=396c6jb4u7&reference=396c6jb4u7
  const router = useRouter();
  const { token, wallet_id, amount } = router.query;
  useEffect(() => {
    token &&
      wallet_id &&
      amount &&
      VerificationPayDunya(token).then((response: any) => {
        if (response.success) {
          currencyDepositProcess({
            transaction_id: token,
            payment_method_id: "paydunya",
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
  }, [token]);
  return <div>{loading && <SectionLoading />}</div>;
};

export default VerifyPaystack;
