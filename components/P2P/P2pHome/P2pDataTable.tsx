import { BuyFrom } from "./BuyFrom";
import { useState } from "react";
import Link from "next/link";

export const P2pDataTable = () => {
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
              <tr className="tableRow">
                <td>
                  <Link href={"/p2p/user-profile"}>
                    <div className="tableImg d-flex align-items-center">
                      <img
                        src="https://api-tradex.nftarttoken.xyz/images/avatars/yellow-hat.png"
                        alt=""
                      />
                      {/* <h4 className="tableImg">
                      <b>F</b>
                    </h4> */}
                      <h5>Chirik34</h5>
                    </div>
                  </Link>
                  <small className="ml-4">211 orders 99.66% completion</small>
                </td>
                <td className="d-flex">
                  <h5 className="mr-1">0.099</h5> EUR
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <small className="mr-2">Available</small>
                    <h6 className="limitBalance">1.34.00 USDT</h6>
                  </div>
                  <div className="d-flex align-items-center">
                    <small className="mr-2">Limit</small>
                    <h6 className="limitBalance">$34.00 - $88.98 </h6>
                  </div>
                </td>
                <td>
                  <span className="badge badge-light">ZEN</span>
                </td>
                <td>
                  <button
                    onClick={() => setBuyFrom(true)}
                    className="tableButton">
                    Buy USDT
                  </button>
                </td>
              </tr>

              <tr className="tableRow">
                <td>
                  <div className="tableImg d-flex align-items-center">
                    {/* <img
                      src="https://api-tradex.nftarttoken.xyz/images/avatars/yellow-hat.png"
                      alt=""
                    /> */}
                    <h4 className="tableImg">
                      <b>T</b>
                    </h4>
                    <h5>Chirik34</h5>
                  </div>
                  <small className="ml-4">211 orders 99.66% completion</small>
                </td>
                <td className="d-flex">
                  <h5 className="mr-1">0.099</h5> EUR
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <small className="mr-2">Available</small>
                    <h6 className="limitBalance">1.34.00 USDT</h6>
                  </div>
                  <div className="d-flex align-items-center">
                    <small className="mr-2">Limit</small>
                    <h6 className="limitBalance">$34.00 - $88.98 </h6>
                  </div>
                </td>
                <td>
                  <span className="badge badge-light">ZEN</span>
                </td>
                <td>
                  <button
                    onClick={() => setBuyFrom(true)}
                    className="tableButton">
                    Buy USDT
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
