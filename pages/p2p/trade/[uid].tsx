import Footer from "components/common/footer";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { TradeSteps } from "components/P2P/Trade/AddPostStep";
import { SupportChat } from "components/Support/support-chat";

const Trading = () => {
  
  return (
    <>
      <div className="my-trade-container  ">
        <div className="boxShadow p-4">
          <div className="py-4">
            <h1>Buy USDT from riralam</h1>
          </div>
          <div className="mb-3">
            <span className="mr-1">Order number</span>:{" "}
            <span className="badge badge-warning ">e32e3q2er43r3ft</span>
          </div>
          <div className="mb-3">
            <span className="mr-1">Time Created</span>:{" "}
            <span className="badge badge-warning ">Tuesday</span>
          </div>
          <TradeSteps />
          <div className="p-2">
            <h4 className="mb-3">Confirm order info </h4>
            <div className="order-info ">
              <div className="">
                <p>Amount</p>
                <h4 className=""> Tk. 13,589 </h4>
              </div>
              <div className="">
                <p>Price</p>
                <h4 className=""> Tk. 53,589 </h4>
              </div>
              <div className="">
                <p>Quantity</p>
                <h4 className=""> 15674 USDT</h4>
              </div>
            </div>
            <div className="mt-4 badge badge-warning p-2">
              Transfer the fund to the seller account provided below
            </div>
            <div className="mt-3">
              <h4 className="mb-3">Choose Payment </h4>
            </div>
            <div className="">
              <div className="row mt-2">
                <div className="col-md-2">
                  <div className="adFromCheckBox">
                    <input
                      type="radio"
                      name="optradio"
                      // checked={priceType === FIXED_PRICE}
                      // onChange={() => setPriceType(FIXED_PRICE)}
                    />
                    <p>bkash</p>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="adFromCheckBox">
                    <input
                      type="radio"
                      name="optradio"
                      // checked={priceType === FIXED_PRICE}
                      // onChange={() => setPriceType(FIXED_PRICE)}
                    />
                    <p>nagad</p>
                  </div>
                </div>
              </div>
              <div className="order-info mt-3">
                <div className="">
                  <p>Referance Message</p>
                  <p className="">dasldklamsdlkaksldm3234</p>
                </div>
                <div className="">
                  <p>Bkash wallet number</p>
                  <p className="">019284758477</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <SupportChat col="col-lg-12" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Trading;
