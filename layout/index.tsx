import Navbar from "components/common/navbar";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";

import { useEffect, useState } from "react";
import { GetUserInfoByTokenAction } from "state/actions/authentication";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
const Index = ({ children }: any) => {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    const path = router.pathname;
    if (
      path === "/authentication/signup" ||
      path === "/authentication/signin" ||
      path === "/exchange/dashboard" ||
      path === "/authentication/forgot-password" ||
      path === "/authentication/reset-password"
    ) {
      setNavbarVisible(false);
    } else {
      setNavbarVisible(true);
    }
  }, [router.pathname]);
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) dispatch(GetUserInfoByTokenAction());
  }, []);
  return navbarVisible ? (
    <div>
      <Navbar />
      <div className="cp-user-main-wrapper">{children}</div>
    </div>
  ) : (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div>{children}</div>
    </>
  );
};

export default Index;
