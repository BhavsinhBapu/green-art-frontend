import request from "lib/request";

// referral-app
export const getReferral = () => {
  return request.get("/referral-app");
};
