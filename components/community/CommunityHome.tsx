import React from "react";
import { BsChevronRight } from "react-icons/bs";

const communityDes = `The Best 5 Altcoins To Buy Right Now If you are looking
to buy some coins, this guide is for you. Here are my
top 5 Altcoins picks right now. 1. $ARB Arbitrum
Arbitrum is showing a very bullish momentum for the last
couple of weeks. The coin is yet to make an ATH. After
BTC moves up ARB can easily move up. 2. $ARKM Arkham
solid Launchpad project with a very under valued market
cap. Usually, Launchpad tokens dumps after coming to
market & follows by making an ATH. 3. $SOL Solana A top
tier altcoin that most of the time outperforms other
altcoins.Solana can have a good run if BTC moves up from
here. 4. $MATIC Polygon another altcoin with huge
potential.Polygon 2.0 is launching with its new token
$POL which is fundamentally bullish. 5. $FET Fetch.Ai Ai
narrative with a very good potential. Remember,Ai hype
isn't over yet.`;

export default function CommunityHome() {
  return (
    <section className="bg-card-primary-clr pt-60 pb-60 community-home">
      <div className="container">
        <div className="community-home-header">
          <div className="community-home-title-section">
            <h3 className="community-home-title">Trending on TradexPro Feed</h3>
            <span className="community-home-btn">
              <span>View More</span>
              <span>
                <BsChevronRight size={12} />
              </span>
            </span>
          </div>

          <h4 className="community-home-subtitle">
            Discover the latest crypto news and feed from news media and
            influencers.
          </h4>
        </div>

        <div className="community-home-body row">
          <div className="col-lg-8">
            <div className="row">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div className="col-md-6" key={item}>
                  <div className="community-item">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="community-svg"
                      >
                        <path
                          d="M12.24 8L8 12.24l4.24 4.24 4.24-4.24L12.24 8zm-1.41 4.24l1.41-1.41 1.41 1.41-1.41 1.41-1.41-1.41z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <div className="d-flex gap-10 align-items-center">
                        <img
                          className="community-user-img"
                          src="/user.jpeg"
                          alt=""
                        />
                        <span>userdemo</span>
                      </div>
                      <div className="community-item-des">
                        <p>{communityDes.substring(0, 80)}...</p>
                      </div>
                      <p className="community-item-time">4 hours ago</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="community-home-card">
              <div className="text-center">
                <img
                  className="community-card-img"
                  src="/community-card.png"
                  alt=""
                />
              </div>
              <div className="community-card-title-section">
                <h3 className="community-card-title">
                  World's largest crypto community
                </h3>
                <button className="community-card-btn">Explore now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
