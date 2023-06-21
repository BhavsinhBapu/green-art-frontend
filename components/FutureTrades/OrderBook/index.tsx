import React from "react";
import SellBook from "./Sell/SellBook";
import BuyBook from "./Buy/BuyBook";

const OrderBook = () => {
  const [select, setSelect] = React.useState(3);

  return (
    <div className="tradeBookContainer p-3">
      <h6>Order Book</h6>
      <div className="trades-headers mb-3">
        <div className="orderBookIcons">
          <h3
            onClick={() => {
              setSelect(2);
            }}
            className="icon-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="css-3kwgah w-25"
            >
              <path d="M4 4h7v16H4V4z" fill="#0ECB81"></path>
              <path
                d="M13 4h7v4h-7V4zm0 6h7v4h-7v-4zm7 6h-7v4h7v-4z"
                fill="currentColor"
              ></path>
            </svg>
          </h3>
          <h3
            onClick={() => {
              setSelect(1);
            }}
            className="icon-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="css-3kwgah  w-25"
            >
              <path d="M4 4h7v16H4V4z" fill="#F6465D"></path>
              <path
                d="M13 4h7v4h-7V4zm0 6h7v4h-7v-4zm7 6h-7v4h7v-4z"
                fill="currentColor"
              ></path>
            </svg>
          </h3>
          <h3
            onClick={() => {
              setSelect(3);
            }}
            className="icon-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="css-3kwgah w-25"
            >
              <path d="M4 4h7v7H4V4z" fill="#F6465D"></path>
              <path d="M4 13h7v7H4v-7z" fill="#0ECB81"></path>
              <path
                d="M13 4h7v4h-7V4zm0 6h7v4h-7v-4zm7 6h-7v4h7v-4z"
                fill="currentColor"
              ></path>
            </svg>
          </h3>
        </div>
      </div>
      {select === 3 && (
        <>
          <SellBook height={220} />
          <div className="trades-table-footer">
            <div className="trades-table-row">
              <span className="value-same">29011.60</span>
              <span className="value-previous"> 29011.6(USDT)</span>
            </div>
          </div>
          <BuyBook height={210} />
        </>
      )}
      {select === 1 && (
        <>
          <SellBook height={220} />
          <div className="trades-table-footer">
            <div className="trades-table-row">
              <span className="value-same">29011.60</span>
              <span className="value-previous"> 29011.6(USDT)</span>
            </div>
          </div>
        </>
      )}
      {select === 2 && (
        <>
          <div className="trades-table-footer">
            <div className="trades-table-row">
              <span className="value-same">29011.60</span>
              <span className="value-previous"> 29011.6(USDT)</span>
            </div>
          </div>
          <BuyBook height={210} />
        </>
      )}
    </div>
  );
};

export default OrderBook;
