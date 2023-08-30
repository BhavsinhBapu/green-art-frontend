import useTranslation from "next-translate/useTranslation";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "state/store";

const Loading = () => {
  const { t } = useTranslation("common");
  const { logo } = useSelector((state: RootState) => state.user);
  return (
    <>
      {/* <div className="preloder-area">
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
      {/* <div>
        <img src={logo || ""} width={150} className="img-fluid cp-user-logo-large" alt="" />
      </div> */}
    </>
  );
};

export default Loading;
