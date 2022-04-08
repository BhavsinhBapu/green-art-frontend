import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
const ReportSidebar = () => {
  const router = useRouter();
  return (
    <div className="page-left-sidebar">
      <div className="sidebar-top">
        <ul className="left-menu">
          <Link href="/user/wallet-history?type=deposit">
            <li className={router.pathname == "/user/wallet-history?type=deposit" ? "active" : ""}>
              <a href="walletHistory',['type' => 'deposit'])}}">
                Deposit History
              </a>
            </li>
          </Link>
          <Link href="/user/wallet-history?type=withdrawal">
            <li className={router.pathname == "/user/wallet-history?type=withdrawal" ? "active" : ""}>
              <a href="walletHistory',['type' => 'withdrawal'])}}">
                Withdrawal History
              </a>
            </li>
          </Link>
          <Link href="/user/swap-history">
            <li className={router.pathname == "/user/swap-history" ? "active" : ""}>
              <a href="coinSwapHistory">Swap History</a>
            </li>
          </Link>
          <Link href="/user/buy-order-history">
            <li className={router.pathname == "/user/buy-order-history" ? "active" : ""}>
              <a href="getAllOrdersHistoryBuy">Buy Order History</a>
            </li>
          </Link>
          <Link href="/user/sell-order-history">
            <li className={router.pathname == "/user/sell-order-history" ? "active" : ""}>
              <a href="getAllOrdersHistorySell">Sell Order History</a>
            </li>
          </Link>
          <Link href="/user/transaction-history">
            <li className={router.pathname == "/user/transaction-history" ? "active" : ""}>
              <a href="getAllTransactionHistory">Transaction History</a>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default ReportSidebar;
