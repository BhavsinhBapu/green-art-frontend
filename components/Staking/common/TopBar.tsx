import { RiPagesLine } from "react-icons/ri";
import { HiOutlineHome, HiUsers } from "react-icons/hi";
import Link from "next/link";
export const StakingTopBar = () => {
  return (
    <div className="p2p_top_bg py-3">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className="d-flex justify-content-center justify-content-md-end topBarList">
              <li>
                <Link href="/staking">
                  <a>
                    <HiOutlineHome />
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/staking/earnings">
                  <a>
                    <RiPagesLine />
                    Earnings
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/staking/my-investments">
                  <a>
                    <HiUsers />
                    Invested
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/staking/payment-list">
                  <a>
                    <HiUsers />
                    My Payments
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
