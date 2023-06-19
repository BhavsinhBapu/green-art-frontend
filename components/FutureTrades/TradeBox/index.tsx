import React from "react";
import OrderBook from "../OrderBook";

const TradeBox = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-7 col-md-12">8</div>
        <div className="col-lg-5 col-md-12">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-5">
              <OrderBook />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">Responsive</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeBox;
