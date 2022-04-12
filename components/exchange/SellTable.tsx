import React from "react";

const TradesTable = ({ tradeOrderHistory }: any) => {
  return (
    <tbody>
      {tradeOrderHistory?.length === 0 ? (
        <tr className="odd">
          <td valign="top" colSpan={3} className="dataTables_empty">
            No data available in table
          </td>
        </tr>
      ) : (
        tradeOrderHistory?.map((item: any, index: number) => (
          <tr className="odd" key={index}>
            <td>
              <div className="asset">
                <span className="asset-name ">{item?.price}</span>
              </div>
            </td>
            <td>
              <div className="asset">
                <span className="asset-name ">{item?.amount}</span>
              </div>
            </td>
            <td>
              <div className="asset">
                <span className="asset-name ">{item?.time}</span>
              </div>
            </td>
          </tr>
        ))
      )}
    </tbody>
  );
};

export default TradesTable;
