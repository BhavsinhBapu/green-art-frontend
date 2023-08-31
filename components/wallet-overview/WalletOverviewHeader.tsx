import Link from "next/link";
import React from "react";

export default function WalletOverviewHeader({ title }: any) {
  return (
    <div className="wallet-overview-header inner-section-margin-top">
      <div className="profle-are-top">
        <h2>{title}</h2>
      </div>
      <div className="wallet-overview-btn-all">
        <Link href={`/user/wallet-history?type=deposit`}>
          <a className="wallet-overview-btn">Deposit History</a>
        </Link>
        <Link href={`/user/wallet-history?type=withdrawal`}>
          <a className="wallet-overview-btn">Withdrawal History</a>
        </Link>
        <Link href={`/user/transaction-history`}>
          <a className="wallet-overview-btn">Transaction History</a>
        </Link>
      </div>
    </div>
  );
}
