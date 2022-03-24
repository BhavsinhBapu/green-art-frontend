import request from "lib/request";

export const appDashboardData = async (pair: string) => {
  const { data } = await request.get(`/app-dashboard/${pair}`);
  return data;
};
