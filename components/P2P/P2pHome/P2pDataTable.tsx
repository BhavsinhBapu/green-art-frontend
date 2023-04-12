import { BuyFrom } from "./BuyFrom";
import { useState } from "react";
import Link from "next/link";
import { NoItemFound } from "components/NoItemFound/NoItemFound";
import { BUY } from "helpers/core-constants";
import { RootState } from "state/store";
import { useSelector } from "react-redux";

export const P2pDataTable = ({ history, filters, isLoggedIn }: any) => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="table-responsive">
          {!history ? (
            <NoItemFound />
          ) : (
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
                          <h5>{item?.user?.nickname}</h5>
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
                      {item?.payment_method_list?.map((payment: any) => (
                        <span className="badge badge-light mr-2">
                          {payment?.admin_pamynt_method?.name}
                        </span>
                      ))}
                    </td>
                    <td>
                      {isLoggedIn && (
                        <Link
                          href={`/p2p/details/${item.uid}?adtype=${filters.type}`}
                        >
                          <button className="tableButton">
                            {filters.type === BUY ? "Buy" : "Sell"}{" "}
                            {item.coin_type}
                          </button>
                        </Link>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};
