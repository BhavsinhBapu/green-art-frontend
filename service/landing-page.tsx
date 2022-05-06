import request from "lib/request";

// /landing
export const landingPage = () => {
  return request.get("/landing");
};
