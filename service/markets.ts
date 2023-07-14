import request from "lib/request";

export const getMarketCardDatasApi = async () => {
  const { data } = await request.get(
    `/market-overview-coin-statistic-list?currency_type=`
  );
  return data;
};

export const getMarketsTradeSectionDataApi = async (
  selectType: any,
  search: any,
  page: any
) => {
  const { data } = await request.get(
    `market-overview-top-coin-list?limit=10&type=${selectType}&search=${search}&page=${page}`
  );
  return data;
};
