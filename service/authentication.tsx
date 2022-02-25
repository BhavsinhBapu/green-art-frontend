import request from "lib/request";

export const SigninApi = async (credentials: {
  email: string;
  password: string;
}) => {
  const response = await request.post("/signin", credentials);
  return response.data;
};

export const SignupApi = async (credentials: {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  password_confirmation: string;
}) => {
  const response = await request.post("/signup", credentials);
  return response.data;
};
