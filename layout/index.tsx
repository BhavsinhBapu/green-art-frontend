import Navbar from "components/common/navbar";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";

import { useEffect, useState } from "react";
import { GetUserInfoByTokenAction } from "state/actions/user";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { RootState } from "state/store";
import { initialDashboardCallAction } from "state/actions/exchange";
const Index = ({ children }: any) => {
  const [navbarVisible, setNavbarVisible] = useState(false);

  const { isLoading, user, isLoggedIn } = useSelector(
    (state: RootState) => state.user
  );
  const { dashboard, currentPair } = useSelector(
    (state: RootState) => state.exchange
  );
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    const path = router.pathname;
    if (
      path === "/authentication/signup" ||
      path === "/authentication/signin" ||
      path === "/exchange/dashboard" ||
      path === "/authentication/forgot-password" ||
      path === "/authentication/reset-password" ||
      path === "/authentication/g2f-verify"
    ) {
      setNavbarVisible(false);
    } else {
      setNavbarVisible(true);
    }
  }, [router.pathname]);
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      dispatch(GetUserInfoByTokenAction());
      dispatch(initialDashboardCallAction(currentPair));
    }
  }, [isLoggedIn]);
  return navbarVisible ? (
    <div>
      {isLoading && (
        <div className="preloder-area">
          <span
            className="spinner-border spinner-border-md"
            role="status"
            aria-hidden="true"
          ></span>
          <span>Please wait</span>
        </div>
      )}
      <Navbar />
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
