import Link from "next/link";
import React from "react";

const SwapCoinSidebar = () => {
  return (
    <div className="page-left-sidebar">
      <div className="sidebar-top">
        <ul className="left-menu">
          <Link href="">
            <li className="active ">
              <a href="">Market</a>
            </li>
          </Link>
          <Link href="">
            <li className=" active ">
              <a href="">Order</a>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SwapCoinSidebar;
