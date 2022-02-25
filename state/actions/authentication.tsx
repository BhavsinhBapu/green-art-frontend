import { SigninApi, SignupApi } from "service/authentication";
import { login, setAuthenticationState } from "state/reducer/user";
import Router from "next/router";
import { toast } from "react-toastify";

export const SigninAction =
  (credentials: { email: string; password: string }) =>
  async (dispatch: any) => {
    const response = await SigninApi(credentials);
    console.log(response, "response from action");
    if (response === true) {
      console.log("SigninApi success");
      dispatch(login(response));
    } else {
      console.log("SigninApi fail");
      dispatch(setAuthenticationState(false));
    }
  };

export const SignupAction =
  (credentials: {
    email: string;
    first_name: string;
    last_name: string;
    password: string;
    password_confirmation: string;
  }) =>
  async (dispatch: any) => {
    // const router = useRouter();
    console.log("Clicking on me");
    const response = await SignupApi(credentials);
    let responseMessage = response.message;
    console.log(response, "response from action");
    if (response.success === true) {
      console.log("SignupApi success");
      toast.success(responseMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      Router.push("/authentication/signin");
    } else if (response.success === false) {
      dispatch(setAuthenticationState(false));
      console.log(responseMessage, "SignupApi fail");
      toast.error(responseMessage, {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    return response;
  };
