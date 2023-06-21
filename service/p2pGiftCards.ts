import request from "lib/request";

export const getCreateAdsSettingsDataApi = async() => {
    const {data} = await request.get(`/p2p/get-gift-card-page-data`);
    return data;
}