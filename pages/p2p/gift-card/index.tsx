import { NoItemFound } from "components/NoItemFound/NoItemFound";
import { CUstomSelect } from "components/common/CUstomSelect";
import Link from "next/link";
import React from "react";
import { AiOutlineGift } from "react-icons/ai";
import { HiOutlineHome } from "react-icons/hi";
import { RiPagesLine } from "react-icons/ri";

const ooptions = [
  { value: 1, label: "Option 1" },
  { value: 2, label: "Option 2" },
  { value: 3, label: "Option 3" },
];

export default function Index() {
  const demoFunc = (event: any) => {
    console.log("Demo Func");
  };
  return (
    <section>
      <div className="p2p_bg">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="text-white">
                Tradexpro Peer-to-Peer Ecosystem With unlimited countries and
                payment system
              </h2>

              <p className="text-white">
                Tradexpro is the largest centralized exchange globally. However,
                it is also a major player in the P2P trading space
              </p>
            </div>
            {/* <div className="col-md-12">{isLoggedIn && <P2pTopBar />}</div> */}
          </div>
        </div>
      </div>
      {/* second nav */}
      <div className="py-3 border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="d-flex justify-content-between topBarList">
                <div className="d-flex " style={{ gap: "28px" }}>
                  <li>
                    <Link href="/p2p">
                      <a>
                        <HiOutlineHome />
                        Home
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/p2p/my-order">
                      <a>
                        <RiPagesLine />
                        Orders
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/p2p/gift-card/lists">
                      <a>
                        <AiOutlineGift />
                        Gift Card Lists
                      </a>
                    </Link>
                  </li>
                </div>
                {/* <li style={{position:'relative'}}>
                <a
                  href=""
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <div className="dropdown-menu secendary-dropdown-bg">
                  <Link href="/p2p/add-post">
                    <a className="dropdown-item menu-hover">Ad Create</a>
                  </Link>
                  <Link href="/p2p/my-buy-ads">
                    <a className="dropdown-item menu-hover">My Buy Ads</a>
                  </Link>
                  <Link href="/p2p/my-sell-ads">
                    <a className="dropdown-item menu-hover">My Sell Ads</a>
                  </Link>
                </div>
              </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* filter part */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3">
            <label>Amount</label>
            <div className="P2psearchBox position-relative">
              <input type="text" placeholder="Enter amount EUR" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group p2pSelectFilter">
              <label> Fiat</label>
              <CUstomSelect options={ooptions} handleFunction={demoFunc} />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group p2pSelectFilter">
              <label> Payment</label>
              <CUstomSelect options={ooptions} handleFunction={demoFunc} />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group p2pSelectFilter">
              <label>Available Region(s)</label>
              <CUstomSelect options={ooptions} handleFunction={demoFunc} />
            </div>
          </div>
        </div>
      </div>
      {/* item part */}
      <div className="container">
        <div className="my-5">
          <NoItemFound />
        </div>
      </div>
    </section>
  );
}
