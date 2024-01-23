import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { MdDashboardCustomize, MdPassword } from "react-icons/md";
import { FaPeopleArrows } from "react-icons/fa";
import { SiFiat } from "react-icons/si";
import { MdSell } from "react-icons/md";
import {
  MdOutlineSwapHorizontalCircle,
  MdOutlineTransferWithinAStation,
} from "react-icons/md";
import { BiSupport, BiShapeCircle } from "react-icons/bi";
import { RiLuggageDepositLine } from "react-icons/ri";
import { TbCashBanknoteOff } from "react-icons/tb";
import { GiBuyCard } from "react-icons/gi";
import { useRouter } from "next/router";
import { RootState } from "state/store";
import { useSelector } from "react-redux";
import { BsFillStopCircleFill } from "react-icons/bs";
import {
  REFERRAL_TYPE_DEPOSIT,
  REFERRAL_TYPE_TRADE,
} from "helpers/core-constants";

const ReportTabMenu = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const { settings } = useSelector((state: RootState) => state.common);

  return (
    <div className="container-4xl">
      <ul className="report-overview-tab-menu">
        <Link href="/user/wallet-history?type=deposit">
          <li className={router.query.type == "deposit" ? "active" : ""}>
            <a href="coinSwapHistory">{t("Deposit History")}</a>
          </li>
        </Link>
        <Link href="/user/wallet-history?type=withdrawal">
          <li className={router.query.type == "withdrawal" ? "active" : ""}>
            <a href="coinSwapHistory">{t("Withdrawal History")}</a>
          </li>
        </Link>
        <Link href="/user/stop-limit-order-history">
          <li
            className={
              router.pathname == "/user/stop-limit-order-history"
                ? "active"
                : ""
            }
          >
            <a href="coinSwapHistory">{t("Stop Limit History")}</a>
          </li>
        </Link>
        <Link href="/user/swap-history">
          <li
            className={router.pathname == "/user/swap-history" ? "active" : ""}
          >
            <a href="coinSwapHistory">{t("Swap History")}</a>
          </li>
        </Link>
        <Link href="/user/buy-order-history">
          <li
            className={
              router.pathname == "/user/buy-order-history" ? "active" : ""
            }
          >
            <a href="getAllOrdersHistoryBuy">{t("Buy Order History")}</a>
          </li>
        </Link>
        <Link href="/user/sell-order-history">
          <li
            className={
              router.pathname == "/user/sell-order-history" ? "active" : ""
            }
          >
            <a href="getAllOrdersHistorySell">{t("Sell Order History")}</a>
          </li>
        </Link>
        <Link href="/user/transaction-history">
          <li
            className={
              router.pathname == "/user/transaction-history" ? "active" : ""
            }
          >
            <a href="getAllTransactionHistory">{t("Transaction History")}</a>
          </li>
        </Link>
        {parseInt(settings.currency_deposit_status) === 1 && (
          <Link href="/user/currency-deposit-history">
            <li
              className={
                router.pathname == "/user/currency-deposit-history"
                  ? "active"
                  : ""
              }
            >
              <a href="getAllTransactionHistory">
                {t("Fiat To Crypto deposit History")}
              </a>
            </li>
          </Link>
        )}
        {parseInt(settings.currency_deposit_status) === 1 && (
          <Link href="/user/currency-withdraw-history">
            <li
              className={
                router.pathname == "/user/currency-withdraw-history"
                  ? "active"
                  : ""
              }
            >
              <a href="getAllTransactionHistory">
                {t("Crypto To Fiat withdrawal History")}
              </a>
            </li>
          </Link>
        )}
        <Link
          href={"/user/referral-earning-withdrawal/" + REFERRAL_TYPE_DEPOSIT}
        >
          <li
            className={
              router.asPath ==
              `/user/referral-earning-withdrawal/${REFERRAL_TYPE_DEPOSIT}`
                ? "active"
                : ""
            }
          >
            <a href="getAllTransactionHistory">
              {t("Referral earning from withdrawal")}
            </a>
          </li>
        </Link>
        <Link href={"/user/referral-earning-trade/" + REFERRAL_TYPE_TRADE}>
          <li
            className={
              router.asPath ==
              "/user/referral-earning-trade/" + REFERRAL_TYPE_TRADE
                ? "active"
                : ""
            }
          >
            <a href="getAllTransactionHistory">
              {t("Referral earning from trade")}
            </a>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default ReportTabMenu;
