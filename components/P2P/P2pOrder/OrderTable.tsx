import Link from "next/link";

export const OrderTable = ({
  stillHistory,
  history,
  LinkTopaginationString,
}: any) => {
  console.log(history, "historyhistoryhistoryhistory");
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="table-responsive">
            <table className="table mt-4">
              <thead>
                <tr>
                  <th scope="col">Order Id</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Price</th>
                  <th scope="col">Seller fees</th>
                  <th scope="col">Status</th>
                  <th scope="col">Operation</th>
                </tr>
              </thead>
              <tbody>
                {history.map((item: any) => (
                  <tr className="tableRow">
                    <td>
                      <div className="tableImg d-flex align-items-center">
                        <h6 className="">{item.order_id}</h6>
                      </div>
                    </td>
                    <td>
                      <h6 className="mx-2">
                        {parseFloat(item.amount)} {item.coin_type}
                      </h6>
                    </td>
                    <td>
                      {parseFloat(item.price)} {item.currency}
                    </td>
                    <td>{item.seller_fees}</td>
                    <td>
                      {parseInt(item?.is_reported) !== 0
                        ? "Disputed"
                        : parseInt(item.is_success) === 0
                        ? "Pending"
                        : parseInt(item.is_success) === 1
                        ? "Completed"
                        : ""}
                    </td>

                    <td>
                      <Link href={`/p2p/trade/${item.uid}`}>
                        <p className="text-warning">Details</p>
                      </Link>
                    </td>
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
                        className="paginate-button"
                        onClick={() => {
                          if (link.url) LinkTopaginationString(link);
                        }}
                        key={index}
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
    </div>
  );
};
