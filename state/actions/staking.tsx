import { GetOfferlist, GetOfferlistDetails } from "service/staking";

export const getOfferListAction = async (setOffers: any) => {
  const response = await GetOfferlist();
  setOffers(response.data);
  console.log(response, "This is a response");
};
export const GetOfferlistDetailsAction = async (
  uid: any,
  setDetails: any,
  setLoading: any
) => {
  setLoading(true);
  const response = await GetOfferlistDetails(uid);
  setDetails(response.data);
  console.log(response.data, "response.data");
  setLoading(false);
};
