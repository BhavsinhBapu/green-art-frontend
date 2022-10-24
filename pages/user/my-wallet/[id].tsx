import React, { useState, useRef, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import {
  WalletDepositApiAction,
  WalletWithdrawApiAction,
} from "state/actions/wallet";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import {
  pageAvailabilityCheck,
  SSRAuthCheck,
} from "middlewares/ssr-authentication-check";
import { parseCookies } from "nookies";
import { GetUserInfoByTokenServer } from "service/user";
import Link from "next/link";
import DepositFaq from "components/deposit/DepositFaq";
import {
  MY_WALLET_DEPOSIT_TYPE,
  MY_WALLET_WITHDRAW_TYPE,
} from "helpers/core-constants";
import { DipositComponent } from "components/MyWallet/diposit";
import { WithdrawComponent } from "components/MyWallet/withdraw";

const DeposiAndWithdraw = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  const [responseData, setResponseData]: any = useState();

  const faqs = [
    {
      id: 1,
      faq_type_id: 2,
      answer: t("How to deposit?"),
      question: t("How to deposit?"),
    },
    {
      id: 2,
      faq_type_id: 2,
      answer: t("How to deposit?"),
      question: t("How to deposit?"),
    },
    {
      id: 3,
      faq_type_id: 2,
      answer: t("How to deposit?"),
      question: t("How to deposit?"),
    },
    {
      id: 4,
      faq_type_id: 2,
      answer: t("How to deposit?"),
      question: t("How to deposit?"),
    },
    {
      id: 5,
      faq_type_id: 2,
      answer: t("How to deposit?"),
      question: t("How to deposit?"),
    },
  ];

  const handleWithdrawAndDeposit = async (actionType: string, id: number) => {
    // if (!router.query.id) return;

    if (actionType === MY_WALLET_DEPOSIT_TYPE) {
      const response = await WalletDepositApiAction(
        Number(router.query.coin_id)
      );
      if (response.success === true) {
        setResponseData({
          ...response,
          deposit: response.wallet,
          address: response.address ? response.address : null,
        });
      }
    } else {
      const response = await WalletWithdrawApiAction(
        Number(router.query.coin_id)
      );
      if (response.success === true) {
        setResponseData({
          ...response,
          withdraw: response.wallet,
          address: response.address,
        });
      }
    }
  };

  useEffect(() => {
    handleWithdrawAndDeposit(
      String(router.query.id),
      Number(router.query.coin_id)
    );
  }, []);

  return (
    <>
      <div className="page-wrap my-wallet-page">
        <div className="container">
          <div className="row">
            {router.query.id === MY_WALLET_DEPOSIT_TYPE && (
              <DipositComponent responseData={responseData} router={router} />
            )}

            {router.query.id === MY_WALLET_WITHDRAW_TYPE && (
              <WithdrawComponent responseData={responseData} router={router} />
            )}

            <div className={`col-md-5`}>
              <div className={`box-one single-box visible`}>
                <div className="section-wrapper">
                  <DepositFaq faqs={faqs} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  await SSRAuthCheck(ctx, "/user/my-wallet/deposit");
  const cookies = parseCookies(ctx);
  const response = await GetUserInfoByTokenServer(cookies.token);
  const commonRes = await pageAvailabilityCheck();
  if (parseInt(commonRes.currency_deposit_status) !== 1) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      user: response.user,
    },
  };
};

export default DeposiAndWithdraw;
