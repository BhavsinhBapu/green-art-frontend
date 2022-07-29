import useTranslation from "next-translate/useTranslation";
import React from "react";

const TradesTable = ({ marketTrades }: any) => {
  const { t } = useTranslation("common");
  return (
    <tbody>
      {marketTrades?.length === 0 ? (
        <tr className="odd">
          <td valign="top" colSpan={3} className="text-center">
            {t("No data available in table")}
          </td>
        </tr>
      ) : (
        marketTrades?.map((item: any, index: number) => (
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
