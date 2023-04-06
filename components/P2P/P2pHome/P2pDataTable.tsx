import { BuyFrom } from "./BuyFrom";
import { useState } from "react";
import Link from "next/link";

export const P2pDataTable = ({ history }: any) => {
  const [buyFrom, setBuyFrom] = useState(false);
  return (
    <div className="container mt-4">
      <div className="row">
        {buyFrom && <BuyFrom setBuyFrom={setBuyFrom} />}
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Advertisers (Completion reate)</th>
                <th scope="col">Price</th>
                <th scope="col">Limit/Available</th>
                <th scope="col">Payment</th>
                <th scope="col">Trade</th>
              </tr>
            </thead>
            <tbody>
              {history?.map((item: any) => (
                <tr className="tableRow">
                  <td>
                    <Link href={"/p2p/user-profile"}>
                      <div className="tableImg d-flex align-items-center">
                        <img
                          src="https://api-tradex.nftarttoken.xyz/images/avatars/yellow-hat.png"
                          alt=""
                        />
                        <h5>
                          {item?.user?.first_name} {item?.user?.last_name}
                        </h5>
                      </div>
                    </Link>
                  </td>
                  <td className="d-flex">
                    <h5 className="mr-1">{item?.price}</h5> {item?.currency}
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <small className="mr-2">Available</small>
                      <h6 className="limitBalance">
                        {item?.available} {item?.coin_type}
                      </h6>
                    </div>
                    <div className="d-flex align-items-center">
                      <small className="mr-2">Limit</small>
                      <h6 className="limitBalance">
                        {item?.maximum_trade_size}- {item?.minimum_trade_size}
                      </h6>
                    </div>
                  </td>
                  <td>
                    {/* {JSON.stringify(item?.payment_method_list)} */}
                    {item?.payment_method_list?.map((payment: any) => (
                      <span className="badge badge-light mr-2">
                        {payment?.admin_pamynt_method?.name}
                      </span>
                    ))}
                  </td>
                  <td>
                    <button
                      onClick={() => setBuyFrom(true)}
                      className="tableButton"
                    >
                      Buy {item.coin_type}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
