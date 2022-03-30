import React from "react";

const TradesTable = ({ buy }: any) => {
  return (
    <tbody>
      {buy?.length > 0 ? (
        buy?.map((item: any) => (
          <tr className="odd">
            <td>
              <div className="asset">
                <span className="asset-name">{item.price}</span>
              </div>
            </td>
            <td>
              <div className="asset">
                <span className="asset-name">{item.amount}</span>
              </div>
            </td>
            <td>
              <div className="asset">
                <span className="asset-name">{item.my_size}</span>
              </div>
            </td>
          </tr>
        ))
      ) : (
        <tr className="odd">
          <td valign="top" colSpan={3} className="dataTables_empty">
            No data available in table
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default TradesTable;
