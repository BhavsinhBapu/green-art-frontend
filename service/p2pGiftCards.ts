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

export const getMyGiftCardAdsListsApi = async (limit:any , page: any) => {
    const { data } = await request.get(
        `/p2p/user-gift-card-ads-list?limit=${limit}&page=${page}`
      );
      return data;
}

export const handleAdsDeleteApi = async(ads_id: any) => {
    const {data} = await request.post(`/p2p/gift-card-delete`,{
        gift_card_id: ads_id
    });
    return data;
}

export const storeAdsHandlerApi= async(formData: any) => {
    const { data } = await request.post(`/p2p/store-gift-card-adds`, formData);
    return data;
}

export const getGiftCardAddsDetailsApi = async(ads_uid: any) => {
    const {data} = await request.get(`/p2p/gift-card-details?uid=${ads_uid}`);
    return data;
}

export const updateAdsHandlerApi= async(formData: any) => {
    const { data } = await request.post(`/p2p/update-gift-card-adds`, formData);
    return data;
}

export const getAllGiftCardAdsApi= async() => {
    const {data} = await request.get(`/p2p/all-gift-card-ads-list`);
    return data;
}