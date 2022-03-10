import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TableLoading = () => {
  return (
    <div className="skenliton-effect">
      <Skeleton width="100%" height={40} />
      <br />
      <Skeleton width="100%" height={20} count={10} />
    </div>
  );
};

export default TableLoading;
