import React from "react";

const TradesTable = ({ sell }: any) => {
  return (
    <tbody>
      {sell?.length > 0 ? (
        sell?.map((item: any) => (
          <tr className="odd">
            <td>
              <div className="asset">
                <span className="asset-name">00</span>
              </div>
            </td>
            <td>
              <div className="asset">
                <span className="asset-name">00</span>
              </div>
            </td>
            <td>
              <div className="asset">
                <span className="asset-name">00</span>
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
