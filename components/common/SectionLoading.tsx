import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useSelector } from "react-redux";
import { RootState } from "state/store";

const SectionLoading = () => {
  const { logo } = useSelector((state: RootState) => state.user);
  return (
    <>
      {/* <div className="loadingContainer container">
      <span className="loader"></span>
    </div> */}
      <div className="preloder-area">
        {logo ? (
          <span>
            <img
              src={logo || ""}
              width={150}
              className="img-fluid cp-user-logo-large"
              alt=""
            />
          </span>
        ) : (
          <span className="loader"></span>
        )}
      </div>
    </>
  );
};

export default SectionLoading;
