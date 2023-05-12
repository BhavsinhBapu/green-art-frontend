import { InvesmentOrderTable } from "components/Staking/MyOrders";
import { StakingTopBar } from "components/Staking/common/TopBar";
import Footer from "components/common/footer";
import React from "react";
import { myOrderAction } from "state/actions/staking";

const myOrder = () => {
  return (
    <>
      <div className="">
        <div className="section-top-wrap mb-25">
          <div className="overview-area">
            <div className="overview-left">
              <h2 className="section-top-title">My Invesments</h2>
            </div>
          </div>
        </div>
      </div>
      <StakingTopBar />
      <InvesmentOrderTable actionFunction={myOrderAction} filter={true} />
      <Footer />
    </>
  );
};

export default myOrder;
