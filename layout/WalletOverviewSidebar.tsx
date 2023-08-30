import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { MdDashboardCustomize, MdPassword } from "react-icons/md";
import { FaPeopleArrows } from "react-icons/fa";

import { BiSupport, BiShapeCircle } from "react-icons/bi";

import { useRouter } from "next/router";
import { RootState } from "state/store";
import { useSelector } from "react-redux";
const WalletOverviewSidebar = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const { settings } = useSelector((state: RootState) => state.common);

  return (
    <div className="page-left-sidebar">
      <div className="sidebar-top">
        <ul className="left-menu">
          <Link href="/wallet-overview">
            <li className={router.pathname == "/wallet-overview" ? "active" : ""}>
              <MdDashboardCustomize />
              <a href="/wallet-overview">{t("Overview")}</a>
            </li>
          </Link>
          <Link href="/user/edit-profile">
            <li
              className={
                router.pathname == "/user/edit-profile" ? "active" : ""
              }
            >
              <BiShapeCircle />
              <a href="/user/edit-profile">{t("Spot")}</a>
            </li>
          </Link>
          <Link href="/user/phone-verification">
            <li
              className={
                router.pathname == "/user/phone-verification" ? "active" : ""
              }
            >
              <BiShapeCircle />
              <a href="/user/phone-verification">{t("Futures")}</a>
            </li>
          </Link>
          {parseInt(settings.knowledgebase_support_module) === 1 && (
            <Link href="/support">
              <li className={router.pathname == "/support" ? "active" : ""}>
                <FaPeopleArrows />
                <a href="/support">{t("P2P")}</a>
              </li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default WalletOverviewSidebar;
