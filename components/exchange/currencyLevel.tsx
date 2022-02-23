import React from "react";

const CurrencyLevel = () => {
  return (
    <div className="cxchange-summary-featured">
      <ul className="cxchange-summary-items">
        <li>
          <span className="label">Last price</span>{" "}
          <span className="value">0.00000000</span>
        </li>{" "}
        <li>
          <span className="label">24h change</span>{" "}
          <span className="value decrease">0.00000000</span>
        </li>{" "}
        <li>
          <span className="label">24h high</span>{" "}
          <span className="value">0.00000000</span>
        </li>{" "}
        <li>
          <span className="label">24h Low</span>{" "}
          <span className="value">0.00000000</span>
        </li>{" "}
        <li>
          <span className="label"> 24h volume: </span>{" "}
          <span className="value">0.00000000</span>
        </li>
      </ul>
    </div>
  );
};

export default CurrencyLevel;
