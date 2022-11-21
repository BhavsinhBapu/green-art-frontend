import launchpadRequest from "lib/launchpadRequest";

export const getLaunchpadList = async () => {
  const { data } = await launchpadRequest.get("/ico-active-list");
  return data;
};
export const getLaunchpadListDetails = async (id: number) => {
  const { data } = await launchpadRequest.get(`ico-details?id=${id}`);
  return data;
};
export const launchpadBuyIcoToken = async () => {
  const { data } = await launchpadRequest.get("/buy-ico-token");
  return data;
};
export const launchpadDynamicFromSubmit = async (payload: any) => {
  const { data } = await launchpadRequest.post("/dynamic-form-submit", payload);
  return data;
};

export const launchpadDynamicFrom = async () => {
  const { data } = await launchpadRequest.get("/dynamic-form");
  return data;
};
export const launchpadLandingPage = async () => {
  const { data } = await launchpadRequest.get("/launchpad-settings");
  return data;
};
export const DynamicSubmittedFormList = async (
  per_page: number,
  page: number,
  column_name: string,
  order_by: string
) => {
  const { data } = await launchpadRequest.get(
    `/submitted-dynamic-form-list?per_page=${per_page}&page=${page}&column_name=${column_name}&order_by=${order_by}`
  );
  return data;
};
export const launchpadCreateUpdateToken = async (payload: any) => {
  const { data } = await launchpadRequest.post(
    "/create-update-ico-token",
    payload
  );
  return data;
};
export const GetTokenList = async (
  per_page: number,
  page: number,
  column_name: string,
  order_by: string
) => {
  const { data } = await launchpadRequest.get(
    `/ico-list-user?per_page=${per_page}&page=${page}&column_name=${column_name}&order_by=${order_by}`
  );
  return data;
};