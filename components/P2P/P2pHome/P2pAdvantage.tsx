import {
  FcSettings,
  FcApproval,
  FcPortraitMode,
  FcNeutralTrading,
} from "react-icons/fc";

export const P2pAdvantage = () => {
  const advantageList = [
    {
      icon: <FcSettings />,
      title: "Low Transaction Fees",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis etveniam est earum consequuntur? Ut nulla sequi repudiandae. Molestiae nobis.",
    },
    {
      icon: <FcPortraitMode />,
      title: "Flexible Payment Methods",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis etveniam est earum consequuntur? Ut nulla sequi repudiandae. Molestiae nobis.",
    },
    {
      icon: <FcNeutralTrading />,
      title: "Trade at Your Preferred Prices",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis etveniam est earum consequuntur? Ut nulla sequi repudiandae. Molestiae nobis.",
    },
    {
      icon: <FcApproval />,
      title: "Protecting Your Privacy",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis etveniam est earum consequuntur? Ut nulla sequi repudiandae. Molestiae nobis.",
    },
  ];
  return (
    <div className="container mt-5 pt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h3 className="pb-2">Advantage of P2P Exchange</h3>
          {advantageList.map((item, index) => (
            <div className="advantageList d-flex align-items-center pt-5">
              {item.icon}
              <div className="pl-3">
                <h5 className="pb-1">{item.title}</h5>
                <p>{item.discription}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-6">
          <div className="text-center pt-3 pt-md-0 p2pExchangeImg">
            <img src="/p2pExchange.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
