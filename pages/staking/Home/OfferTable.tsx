import React from "react";

const OfferTable = () => {
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Token</th>
                  <th scope="col">Est APR</th>
                  <th scope="col">Duration Days</th>
                  <th scope="col">Minimum Locked Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="tableRow">
                  <td>
                    <div className="tableImg d-flex align-items-center">
                      <img
                        src="https://cdn4.iconfinder.com/data/icons/crypto-currency-and-coin-2/256/cardano_ada-512.png"
                        alt=""
                      />
                      <h5>Ada</h5>
                    </div>
                  </td>
                  <td className="d-flex">
                    <h5 className="mr-1 text-success">11.29%</h5>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="StakingDays">30 Days</div>
                      <div className="StakingDaysActive">60 Days</div>
                      <div className="StakingDays">90 Days</div>
                      <div className="StakingDays">120 Days</div>
                    </div>
                  </td>
                  <td>
                    <h6 className="">993 ADA</h6>
                  </td>
                  <td>
                    <button className="tableButton">Stake now</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferTable;
