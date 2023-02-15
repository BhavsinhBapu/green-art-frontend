import Footer from "components/common/footer";
import { P2pTopBar } from "components/P2P/P2pHome/TopBar";
import { OrderFilter } from "components/P2P/P2pOrder/OrderFilter";
import { OrderTable } from "components/P2P/P2pOrder/OrderTable";

const P2pOrder = () => {
  return (
    <>
      <div className="mb-5">
        <P2pTopBar />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="d-flex p2pTabList py-3 tableRow">
                <li>
                  <a href="">Processing</a>
                </li>
                <li>
                  <a className="p2pOrderTabListActive" href="">
                    All Orders
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <OrderFilter />
        <OrderTable />
      </div>
      <Footer />
    </>
  );
};
export default P2pOrder;
