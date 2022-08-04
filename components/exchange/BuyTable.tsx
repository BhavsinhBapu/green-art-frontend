import React from "react";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import { useDispatch } from "react-redux";
import { setBuyPrice, setSellPrice } from "state/reducer/exchange";
import useTranslation from "next-translate/useTranslation";
const TradesTable = ({ buy }: any) => {
  const dispatch = useDispatch();
  const { t } = useTranslation("common");
  const changeSellPrice = (price: number) => {
    dispatch(setSellPrice(price));
  };
  const [summary, setSummary] = React.useState<any>({
    amount: 0,
    total: 0,
  });
  return (
    <tbody>
      {buy?.length > 0 ? (
        buy?.map((item: any, index: number) => (
          <Tooltip
            placement={"right"}
            overlay={
              <span>
                <span>
                  {t("Avg Price:")} {parseFloat(item.price)}
                </span>
                <br />
                <span>
                  {t("Amount:")} {parseFloat(summary.amount)}
                </span>
                <br />

                <span>
                  {t("Total:")} {parseFloat(summary.total).toFixed(5)}
                </span>
              </span>
            }
            trigger={["hover"]}
            key={index}
            overlayClassName="rcTooltipOverlay"
          >
            <tr
              className="odd"
              onClick={() => changeSellPrice(item.price)}
              onMouseEnter={() => {
                const selectedIndex = index;
                const lastIndex = buy.length - 1;
                let sumtotal = 0;
                let sumAmount = 0;
                for (let i = selectedIndex; i <= lastIndex; i++) {
                  sumtotal += parseFloat(buy[i].total);
                  sumAmount += parseFloat(buy[i].amount);
                }
                setSummary({
                  amount: sumAmount,
                  total: sumtotal,
                });
              }}
            >
              <>
                <td>
                  <div className="asset">
                    <span className="text-danger">
                      {parseFloat(item.price).toFixed(2)}
                    </span>
                  </div>
                </td>
                <td>
                  <div className="asset">
                    <span className="asset-name">{item.amount}</span>
                  </div>
                </td>
                <td>
                  <div className="asset">
                    <span className="asset-name">
                      {parseFloat(item.total).toFixed(2)}
                    </span>
                  </div>
                </td>
              </>
            </tr>
          </Tooltip>
        ))
      ) : (
        <tbody className="w-100">
          <tr className="odd">
            <td valign="top" colSpan={3} className="dataTables_empty">
              No data available in table
            </td>
          </tr>
        </tbody>
      )}
    </tbody>
  );
};

export default TradesTable;
