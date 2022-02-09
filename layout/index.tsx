import Navbar from "components/common/navbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const Index = ({ children }: any) => {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const path = router.pathname;
    if (
      path === "/authentication/signup" ||
      path === "/authentication/signin" ||
      path === "/exchange/dashboard"
    ) {
      setNavbarVisible(false);
    } else {
      setNavbarVisible(true);
    }
  }, [router.pathname]);
  return navbarVisible ? (
    <div>
      <Navbar />
      <div className="cp-user-main-wrapper">{children}</div>
    </div>
  ) : (
    <div>{children}</div>
  );
};

export default Index;
