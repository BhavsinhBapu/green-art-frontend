import SectionLoading from "components/common/SectionLoading";
import { useEffect, useState } from "react";

export const InvesmentOrderTable = ({
  actionFunction,
  filter = false,
}: any) => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedCoin, setSelectedCoins] = useState("all");
  const [processing, setProcessing] = useState<boolean>(false);
  const [history, setHistory] = useState<any>([]);
  const [stillHistory, setStillHistory] = useState<any>([]);
  const LinkTopaginationString = (page: any) => {
    const url = page.url.split("?")[1];
    const number = url.split("=")[1];
    actionFunction(
      5,
      parseInt(number),
      setHistory,
      setProcessing,
      setStillHistory,
      selectedStatus,
      selectedCoin
    );
  };

  useEffect(() => {
    actionFunction(
      5,
      1,
      setHistory,
      setProcessing,
      setStillHistory,
      selectedStatus,
      selectedCoin
    );
  }, [selectedStatus, selectedCoin]);

  return (
    <div className="container">
      {processing ? (
        <SectionLoading />
      ) : (
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table mt-4">
                <thead>
                  <tr>
                    <th scope="col">Coin Type</th>
                    <th scope="col">Daily Earning</th>
                    <th scope="col">Investment Amount</th>
                    <th scope="col">Auto Renew</th>
                    <th scope="col">Status</th>
                    <th scope="col">Total Bonus</th>
                    <th scope="col">Time Period</th>
                  </tr>
                </thead>
                <tbody>
                  {history?.map((item: any, index: any) => (
                    <tr className="tableRow" key={index}>
                      <td>
                        <div className="tableImg d-flex align-items-center">
                          <h6 className="">{item?.coin_type}</h6>
                        </div>
                      </td>
                      <td>
                        <h6 className="mx-2">
                          {parseFloat(item.earn_daily_bonus)} {item?.coin_type}
                        </h6>
                      </td>
                      <td>{parseFloat(item.investment_amount)}</td>
                      <td>
                        {parseInt(item.is_auto_renew) === 1
                          ? "Disabled"
                          : parseInt(item.is_auto_renew) === 2
                          ? "Enabled"
                          : ""}
                      </td>
                      <td>
                        {parseInt(item?.status) === 1 ? "Active" : "In Active"}
                      </td>

                      <td>
                        {item.total_bonus} {item?.coin_type}
                      </td>
                      <td>{item.period} Days</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {history?.length > 0 && (
                <div className="pagination-wrapper" id="assetBalances_paginate">
                  <span>
                    {stillHistory?.links?.map((link: any, index: number) =>
                      link.label === "&laquo; Previous" ? (
                        <a
                          key={index}
                          className="paginate-button"
                          onClick={() => {
                            if (link.url) LinkTopaginationString(link);
                          }}
                        >
                          <i className="fa fa-angle-left"></i>
                        </a>
                      ) : link.label === "Next &raquo;" ? (
                        <a
                          className="paginate-button"
                          onClick={() => LinkTopaginationString(link)}
                          key={index}
                        >
                          <i className="fa fa-angle-right"></i>
                        </a>
                      ) : (
                        <a
                          className={`paginate_button paginate-number ${
                            link.active === true && "text-warning"
                          }`}
                          aria-controls="assetBalances"
                          data-dt-idx="1"
                          onClick={() => LinkTopaginationString(link)}
                          key={index}
                        >
                          {link.label}
                        </a>
                      )
                    )}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
