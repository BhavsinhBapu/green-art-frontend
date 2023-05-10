import React, { useEffect, useState } from "react";
import { getOfferListAction } from "state/actions/staking";
import OfferRow from "./OfferRow";

const OfferTable = () => {
  const [offers, setOffers] = useState<any>([]);
  useEffect(() => {
    getOfferListAction(setOffers);
  }, []);
  console.log(offers, "offers");
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Token</th>
                  <th scope="col">Maximum Amount</th>
                  <th scope="col">Minimum Amount</th>
                  <th scope="col">Duration Days</th>
                </tr>
              </thead>
              <tbody>
                {offers?.coin_type?.map((item: any) => (
                  <OfferRow offers={offers} item={item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferTable;
