import React from "react";

import MarketIndexCard from "./MarketIndexCard";

export default function MarketIndex({tradeDatas}: any) {
  return (
    <div className="container">
      <div className="row pt-3">
        <div className="col-12 px-2" style={{ marginBottom: "24px" }}>
          <h4>Market Index</h4>
        </div>
        <div className="col-12 px-2">
          <div className="row">
            {tradeDatas?.data?.map((item:any, index: any) => (
              <div className="col-6" key={index}>
                <MarketIndexCard item={item}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
