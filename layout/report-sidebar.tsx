import Link from "next/link";
import React from "react";

const ReportSidebar = () => {
  return (
    <div className="page-left-sidebar">
      <div className="sidebar-top">
        <ul className="left-menu">
          <Link href="/user/wallet-history?type=deposit">
            <li className="@if(isset($sub_menu) && $sub_menu == 'deposit') active @endif">
              <a href="walletHistory',['type' => 'deposit'])}}">
                Deposit History
              </a>
            </li>
          </Link>
          <Link href="/user/wallet-history?type=withdrawal">
            <li className="@if(isset($sub_menu) && $sub_menu == 'withdrawal') active @endif">
              <a href="walletHistory',['type' => 'withdrawal'])}}">
                Withdrawal History
              </a>
            </li>
          </Link>
          <Link href="/user/swap-history">
            <li className="@if(isset($sub_menu) && $sub_menu == 'swap_history') active @endif">
              <a href="coinSwapHistory">Swap History</a>
            </li>
          </Link>
          <Link href="/user/buy-order-history">
            <li className="@if(isset($sub_menu) && $sub_menu == 'buy_order') active @endif">
              <a href="getAllOrdersHistoryBuy">Buy Order History</a>
            </li>
          </Link>
          <Link href="/user/sell-order-history">
            <li className="@if(isset($sub_menu) && $sub_menu == 'sell_order') active @endif">
              <a href="getAllOrdersHistorySell">Sell Order History</a>
            </li>
          </Link>
          <Link href="/user/transaction-history">
            <li className="@if(isset($sub_menu) && $sub_menu == 'transaction') active @endif">
              <a href="getAllTransactionHistory">Transaction History</a>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default ReportSidebar;
