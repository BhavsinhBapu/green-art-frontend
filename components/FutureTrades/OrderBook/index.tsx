import React from "react";
import SellBook from "./Sell/SellBook";
import BuyBook from "./Buy/BuyBook";

const OrderBook = () => {
  return (
    <div className="tradeBookContainer p-3">
      <h6>Order Book</h6>
      <SellBook height={220} />
      <BuyBook height={210} />
    </div>
  );
};

export default OrderBook;
