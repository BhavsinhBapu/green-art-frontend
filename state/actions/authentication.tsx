import { SigninApi } from "service/authentication";
import { login } from "state/reducer/user";

export const SigninAction =
  (credentials: { email: string; password: string }) =>
  async (dispatch: any) => {
    try {
      const response = await SigninApi(credentials);
      dispatch(login(response.data));
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
