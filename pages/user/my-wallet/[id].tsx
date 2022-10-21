import React, { useState, useRef, useEffect } from "react";
import Qr from "components/common/qr";
import { copyTextById, formateZert } from "common";
import useTranslation from "next-translate/useTranslation";
import {
  GetWalletAddressAction,
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
import { MY_WALLET_DEPOSIT_TYPE } from "helpers/core-constants";

const DeposiAndWithdraw = () => {
  const router = useRouter();
  const { t } = useTranslation("common");

  const [responseData, setResponseData]: any = useState();

  const [selectedNetwork, setSelectedNetwork] = useState(
    responseData?.data && responseData?.data[0]
  );
  const selectAddress: any = useRef();
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

  console.log("responseData", responseData, "network", selectedNetwork);

  useEffect(() => {
    console.log("routerrererererer", router.query);
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
            <div className={`col-md-7`}>
              <div className={`box-one single-box visible`}>
                <div className="section-wrapper">
                  <div className="deposit-info-area" id="wallet_deposit_area">
                    <div className="deposit-info-top">
                      <div className="balance-box">
                        <img
                          className="icon"
                          src={
                            responseData?.deposit?.coin_icon || "/bitcoin.png"
                          }
                          alt="coin"
                        />
                        <div className="balance-content">
                          <h4>
                            {responseData?.deposit?.coin_type} {t("Balance")}
                          </h4>
                          <h5>
                            {responseData?.deposit?.coin_type} {t("Wallet")}
                          </h5>
                        </div>
                      </div>
                      {/* <a
                href="#"
                className="close-btn"
                // onClick={() => {
                //   TurnoffSetShow();
                // }}
              >
                <i className="fa fa-times" />
              </a> */}
                    </div>
                    <div className="total-balance">
                      <div className="total-balance-left">
                        <h3>{t("Total Balance")}</h3>
                      </div>
                      <div className="total-balance-right">
                        <h3>
                          {formateZert(responseData?.deposit?.balance)}
                          {responseData?.deposit?.coin_type}
                        </h3>
                      </div>
                    </div>
                    {responseData?.wallet.coin_type == "USDT" && (
                      <div className="total-balance">
                        <select
                          name="currency"
                          className="form-control"
                          onChange={(e) => {
                            const findObje = responseData?.data?.find(
                              (x: any) => x.id === parseInt(e.target.value)
                            );
                            setSelectedNetwork(findObje);
                          }}
                        >
                          {responseData?.data?.map(
                            (item: any, index: number) => (
                              <option value={item.id} key={index}>
                                {item?.network_name}
                              </option>
                            )
                          )}
                        </select>
                      </div>
                    )}
                    <div className="address-area">
                      <div className="address-area-info">
                        <h3 className="text-white">
                          <i
                            className="fa fa-exclamation-triangle ml-2"
                            aria-hidden="true"
                          ></i>
                        </h3>
                        <p className="text-white">
                          {t("Only send")} {responseData?.deposit?.coin_type}{" "}
                          {t("to this address.")}
                          {t(
                            "Please note that only supported networks on our platform are shown, if you deposit via another network your assets may be lost."
                          )}
                        </p>
                      </div>
                      <div className="input-url">
                        <input
                          onClick={() => {
                            copyTextById(
                              responseData?.wallet.coin_type == "USDT"
                                ? selectedNetwork?.address
                                : responseData?.address
                            );
                            selectAddress.current.select();
                          }}
                          ref={selectAddress}
                          className="address-box address-copy-box"
                          type="text"
                          value={
                            responseData?.wallet.coin_type == "USDT"
                              ? selectedNetwork?.address
                              : responseData?.address
                          }
                        />
                        <p
                          ref={selectAddress}
                          id="url-copy"
                          className="address-box"
                        >
                          {responseData?.wallet.coin_type == "USDT"
                            ? selectedNetwork?.address
                            : responseData?.address}
                        </p>
                        <button
                          type="button"
                          className="btn copy-url-btn"
                          onClick={() => {
                            copyTextById(
                              responseData?.wallet.coin_type == "USDT"
                                ? selectedNetwork?.address
                                : responseData?.address
                            );
                            selectAddress.current.select();
                          }}
                        >
                          <i className="fa fa-clone"></i>
                        </button>
                      </div>
                      {!selectedNetwork?.address &&
                        responseData?.wallet.coin_type == "USDT" && (
                          <button
                            className=" primary-btn-outline btn-withdraw text-white w-100 mt-2"
                            onClick={() => {
                              GetWalletAddressAction(
                                {
                                  wallet_id: router.query.coin_id,
                                  network_type:
                                    selectedNetwork?.network_type ?? "",
                                },
                                setSelectedNetwork
                              );
                            }}
                          >
                            {t("Get address")}
                          </button>
                        )}
                      <div className="bar-code-area">
                        {responseData?.address &&
                          responseData?.wallet.coin_type !== "USDT" && (
                            <Qr value={responseData?.address} />
                          )}
                      </div>
                      <div className="bar-code-area">
                        {selectedNetwork?.address &&
                          responseData?.wallet.coin_type === "USDT" && (
                            <Qr value={selectedNetwork?.address} />
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
