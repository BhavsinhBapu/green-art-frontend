import React from "react";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import { useDispatch } from "react-redux";
import { setBuyPrice, setSellPrice } from "state/reducer/exchange";
const TradesTable = ({ buy }: any) => {
  const dispatch = useDispatch();
  const changeSellPrice = (price: number) => {
    dispatch(setSellPrice(price));
  };
  return (
    <tbody>
      {buy?.length > 0 ? (
        buy?.map((item: any, index: number) => (
          <Tooltip
            placement={"right"}
            overlay={
              <span>
                <span>Price: {item.price}</span>
                <br />
                <span>Amount: {item.amount}</span>
                <br />

                <span>Size: {item.my_size}</span>
              </span>
            }
            trigger={["hover"]}
            key={index}
            overlayClassName="rcTooltipOverlay"
          >
            <tr className="odd" onClick={() => changeSellPrice(item.price)}>
              <>
                <td>
                  <div className="asset">
                    <span className="text-danger">{item.price}</span>
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
