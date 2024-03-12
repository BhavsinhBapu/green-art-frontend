import request from "lib/request";

export const getUserProfile = async (req: any) => {
  const { data } = await request.get("/profile", {
    headers: {
      userpublickey: `${req?.headers?.userpublickey}`,
      usersecretkey: `${req?.headers?.usersecretkey}`,
    },
  });
  return data;
};

export const getWalletLists = async (req: any, queryParams: any) => {
  const params = new URLSearchParams(queryParams);
  const { data } = await request.get("/wallet-list?" + params.toString(), {
    headers: {
      userpublickey: `${req?.headers?.userpublickey}`,
      usersecretkey: `${req?.headers?.usersecretkey}`,
    },
  });
  return data;
};

export const addSellLimitAdd = async (req: any, bodyData: any) => {
  const { data } = await request.post(
    "/sell-limit-app",
    {
      ...bodyData,
    },
    {
      headers: {
        userpublickey: `${req?.headers?.userpublickey}`,
        usersecretkey: `${req?.headers?.usersecretkey}`,
      },
    }
  );
  return data;
};
