import { RiPagesLine } from "react-icons/ri";
import { HiUsers } from "react-icons/hi";
import Link from "next/link";

export const P2pTopBar = () => {
  return (
    <div className="p2p_top_bg py-3">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ul className="d-flex justify-content-center justify-content-md-end topBarList">
              <li>
                <Link href="/p2p/p2p-order">
                  <a>
                    <RiPagesLine />
                    Orders
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/p2p/p2p-profile">
                  <a>
                    <HiUsers />
                    P2P User Center
                  </a>
                </Link>
              </li>
              <li>
                <a
                  href=""
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  aria-expanded="false">
                  More
                </a>
                <div className="dropdown-menu mt-3 bg-dark">
                  <Link href="/p2p/add-post">
                    <a className="dropdown-item">Ad Create</a>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
