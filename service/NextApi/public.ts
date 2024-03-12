import request from "lib/request";

const getPublicCustomHeader = (req: any) => {
  return {
    headers: {
      userpublickey: `${req?.headers?.userpublickey}`,
    },
  };
};

export const getMarketPrice = async (pair: string) => {
  const { data } = await request.get("/v1/markets/price/" + pair, {
    headers: {
      publicapisecret: `{z)E/f+2sW?G!f]>E,rh^K4N-=8^Uw5dM]B9g<(mJ:HU^5?6~PwyewwM!a"}gs#N`,
    },
  });
  return data;
};
export const getOrderBook = async (pair: string) => {
  const { data } = await request.get("/v1/markets/orderbook/" + pair, {
    headers: {
      publicapisecret: `{z)E/f+2sW?G!f]>E,rh^K4N-=8^Uw5dM]B9g<(mJ:HU^5?6~PwyewwM!a"}gs#N`,
    },
  });
  return data;
};
export const getTrade = async (pair: string) => {
  const { data } = await request.get("/v1/markets/trade/" + pair, {
    headers: {
      publicapisecret: `{z)E/f+2sW?G!f]>E,rh^K4N-=8^Uw5dM]B9g<(mJ:HU^5?6~PwyewwM!a"}gs#N`,
    },
  });
  return data;
};
export const getChart = async (pair: string) => {
  const { data } = await request.get("/v1/markets/chart/" + pair, {
    headers: {
      publicapisecret: `{z)E/f+2sW?G!f]>E,rh^K4N-=8^Uw5dM]B9g<(mJ:HU^5?6~PwyewwM!a"}gs#N`,
    },
  });
  return data;
};

export const getPublicSiteSettings = async (req: any) => {
  const { data } = await request.get(
    "/public-site-settings",
    getPublicCustomHeader(req)
  );
  return data;
};
