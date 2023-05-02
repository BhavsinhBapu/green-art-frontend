import React from "react";
import { StakingTopBar } from "./common/TopBar";
import { StakingFilter } from "./common/StakingFilter";
import OfferTable from "./Home/OfferTable";
import FaqStaking from "./Home/FaqStaking";
import Footer from "components/common/footer";

const index = () => {
  return (
    <>
      <div className="mb-5">
        <div className="p2p_bg">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="text-white">This is a page title</h2>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis, doloribus possimus nemo cumque officiis dolores
                  repudiandae ad placeat corrupti exercitationem asperiores
                  magni sequi a, totam veritatis blanditiis beatae soluta
                  explicabo?
                </p>
              </div>
            </div>
          </div>
        </div>
        <StakingTopBar />
        <StakingFilter />
        <OfferTable />
        <FaqStaking />
      </div>
      <Footer />
    </>
  );
};

export default index;
