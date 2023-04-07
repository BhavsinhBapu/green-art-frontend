import Footer from "components/common/footer";
import SectionLoading from "components/common/SectionLoading";
import { P2pTopBar } from "components/P2P/P2pHome/TopBar";
import { OrderFilter } from "components/P2P/P2pOrder/OrderFilter";
import { OrderTable } from "components/P2P/P2pOrder/OrderTable";
import { useEffect, useState } from "react";
import { myP2pOrderAction } from "state/actions/p2p";

const P2pOrder = () => {
  const [processing, setProcessing] = useState<boolean>(false);
  const [history, setHistory] = useState<any>([]);
  const [stillHistory, setStillHistory] = useState<any>([]);
  const LinkTopaginationString = (page: any) => {
    const url = page.url.split("?")[1];
    const number = url.split("=")[1];
    myP2pOrderAction(
      5,
      parseInt(number),
      setHistory,
      setProcessing,
      setStillHistory
    );
  };
  useEffect(() => {
    myP2pOrderAction(5, 1, setHistory, setProcessing, setStillHistory);
  }, []);
  return (
    <>
      <div className="mb-5">
        <P2pTopBar />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="d-flex p2pTabList py-3 tableRow">
                <li>
                  <a className="p2pOrderTabListActive" href="">
                    All Orders
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {processing ? (
          <SectionLoading />
        ) : (
          <OrderTable
            stillHistory={stillHistory}
            history={history}
            LinkTopaginationString={LinkTopaginationString}
          />
        )}
      </div>
      <Footer />
    </>
  );
};
export default P2pOrder;
