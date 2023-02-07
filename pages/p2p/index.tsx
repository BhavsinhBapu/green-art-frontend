import { P2pTopBar } from "components/P2P/TopBar";

const P2P = () => {
  return (
    <>
      <div>
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
      </div>
    </>
  );
};
export default P2P;
