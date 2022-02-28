import {
  ForgotPasswordApi,
  SigninApi,
  SignupApi,
} from "service/authentication";
import { login, setAuthenticationState } from "state/reducer/user";
import Router from "next/router";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
export const SigninAction =
  (credentials: { email: string; password: string }, setProcessing: any) =>
  async (dispatch: any) => {
    setProcessing(true);
    const response = await SigninApi(credentials);
    const responseMessage = response.message;
    console.log(response, "response from action");
    if (response.success === true) {
      Cookies.set("token", response.access_token);
      console.log(response.user, "response.user");
      dispatch(login(response.user));
      toast.success(responseMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "dark-toast",
      });
      Router.replace("/exchange/dashboard");
    } else {
      dispatch(setAuthenticationState(false));
      toast.error(responseMessage, {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "dark-toast",
      });
    }
    setProcessing(false);
    return response;
  };

export const SignupAction =
  (
    credentials: {
      email: string;
      first_name: string;
      last_name: string;
      password: string;
      password_confirmation: string;
    },
    setProcessing: any
  ) =>
  async (dispatch: any) => {
    // const router = useRouter();
    setProcessing(true);
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
        className: "dark-toast",
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
        className: "dark-toast",
      });
    }
    setProcessing(false);
    return response;
  };

const Pause = (miliSeconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, miliSeconds));
};

export const ForgotPasswordAction = async (
  credentials: { email: string },
  setProcessing: any
) => {
  setProcessing(true);
  const response = await ForgotPasswordApi(credentials);

  let responseMessage = response.message;
  if (response.success === true) {
    toast.success(responseMessage, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "dark-toast",
    });
    // await Pause(5000);
    Router.push("/authentication/signin");
  } else {
    toast.error(responseMessage, {
      position: "top-right",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "dark-toast",
    });
  }
  setProcessing(false);
};
