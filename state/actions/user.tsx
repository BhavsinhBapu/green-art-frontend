import {
  ForgotPasswordApi,
  SigninApi,
  SignupApi,
  GetUserInfoByToken,
  ResetPasswordApi,
  UpdateUserInfoByToken,
  SendPhoneVerificationSms,
  PhoneVerify,
  ChangePassword,
  UploadNid,
  UploadPassport,
  UploadDrivingLicence,
} from "service/user";
import {
  login,
  setAuthenticationState,
  setUser,
  setLoading,
} from "state/reducer/user";
import Router from "next/router";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { Dispatch, SetStateAction } from "react";
export const SigninAction =
  (credentials: { email: string; password: string }, setProcessing: any) =>
  async (dispatch: any) => {
    setProcessing(true);
    const redirectUrl: any = Router.query.redirect;
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
      if (redirectUrl) {
        Router.replace(redirectUrl);
      } else {
        Router.replace("/exchange/dashboard");
      }
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
    Router.push("/authentication/reset-password");
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

export const GetUserInfoByTokenAction = () => async (dispatch: any) => {
  dispatch(setLoading(true));
  const response = await GetUserInfoByToken();
  if (response.success === true) {
    dispatch(login(response.user));
  } else {
    dispatch(setAuthenticationState(false));
  }
  dispatch(setLoading(false));
};

export const LogoutAction = () => async (dispatch: any) => {
  Cookies.remove("token");
  dispatch(setAuthenticationState(false));
  Router.replace("/authentication/signin");
};

export const ResetPasswordAction = async (
  credentials: {
    email: string;
    password: string;
    password_confirmation: string;
    token: string;
  },
  setProcessing: any
) => {
  setProcessing(true);
  const response = await ResetPasswordApi(credentials);
  if (response.success === true) {
    toast.success(response.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "dark-toast",
    });
    Router.replace("/authentication/signin");
  } else {
    toast.error(response.message, {
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
export const UpdateUserInfoByTokenAction =
  (user: any) => async (dispatch: any) => {
    dispatch(setLoading(true));
    const response = await UpdateUserInfoByToken(user);
    if (response.success === true) {
      console.log(response, "response from action");
      toast.success(response.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(response.user, "response.user");
      dispatch(setUser(response.user));
    } else {
      toast.error(response.message, {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    dispatch(setLoading(false));
  };

export const SendPhoneVerificationSmsAction = async (
  setShowOtpSection: Dispatch<SetStateAction<boolean>>,
  setProcessing: Dispatch<SetStateAction<boolean>>
) => {
  setProcessing(true);
  const response = await SendPhoneVerificationSms();
  if (response.success === true) {
    toast.success(response.message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "dark-toast",
    });
    setShowOtpSection(true);
  } else {
    toast.error(response.message, {
      position: "top-right",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setShowOtpSection(false);
  }
  setProcessing(false);
};

export const VerifyPhoneAction = async (
  code: number,
  setProcessing: Dispatch<SetStateAction<boolean>>,
  setShowOtpSection: Dispatch<SetStateAction<boolean>>
) => {
  setProcessing(true);
  const response = await PhoneVerify(code);
  if (response.success === true) {
    toast.success(response.message, {
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
    toast.error(response.message, {
      position: "top-right",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  setProcessing(false);
  setShowOtpSection(false);
};

export const ChangePasswordAction =
  (credentials: {
    old_password: string;
    password: string;
    password_confirmation: string;
  }) =>
  async (dispatch: any) => {
    dispatch(setLoading(true));
    const response = await ChangePassword(credentials);
    if (response.success === true) {
      toast.success(response.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error(response.message, {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    dispatch(setLoading(false));
  };

export const UploadNidImageAction = async (
  image: any,
  setProcessing: Dispatch<SetStateAction<boolean>>
) => {
  setProcessing(true);
  const response = await UploadNid(image);
  if (response.success === true) {
    toast.success(response.message, {
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
    toast.error(response.message, {
      position: "top-right",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  setProcessing(false);
};

export const UploadPassportImageAction = async (
  image: any,
  setProcessing: Dispatch<SetStateAction<boolean>>
) => {
  setProcessing(true);
  const response = await UploadPassport(image);
  if (response.success === true) {
    toast.success(response.message, {
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
    toast.error(response.message, {
      position: "top-right",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  setProcessing(false);
};

export const UploadDrivingLicenceImageAction = async (
  image: any,
  setProcessing: Dispatch<SetStateAction<boolean>>
) => {
  setProcessing(true);
  const response = await UploadDrivingLicence(image);
  if (response.success === true) {
    toast.success(response.message, {
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
    toast.error(response.message, {
      position: "top-right",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  setProcessing(false);
};
