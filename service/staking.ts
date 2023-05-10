import request from "lib/request";

export const GetOfferlist = async () => {
  const { data } = await request.get("/staking/offer-list");
  return data;
};
export const GetOfferlistDetails = async (uid: any) => {
  const { data } = await request.get(`/staking/offer-list-details?uid=${uid}`);
  return data;
};
