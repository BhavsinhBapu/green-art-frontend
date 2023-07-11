import TradeSections from "components/FutureTrades/home/trade-sections/TradeSections";
import { CUstomSelect } from "components/common/CUstomSelect";
import TradesTable from "components/markets/TradesTable";

import useTranslation from "next-translate/useTranslation";
import React from "react";
const options = [
  { value: "usd", label: "USD" },
  { value: "btc", label: "BTC" },
];
export default function index() {
  const { t } = useTranslation();

  const handleCoinType = (data: any) => {
    console.log("data", data);
  };

  return (
    <section>
      <div className="container">
        <div className=" pt-4 pb-2">
          <h1 className="banner-title">{t("Markets Overview")}</h1>
          <div className="d-flex gap-5 align-items-center">
            <p className="text-14">All price information is in</p>
            <CUstomSelect options={options} handleFunction={handleCoinType} classname={'market-select-page'} defaultValue={options[0]}/>
          </div>
        </div>

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
