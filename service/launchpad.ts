import request from "lib/request";

export const getLaunchpadList = async () => {
  const { data } = await request.get("/ico-active-list");
  return data;
};
export const launchpadBuyIcoToken = async () => {
  const { data } = await request.get("/buy-ico-token");
  return data;
};
export const launchpadDynamicFromSubmit = async () => {
  const { data } = await request.get("/dynamic-form-submit");
  return data;
};
export const launchpadDynamicFrom = async () => {
  const { data } = await request.get("/dynamic-form");
  return data;
};
