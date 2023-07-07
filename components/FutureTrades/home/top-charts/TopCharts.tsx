import React from "react";

import AreaCharts from "./AreaCharts";
import PieCharts from "./PieCharts";
import PieChartsWithNeddle from "./PieChartsWithNeddle";
import HighestSearchedLists from "./HighestSearchedLists";

export default function TopCharts({tradeDatas}:any) {
  return (
    <div className="row">
      <div className="col-lg-3 col-md-6 px-2">
        <AreaCharts />
      </div>
      <div className="col-lg-3 col-md-6 px-2">
        <PieCharts />
      </div>
      <div className="col-lg-3 col-md-6 px-2">
        <PieChartsWithNeddle />
      </div>
      <div className="col-lg-3 col-md-6 px-2">
        <HighestSearchedLists tradeDatas={tradeDatas}/>
      </div>
    </div>
  );
}
