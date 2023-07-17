import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "state/store";

import {
  EXCHANGE_LAYOUT_ONE,
  EXCHANGE_LAYOUT_TWO,
} from "helpers/core-constants";
import LayoutOne from "./layouts/layout-one";
import LayoutTwo from "./layouts/layout-two";

const DashboardBody = ({ ThemeColor, layout }: any) => {
  const { settings } = useSelector((state: RootState) => state.common);

  return (
    <>
      {/* {parseInt(settings?.exchange_layout_view) === EXCHANGE_LAYOUT_ONE && (
        <LayoutOne ThemeColor={ThemeColor} />
      )} */}
      {layout === EXCHANGE_LAYOUT_ONE && <LayoutOne ThemeColor={ThemeColor} />}
      {layout === EXCHANGE_LAYOUT_TWO && <LayoutTwo ThemeColor={ThemeColor} />}
    </>
  );
};

export default DashboardBody;
