import request from "lib/request";

export const getP2PGiftCardListsApi = async(limit:any , page: any) => {
    const { data } = await request.get(
        `/p2p/get-gift-card-p2p?limit=${limit}&page=${page}`
      );
      return data;
}

export const getCreateAdsSettingsDataApi = async() => {
    const {data} = await request.get(`/p2p/get-gift-card-page-data`);
    return data;
}