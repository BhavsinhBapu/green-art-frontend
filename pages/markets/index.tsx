import TradeSections from "components/FutureTrades/home/trade-sections/TradeSections";
import TradesTable from "components/markets/TradesTable";

import useTranslation from "next-translate/useTranslation";
import React from "react";

export default function index() {
  const { t } = useTranslation();
  return (
    <section>
      <div className="container">
        <h1 className="banner-title py-4">{t("Markets Overview")}</h1>

        <div className="row my-2">
          <div className="col-md-3">
            <div className="p-3 card-for-markets">
              <div className="row">
                <div className="col-12 mb-3">
                  <p className="text-12">Highlight Coin</p>
                </div>
                <div className="col-md-12 mb-2 ">
                  <div className="card-for-markets-item">
                    <div className="row">
                      <div className="col-4 d-flex align-items-center">
                        <img
                          className="icon mr-2"
                          src={"/bitcoin.png"}
                          alt="coin"
                          width="25px"
                          height="25px"
                        />
                        <p>BTC</p>
                      </div>

                      <div className="col-4">
                        <p>$241.90</p>
                      </div>
                      <div className="col-4">
                        <p>+3.07%</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-2 ">
                  <div className="card-for-markets-item">
                    <div className="row">
                      <div className="col-4 d-flex align-items-center">
                        <img
                          className="icon mr-2"
                          src={"/bitcoin.png"}
                          alt="coin"
                          width="25px"
                          height="25px"
                        />
                        <p>BTC</p>
                      </div>

                      <div className="col-4">
                        <p>$241.90</p>
                      </div>
                      <div className="col-4">
                        <p>+3.07%</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-2 ">
                  <div className="card-for-markets-item">
                    <div className="row">
                      <div className="col-4 d-flex align-items-center">
                        <img
                          className="icon mr-2"
                          src={"/bitcoin.png"}
                          alt="coin"
                          width="25px"
                          height="25px"
                        />
                        <p>BTC</p>
                      </div>

                      <div className="col-4">
                        <p>$241.90</p>
                      </div>
                      <div className="col-4">
                        <p>+3.07%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 card-for-markets">
              <div className="row">
                <div className="col-12 mb-3">
                  <p className="text-12">New Listing</p>
                </div>
                <div className="col-md-12 mb-2 ">
                  <div className="card-for-markets-item">
                    <div className="row">
                      <div className="col-4 d-flex align-items-center">
                        <img
                          className="icon mr-2"
                          src={"/bitcoin.png"}
                          alt="coin"
                          width="25px"
                          height="25px"
                        />
                        <p>BTC</p>
                      </div>

                      <div className="col-4">
                        <p>$241.90</p>
                      </div>
                      <div className="col-4">
                        <p>+3.07%</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-2 ">
                  <div className="card-for-markets-item">
                    <div className="row">
                      <div className="col-4 d-flex align-items-center">
                        <img
                          className="icon mr-2"
                          src={"/bitcoin.png"}
                          alt="coin"
                          width="25px"
                          height="25px"
                        />
                        <p>BTC</p>
                      </div>

                      <div className="col-4">
                        <p>$241.90</p>
                      </div>
                      <div className="col-4">
                        <p>+3.07%</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-2 ">
                  <div className="card-for-markets-item">
                    <div className="row">
                      <div className="col-4 d-flex align-items-center">
                        <img
                          className="icon mr-2"
                          src={"/bitcoin.png"}
                          alt="coin"
                          width="25px"
                          height="25px"
                        />
                        <p>BTC</p>
                      </div>

                      <div className="col-4">
                        <p>$241.90</p>
                      </div>
                      <div className="col-4">
                        <p>+3.07%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 card-for-markets">
              <div className="row">
                <div className="col-12 mb-3">
                  <p className="text-12">Top Gainer Coin</p>
                </div>
                <div className="col-md-12 mb-2 ">
                  <div className="card-for-markets-item">
                    <div className="row">
                      <div className="col-4 d-flex align-items-center">
                        <img
                          className="icon mr-2"
                          src={"/bitcoin.png"}
                          alt="coin"
                          width="25px"
                          height="25px"
                        />
                        <p>BTC</p>
                      </div>

                      <div className="col-4">
                        <p>$241.90</p>
                      </div>
                      <div className="col-4">
                        <p>+3.07%</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-2 ">
                  <div className="card-for-markets-item">
                    <div className="row">
                      <div className="col-4 d-flex align-items-center">
                        <img
                          className="icon mr-2"
                          src={"/bitcoin.png"}
                          alt="coin"
                          width="25px"
                          height="25px"
                        />
                        <p>BTC</p>
                      </div>

                      <div className="col-4">
                        <p>$241.90</p>
                      </div>
                      <div className="col-4">
                        <p>+3.07%</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-2 ">
                  <div className="card-for-markets-item">
                    <div className="row">
                      <div className="col-4 d-flex align-items-center">
                        <img
                          className="icon mr-2"
                          src={"/bitcoin.png"}
                          alt="coin"
                          width="25px"
                          height="25px"
                        />
                        <p>BTC</p>
                      </div>

                      <div className="col-4">
                        <p>$241.90</p>
                      </div>
                      <div className="col-4">
                        <p>+3.07%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-3 card-for-markets">
              <div className="row">
                <div className="col-12 mb-3">
                  <p className="text-12">Top Volume Coin</p>
                </div>
                <div className="col-md-12 mb-2 ">
                  <div className="card-for-markets-item">
                    <div className="row">
                      <div className="col-4 d-flex align-items-center">
                        <img
                          className="icon mr-2"
                          src={"/bitcoin.png"}
                          alt="coin"
                          width="25px"
                          height="25px"
                        />
                        <p>BTC</p>
                      </div>

                      <div className="col-4">
                        <p>$241.90</p>
                      </div>
                      <div className="col-4">
                        <p>+3.07%</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-2 ">
                  <div className="card-for-markets-item">
                    <div className="row">
                      <div className="col-4 d-flex align-items-center">
                        <img
                          className="icon mr-2"
                          src={"/bitcoin.png"}
                          alt="coin"
                          width="25px"
                          height="25px"
                        />
                        <p>BTC</p>
                      </div>

                      <div className="col-4">
                        <p>$241.90</p>
                      </div>
                      <div className="col-4">
                        <p>+3.07%</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-2 ">
                  <div className="card-for-markets-item">
                    <div className="row">
                      <div className="col-4 d-flex align-items-center">
                        <img
                          className="icon mr-2"
                          src={"/bitcoin.png"}
                          alt="coin"
                          width="25px"
                          height="25px"
                        />
                        <p>BTC</p>
                      </div>

                      <div className="col-4">
                        <p>$241.90</p>
                      </div>
                      <div className="col-4">
                        <p>+3.07%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-card-primary-clr">
        {/* trade section start*/}
        <TradesTable />
        {/* trade section end */}
      </div>
    </section>
  );
}
