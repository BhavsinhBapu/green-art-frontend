import Link from "next/link";
import React, { useEffect, useState } from "react";

const OfferRow = ({ offers, item, isLoggedIn }: any) => {
  const [selectedDays, setSelectedDays] = useState(0);
  const [selectedData, setSelectedData] = useState<any>();
  useEffect(() => {
    setSelectedData(offers?.offer_list[item][0]);
  }, []);
  return (
    <tr className="tableRow">
      <td>
        <div className="tableImg d-flex align-items-center">
          <img
            src="https://cdn4.iconfinder.com/data/icons/crypto-currency-and-coin-2/256/cardano_ada-512.png"
            alt=""
          />
          <h5>{item}</h5>
        </div>
      </td>
      <td className="d-flex">
        <h5 className="mr-1">{selectedData?.uid}</h5>
      </td>
      <td>
        <h6 className="">{selectedData?.minimum_investment}</h6>
      </td>
      <td>
        <div className="d-flex align-items-center">
          {offers?.offer_list[item].map((offer: any, index: any) => (
            <div
              className={
                selectedDays === index ? "StakingDaysActive" : "StakingDays"
              }
              onClick={() => {
                setSelectedDays(index);
                console.log(offer, "offeroffer");
                setSelectedData(offer);
              }}
            >
              {offer?.period} Days
            </div>
          ))}
        </div>
      </td>

      <td>
        {isLoggedIn && (
          <Link href={`/staking/locked-staking/${item}/${selectedData?.uid}`}>
            <button className="tableButton">Stake now</button>
          </Link>
        )}
      </td>
    </tr>
  );
};

export default OfferRow;
