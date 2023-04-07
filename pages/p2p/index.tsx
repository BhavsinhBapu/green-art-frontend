import Footer from "components/common/footer";
import { P2pAdvantage } from "components/P2P/P2pHome/P2pAdvantage";
import { P2pBlog } from "components/P2P/P2pHome/P2pBlog";
import { P2pDataTable } from "components/P2P/P2pHome/P2pDataTable";
import { P2pFaq } from "components/P2P/P2pHome/p2pFAQ";
import { P2pFilter } from "components/P2P/P2pHome/P2pFilter";
import { P2pPaymentMethod } from "components/P2P/P2pHome/P2pPaymentMethod";
import { P2pTab } from "components/P2P/P2pHome/P2pTab";
import { P2pWork } from "components/P2P/P2pHome/P2pWork";
import { P2pTopBar } from "components/P2P/P2pHome/TopBar";
import { BUY } from "helpers/core-constants";
import { useEffect, useState } from "react";
import { landingPageAction, landingSettingsAction } from "state/actions/p2p";

const P2P = () => {
  const [processing, setProcessing] = useState<boolean>(false);
  const [settings, setSettings] = useState<any>([]);
  const [history, setHistory] = useState<any>([]);
  const [stillHistory, setStillHistory] = useState<any>([]);
  const [filters, setFilters] = useState({
    type: BUY,
    amount: 0,
    coin: null,
    currency: "all",
    payment_method: "all",
    country: "all",
    per_page: 5,
    page: 1,
  });
  const LinkTopaginationString = (page: any) => {
    const url = page.url.split("?")[1];
    const number = url.split("=")[1];
    landingPageAction(
      filters.type,
      filters.amount,
      filters.coin,
      filters.currency,
      filters.payment_method,
      filters.country,
      filters.per_page,
      parseInt(number),
      setHistory,
      setProcessing,
      setStillHistory,
      setSettings
    );
  };
  useEffect(() => {
    landingSettingsAction(setProcessing, setSettings, setFilters, filters);
  }, []);
  useEffect(() => {
    filters.coin &&
      landingPageAction(
        filters.type,
        filters.amount,
        filters.coin,
        filters.currency,
        filters.payment_method,
        filters.country,
        filters.per_page,
        filters.page,
        setHistory,
        setProcessing,
        setStillHistory,
        setSettings
      );
  }, [filters]);

  return (
    <>
      <div className="mb-5">
        <div className="p2p_bg">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="text-white">
                  Binance - Peer-to-Peer Ecosystem With 300+Payment Methods
                </h2>
                <p className="text-white">
                  Binance is the largest centralized exchange globally. However,
                  Binance is also a major player <br /> in the P2P trading space
                </p>
              </div>
            </div>
          </div>
        </div>
        <P2pTopBar />
        <P2pTab setFilters={setFilters} filters={filters} settings={settings} />
        <P2pFilter
          setFilters={setFilters}
          filters={filters}
          settings={settings}
        />
        <P2pDataTable history={history} filters={filters} />
        {history?.length > 0 && (
          <div className="pagination-wrapper" id="assetBalances_paginate">
            <span>
              {stillHistory?.links?.map((link: any, index: number) =>
                link.label === "&laquo; Previous" ? (
                  <a
                    className="paginate-button"
                    onClick={() => {
                      if (link.url) LinkTopaginationString(link);
                    }}
                    key={index}
                  >
                    <i className="fa fa-angle-left"></i>
                  </a>
                ) : link.label === "Next &raquo;" ? (
                  <a
                    className="paginate-button"
                    onClick={() => LinkTopaginationString(link)}
                    key={index}
                  >
                    <i className="fa fa-angle-right"></i>
                  </a>
                ) : (
                  <a
                    className={`paginate_button paginate-number ${
                      link.active === true && "text-warning"
                    }`}
                    aria-controls="assetBalances"
                    data-dt-idx="1"
                    onClick={() => LinkTopaginationString(link)}
                    key={index}
                  >
                    {link.label}
                  </a>
                )
              )}
            </span>
          </div>
        )}
        <P2pWork />
        <P2pAdvantage />
        <P2pBlog />
        <P2pFaq />
        <P2pPaymentMethod />
      </div>
      <Footer />
    </>
  );
};
export default P2P;
