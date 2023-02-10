import { P2pAdvantage } from "components/P2P/P2pHome/P2pAdvantage";
import { P2pBlog } from "components/P2P/P2pHome/P2pBlog";
import { P2pDataTable } from "components/P2P/P2pHome/P2pDataTable";
import { P2pFaq } from "components/P2P/P2pHome/p2pFAQ";
import { P2pFilter } from "components/P2P/P2pHome/P2pFilter";
import { P2pPaymentMethod } from "components/P2P/P2pHome/P2pPaymentMethod";
import { P2pTab } from "components/P2P/P2pHome/P2pTab";
import { P2pWork } from "components/P2P/P2pHome/P2pWork";
import { P2pTopBar } from "components/P2P/P2pHome/TopBar";

const P2P = () => {
  return (
    <>
      <div className="mb-5">
        <div className="p2p_bg">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center text-white">
                <h2 className="text-white">
                  Binance - Peer-to-Peer Ecosystem With 300+Payment Methods
                </h2>
                <p>
                  Binance is the largest centralized exchange globally. However,
                  Binance is also a major player <br /> in the P2P trading space
                </p>
              </div>
            </div>
          </div>
        </div>
        <P2pTopBar />
        <P2pTab />
        <P2pFilter />
        <P2pDataTable />
        <P2pWork />
        <P2pAdvantage />
        <P2pBlog />
        <P2pFaq />
        <P2pPaymentMethod />
      </div>
    </>
  );
};
export default P2P;
