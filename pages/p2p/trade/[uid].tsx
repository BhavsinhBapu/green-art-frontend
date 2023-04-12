import Footer from "components/common/footer";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { TradeSteps } from "components/P2P/Trade/AddPostStep";
import { SupportChat } from "components/Support/support-chat";
import {
  getP2pOrderDetailsAction,
  paymentP2pOrderAction,
  releaseP2pOrderAction,
  submitTradeFeedback,
} from "state/actions/p2p";
import Echo from "laravel-echo";
import Pusher from "pusher-js";
import { formateData } from "common";
import useTranslation from "next-translate/useTranslation";
import {
  BUY,
  NEGATIVE,
  POSITIVE,
  SELL,
  TRADE_STATUS_CANCELED,
  TRADE_STATUS_ESCROW,
  TRADE_STATUS_PAYMENT_DONE,
  TRADE_STATUS_TRANSFER_DONE,
} from "helpers/core-constants";
import Timer from "components/P2P/P2pHome/Timer";
import SectionLoading from "components/common/SectionLoading";
import TradeCancel from "components/P2P/P2pHome/TradeCancel";
import TradeDispute from "components/P2P/P2pHome/TradeDispute";
import { TradeChat } from "components/P2P/Trade/trade-chat";
import { sendMessageTrade } from "service/p2p";
import { useDispatch, useSelector } from "react-redux";
import { setP2pDetailsOrder, setTradeChat } from "state/reducer/user";
import { RootState } from "state/store";

let socketCall = 0;

const Trading = () => {
  const { t } = useTranslation("common");
  const inputRef = useRef(null);
  const { p2pDetails: details } = useSelector((state: RootState) => state.user);
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const [doc, setDoc] = useState(null);
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<any>();
  const [expried, setExpried] = useState(false);
  const [calling, setCalling] = useState<any>(false);
  const [feedbackType, setfeedbackType] = useState<any>(POSITIVE);
  const [step, setStep] = useState(0);
  const dispatch = useDispatch();
  const router = useRouter();
  const { uid }: any = router.query;
  const sendMessage = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("order_uid", uid);
    formData.append("message", message);
    file && formData.append("file", file);
    setMessage("");
    await sendMessageTrade(formData);
  };
  async function listenMessages() {
    //@ts-ignore
    window.Pusher = Pusher;
    //@ts-ignore
    window.Echo = new Echo({
      broadcaster: "pusher",
      key: "test",
      wsHost: process.env.NEXT_PUBLIC_HOST_SOCKET,
      wsPort: 6006,
      wssPort: 443,
      forceTLS: false,
      cluster: "mt1",
      disableStats: true,
      enabledTransports: ["ws", "wss"],
    });
    //@ts-ignore
    window.Echo.channel(
      `Order-Status-${localStorage.getItem("user_id")}${uid}`
    ).listen(".OrderStatus", (e: any) => {
      console.log(e.order, "order socket");

      dispatch(setP2pDetailsOrder(e.order));
    });
    //@ts-ignore
    window.Echo.channel(
      `New-Message-${localStorage.getItem("user_id")}-${uid}`
    ).listen(".Conversation", (e: any) => {
      console.log(e.data, "eeeeeee");
      dispatch(setTradeChat(e.data));
    });
    // channel: New - Message - { user_id } - { order_uid };
    // event: Conversation;
  }
  useEffect(() => {
    if (socketCall === 0 && uid) {
      listenMessages();
    }
    socketCall = 1;
  }, [socketCall, uid]);
  useEffect(() => {
    uid &&
      getP2pOrderDetailsAction(
        uid.toString(),
        setStep,
        setExpried,
        setLoading,
        dispatch
      );
    console.log("Again calling");
  }, [uid, calling]);
  const handleFileChange = (event: any) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
    event;
    setDoc(event.target.files[0]);
  };
  const handleClick = () => {
    // 👇️ open file input box on click of other element
    //@ts-ignore
    inputRef.current.click();
  };
  return (
    <>
      {loading ? (
        <SectionLoading />
      ) : (
        <div className="my-trade-container  ">
          <div className="boxShadow p-4">
            <div className="py-4">
              {details?.user_type === BUY && (
                <h1>
                  {"Buy"} {details?.order?.coin_type} from{" "}
                  {details?.user_seller?.nick_name}
                </h1>
              )}

              {details?.user_type === SELL && (
                <h1>
                  {"Sell"} {details?.order?.coin_type} to{" "}
                  {details?.user_buyer?.nick_name}
                </h1>
              )}
            </div>
            <div className="mb-3">
              <span className="mr-1">Order number</span>:{" "}
              <span className="badge badge-warning ">
                {details?.order?.order_id}
              </span>
            </div>
            <div className="mb-3">
              <span className="mr-1">Time Created</span>:{" "}
              <span className="badge badge-warning ">
                {formateData(details?.order?.created_at)}
              </span>
            </div>
            {/* order.status */}
            <TradeSteps step={step} order={details?.order} />
            <div className="p-2">
              <h4 className="mb-3">Confirm order info </h4>
              <div className="order-info ">
                <div className="">
                  <p>Amount</p>
                  <h4 className="">
                    {" "}
                    {parseFloat(details?.order?.amount)}{" "}
                    {details?.order?.coin_type}
                  </h4>
                </div>
                <div className="">
                  <p>Price</p>
                  <h4 className="">
                    {" "}
                    {parseFloat(details?.order?.price)}{" "}
                    {details?.order?.currency}
                  </h4>
                </div>
              </div>
            </div>
            {parseInt(details?.order?.is_reported) !== 0 && (
              <div className="boxShadow p-5 text-center mt-3">
                <h4 className="mb-3">Seller created dispute against order</h4>
              </div>
            )}
            {parseInt(details?.order?.status) === TRADE_STATUS_CANCELED && (
              <div className="boxShadow p-5 text-center mt-3">
                <h4 className="mb-3">Trade canceled</h4>
              </div>
            )}
            {parseInt(details?.order?.is_reported) === 0 && (
              <>
                {details?.order?.status === TRADE_STATUS_ESCROW && (
                  <>
                    {details.user_type === BUY && !expried && (
                      <>
                        <div className="mt-4 badge badge-warning p-2">
                          Transfer the fund to the seller account provided below
                        </div>
                        {details?.order?.payment_expired_time && (
                          <Timer
                            payment_expired_time={
                              details?.order?.payment_expired_time
                            }
                          />
                        )}

                        <div className="swap-wrap">
                          <div className="">
                            <span className="file-lable">
                              {t("Select document")}
                            </span>
                          </div>
                          <div className="file-upload-wrapper">
                            {/* @ts-ignore */}
                            <label htmlFor="upload-photo" onClick={handleClick}>
                              {/* @ts-ignore */}
                              {doc ? doc.name : t("Browse")}
                            </label>
                            <input
                              style={{ display: "none" }}
                              ref={inputRef}
                              type="file"
                              onChange={handleFileChange}
                            />
                          </div>
                        </div>
                        <button
                          className="btn nimmu-user-sibmit-button mt-3"
                          disabled={!doc}
                          onClick={() => {
                            paymentP2pOrderAction(
                              details?.order?.uid,
                              doc,
                              setStep
                            );
                          }}
                        >
                          Pay and notify seller
                        </button>
                        <a
                          data-toggle="modal"
                          data-target="#exampleModal"
                          onClick={() => {}}
                        >
                          <button className="btn nimmu-user-sibmit-button mt-3">
                            Cancel
                          </button>
                        </a>
                        <TradeCancel uid={uid} />
                      </>
                    )}
                    {details.user_type === SELL && !expried && (
                      <div className="boxShadow p-5 text-center mt-3">
                        <h4 className="mb-3">Waiting for payment</h4>
                      </div>
                    )}
                    {expried && (
                      <div className="boxShadow p-5 text-center mt-3">
                        <h4 className="mb-3">
                          The payment time has expired and the trade has been
                          automatically cancelled.
                        </h4>
                      </div>
                    )}
                  </>
                )}
                {details?.order?.status === TRADE_STATUS_PAYMENT_DONE && (
                  <>
                    {details.user_type === BUY && !expried && (
                      <>
                        <div className="boxShadow p-5 text-center mt-3">
                          <h4 className="mb-3">Waiting for releasing order</h4>
                        </div>
                        {parseInt(details?.order?.is_reported) === 0 && (
                          <a
                            data-toggle="modal"
                            data-target="#exampleModal1"
                            onClick={() => {}}
                          >
                            <button
                              disabled={
                                parseInt(details?.order?.is_queue) === 1
                              }
                              className="btn nimmu-user-sibmit-button mt-3"
                              onClick={() => {}}
                            >
                              Dispute
                            </button>
                          </a>
                        )}
                        <TradeDispute uid={uid} />
                      </>
                    )}
                    {details.user_type === SELL && !expried && (
                      <>
                        <button
                          className="btn nimmu-user-sibmit-button mt-3"
                          // disabled={parseInt(details?.order?.is_queue) === 1}
                          onClick={() => {
                            releaseP2pOrderAction(uid,dispatch);
                          }}
                        >
                          Release
                        </button>
                        {parseInt(details?.order?.is_reported) === 0 && (
                          <a
                            data-toggle="modal"
                            data-target="#exampleModal1"
                            onClick={() => {}}
                          >
                            <button
                              // disabled={
                              //   parseInt(details?.order?.is_queue) === 1
                              // }
                              className="btn nimmu-user-sibmit-button mt-3"
                              onClick={() => {}}
                            >
                              Dispute
                            </button>
                          </a>
                        )}

                        <TradeDispute uid={uid} />
                      </>
                    )}
                  </>
                )}
                {details?.order?.status === TRADE_STATUS_TRANSFER_DONE && (
                  <>
                    {details.user_type === BUY && !expried && (
                      <>
                        <div className="boxShadow p-5 text-center mt-3">
                          <h4 className="mb-3">Trade completed</h4>
                        </div>
                        <label className="mt-3">
                          <b>Seller Feedback:</b>
                          {details?.order?.seller_feedback}
                        </label>
                        {details?.order?.buyer_feedback === null && (
                          <div className="row">
                            <div className="col-md-12 mt-3">
                              <label> Submit review about seller</label>
                              <div className="P2psearchBox position-relative">
                                <textarea
                                  value={feedback}
                                  onChange={(e) => {
                                    setFeedback(e.target.value);
                                  }}
                                  className=""
                                  placeholder=""
                                ></textarea>
                              </div>
                              <>
                                <label>Review type</label>

                                <div className="select-method">
                                  <div
                                    className={`${
                                      feedbackType === POSITIVE &&
                                      "select-method-item-active"
                                    } select-method-item mr-0 mr-md-3`}
                                    onClick={() => {
                                      setfeedbackType(POSITIVE);
                                    }}
                                  >
                                    Positive
                                  </div>
                                  <div
                                    className={`${
                                      feedbackType === NEGATIVE &&
                                      "select-method-item-active"
                                    } select-method-item mr-0 mr-md-3`}
                                    onClick={() => {
                                      setfeedbackType(NEGATIVE);
                                    }}
                                  >
                                    Negative
                                  </div>
                                </div>
                              </>
                            </div>
                            <button
                              className="btn nimmu-user-sibmit-button mt-3"
                              onClick={() => {
                                submitTradeFeedback(
                                  details?.order?.uid,
                                  feedbackType,
                                  feedback
                                );
                              }}
                            >
                              Submit review
                            </button>
                          </div>
                        )}
                      </>
                    )}
                    {details.user_type === SELL && !expried && (
                      <>
                        <div className="boxShadow p-5 text-center mt-3">
                          <h4 className="mb-3">Trade completed</h4>
                        </div>

                        <label className="mt-3">
                          <b>Buyer Feedback:</b>
                          {details?.order?.buyer_feedback}
                        </label>
                        {details?.order?.seller_feedback === null && (
                          <div className="row">
                            <div className="col-md-12 mt-3">
                              <label>Submit review about buyer</label>
                              <div className="P2psearchBox position-relative">
                                <textarea
                                  value={feedback}
                                  onChange={(e) => {
                                    setFeedback(e.target.value);
                                  }}
                                  className=""
                                  placeholder=""
                                ></textarea>
                              </div>
                              <label>Review type</label>

                              <div className="select-method">
                                <div
                                  className={`${
                                    feedbackType === POSITIVE &&
                                    "select-method-item-active"
                                  } select-method-item mr-0 mr-md-3`}
                                  onClick={() => {
                                    setfeedbackType(POSITIVE);
                                  }}
                                >
                                  Positive
                                </div>
                                <div
                                  className={`${
                                    feedbackType === NEGATIVE &&
                                    "select-method-item-active"
                                  } select-method-item mr-0 mr-md-3`}
                                  onClick={() => {
                                    setfeedbackType(NEGATIVE);
                                  }}
                                >
                                  Negative
                                </div>
                              </div>
                            </div>
                            <button
                              className="btn nimmu-user-sibmit-button mt-3"
                              onClick={() => {
                                submitTradeFeedback(
                                  details?.order?.uid,
                                  feedbackType,
                                  feedback
                                );
                              }}
                            >
                              Submit review
                            </button>
                          </div>
                        )}
                      </>
                    )}
                  </>
                )}
              </>
            )}
          </div>
          <div className="">
            <TradeChat
              col="col-lg-12"
              details={details}
              sendMessage={sendMessage}
              setMessage={setMessage}
              setFile={setFile}
              message={message}
            />
          </div>
        </div>
      )}
      <div className="container">
        {JSON.stringify(details?.order?.status)}
        {calling ? "True" : "False"}
      </div>

      <Footer />
    </>
  );
};

export default Trading;
