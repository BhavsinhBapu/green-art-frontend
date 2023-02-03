import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { HiOutlineCash } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
import { AiOutlineBook } from "react-icons/ai";


const SupportSidebar = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  return (
    <div className="page-left-sidebar">
      <div className="sidebar-top">
        <ul className="left-menu">
          <Link href="/support">
            <li className={router.pathname == "/support" ? "active" : ""}>
              <BiSupport />
              <a href="/fiat-deposit">{t("Support Dashboard")}</a>
            </li>
          </Link>
          <Link href="/support/ticket-create">
            <li
              className={
                router.pathname == "/support/ticket-create" ? "active" : ""
              }
            >
              <BiSupport />
              <a href="/fiat-deposit">{t("Create Ticket")}</a>
            </li>
          </Link>
          <Link href="/knowledgebase">
            <li className={router.pathname == "/knowledgebase" ? "active" : ""}>
              <AiOutlineBook />
              <a href="/fiat-withdrawal">{t("Knowledgebase")}</a>
            </li>
          </Link>
          <Link href="/exchange/dashboard">
            <li
              className={
                router.pathname == "/exchange/dashboard" ? "active" : ""
              }
            >
              <HiOutlineCash />
              <a href="/fiat-withdrawal">{t("Exchange")}</a>
            </li>
          </Link>
          <Link href="/user/profile">
            <li className={router.pathname == "/user/profile" ? "active" : ""}>
              <HiOutlineCash />
              <a href="/fiat-withdrawal">{t("Profile")}</a>
            </li>
          </Link>
          {/* user/profile */}
        </ul>
      </div>
    </div>
  );
};

export default SupportSidebar;
