import React from "react";

import AreaCharts from "./AreaCharts";
import PieCharts from "./PieCharts";
import PieChartsWithNeddle from "./PieChartsWithNeddle";
import HighestSearchedLists from "./HighestSearchedLists";
import ListCharts from "./ListCharts";

export default function TopCharts({ tradeDatas }: any) {
  return (
    <div className="row body-margin-top-custom" style={{ rowGap: "20px" }}>
      <div className="col-lg-3 col-md-6">
        <div className="shadow-sm wallet-card-info-container">
          <AreaCharts tradeDatas={tradeDatas} />
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="shadow-sm wallet-card-info-container">
          <PieCharts tradeDatas={tradeDatas} />
        </div>
      </div>
      <div className="col-lg-3 col-md-6 ">
        {/* <PieChartsWithNeddle /> */}
        <div className="shadow-sm wallet-card-info-container">
          <ListCharts tradeDatas={tradeDatas} />
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="shadow-sm wallet-card-info-container">
          <HighestSearchedLists tradeDatas={tradeDatas} />
        </div>
      </div>
    </div>
  );
}
