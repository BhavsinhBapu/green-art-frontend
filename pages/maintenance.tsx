import {
  pageAvailabilityCheck,
  SSRAuthCheck,
} from "middlewares/ssr-authentication-check";
import { parseCookies } from "nookies";
import React from "react";
import { GetUserInfoByTokenServer } from "service/user";
import { GetServerSideProps } from "next";

const Maintenance = () => {
  return (
    <div
      className="maintenance-mode"
      style={{ background: "url('/maintenance.jpg')" }}
    >
      <div className="maintenance-content">
        <div>
          <h2>
            Tradexpro Exchange is temporarily unavailable due to maintenance
          </h2>
          <p>
            We are working hard to make it the best friendly exchange website.
            Please check back later. We apologize for any inconvenience
          </p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  // await SSRAuthCheck(ctx, "/profile");
  return {
    props: {},
  };
};
export default Maintenance;
