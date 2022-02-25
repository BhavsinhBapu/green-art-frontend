import request from "lib/request";

export const SigninApi = async (credentials: {
  email: string;
  password: string;
}) => {
  const { data } = await request.post("/sign-in", credentials);
  return data;
};

export const SignupApi = async (credentials: {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  password_confirmation: string;
}) => {
  const { data } = await request.post("/sign-up", credentials);
  return data;
};
