import { SEND } from "helpers/core-constants";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { walletBalanceTransfer } from "service/p2p";
import { RootState } from "state/store";

const Exchange = () => {
  const router = useRouter();
  const [amount, setAmount] = useState(0);
  const { type, coin } = router.query;
  const { settings } = useSelector((state: RootState) => state.common);
  const getBalance = async () => {
    const response = await walletBalanceTransfer(type, coin, amount);
    if (response.success) {
      toast.success(response.message);
      router.push("/p2p/p2p-wallet");
    } else {
      toast.error(response.message);
    }
  };
  return (
    <div className="container-fluid my-3 p2p-wallet-form">
      <div className="row h-full">
        <div className="col-lg-6 h-full">
          <div className="h-full">
            {/* <img src={settings.login_background || "https://plus.unsplash.com/premium_photo-1675070805822-77b5257f4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"} alt=""/> */}
            <img
              src={
                "https://images.unsplash.com/photo-1658225282648-b199eb2a4830?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1138&q=80"
              }
              className="h-full w-full object-fit-cover-img"
              alt=""
            />
          </div>
        </div>
        <div className="col-lg-6 text-center">
          <div className="row h-full" >
            <div className="offset-lg-1"></div>
            <div className="col-lg-10 h-full"><div className="d-flex align-items-center h-full">
            <div className="boxShadow p-5 w-full border-0">
              {/* @ts-ignore */}
              <h1 className="font-medium">{parseInt(type) === SEND ? "Send" : "Recieve"} Balance</h1>
              <p>
                Please Sign In To Your Account Please Sign In To Your Account
              </p>
              <div className="P2psearchBox position-relative mt-3">
                <input
                  type="number"
                  placeholder="Enter amount EUR"
                  value={amount}
                  onChange={(e) => {
                    setAmount(parseFloat(e.target.value));
                  }}
                />
              </div>{" "}
              <button className="primary-btn w-100 mt-3 py-2" onClick={getBalance}>
                exchange
              </button>
            </div>
          </div></div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  await SSRAuthCheck(ctx, "/p2p");

  return {
    props: {},
  };
};
export default Exchange;
