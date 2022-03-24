import { appDashboardData } from "service/exchange";
import { setDashboard } from "state/reducer/exchange";

export const initialDashboardCallAction =
  (pair: string) => async (dispatch: any) => {
    const response = await appDashboardData(pair);
    dispatch(setDashboard(response));
  };
