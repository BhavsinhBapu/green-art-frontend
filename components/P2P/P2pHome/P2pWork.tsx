import { useState } from "react";
import { P2pWorkCard } from "./P2pWorkCard";
import { TbPageBreak } from "react-icons/tb";

export const P2pWork = () => {
  const p2pWorkCardList = [
    {
      icon: <TbPageBreak />,
      title: "Place an Order",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis etveniam est earum consequuntur? Ut nulla sequi repudiandae. Molestiae nobis",
    },
    {
      icon: <TbPageBreak />,
      title: "Place an Order",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis etveniam est earum consequuntur? Ut nulla sequi repudiandae. Molestiae nobis",
    },
    {
      icon: <TbPageBreak />,
      title: "Place an Order",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis etveniam est earum consequuntur? Ut nulla sequi repudiandae. Molestiae nobis",
    },
  ];

  const [buySellCrypto, setBuySellCrypto] = useState(true);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 px-3 px-md-0">
          <div className="p2pWork p-4 p-md-5">
            <div className="d-block d-sm-flex justify-content-between text-center text-sm-start">
              <h3>How P2P works</h3>
              <div className="p2pWorkBtn pt-4 pt-sm-0">
                <button
                  onClick={() => setBuySellCrypto(true)}
                  className={`${buySellCrypto && "buySellBoxActive"}`}>
                  Buy Crypto
                </button>
                <button
                  className={`${!buySellCrypto && "buySellBoxActive"}`}
                  onClick={() => setBuySellCrypto(false)}>
                  Sell Crypto
                </button>
              </div>
            </div>
            <div className="row mt-4">
              {buySellCrypto === true ? (
                <>
                  {p2pWorkCardList.map((item, index) => (
                    <P2pWorkCard key={index} item={item} />
                  ))}
                </>
              ) : (
                <>
                  {p2pWorkCardList.map((item, index) => (
                    <P2pWorkCard key={index} item={item} />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
