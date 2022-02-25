import {
  ForgotPasswordApi,
  SigninApi,
  SignupApi,
} from "service/authentication";
import { login, setAuthenticationState } from "state/reducer/user";
import Router from "next/router";
import { toast } from "react-toastify";

export const SigninAction =
  (credentials: { email: string; password: string }, setProcessing: any) =>
  async (dispatch: any) => {
    setProcessing(true);
    const response = await SigninApi(credentials);
    const responseMessage = response.message;
    console.log(response, "response from action");
    if (response === true) {
      dispatch(login(response));
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

export const ForgotPasswordAction = async (credentials: { email: string }) => {
  const response = await ForgotPasswordApi(credentials);
  console.log(response, "response from action");
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
    });
  } else {
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
};
