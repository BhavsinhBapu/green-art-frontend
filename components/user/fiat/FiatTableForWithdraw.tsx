import React from "react";
import moment from "moment";
import useTranslation from "next-translate/useTranslation";
export default function FiatTableForWithdraw({
  data,
  setSelectedLimit,
  selectedLimit,
}: any) {
  const { t } = useTranslation();
  return (
    <div>
      <div id="assetBalances_wrapper" className="dataTables_wrapper no-footer">
        <div className="dataTables_head">
          <div className="dataTables_length" id="assetBalances_length">
            <label className="">
              {t("Show")}
              <select
                name="assetBalances_length"
                aria-controls="assetBalances"
                className=""
                placeholder="10"
                onChange={(e) => {
                  setSelectedLimit(e.target.value);
                }}
                value={selectedLimit}
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </label>
          </div>
          {/* <div id="table_filter" className="dataTables_filter">
            <label>
              {"Search"}
              <input
                type="search"
                className="data_table_input"
                aria-controls="table"
                placeholder="Search..."
              />
            </label>
          </div> */}
        </div>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col" className="p-2 border-bottom font-bold">
              Created At
            </th>
            <th scope="col" className="p-2 border-bottom font-bold">
              Bank
            </th>
            <th scope="col" className="p-2 border-bottom font-bold">
              Currency
            </th>
            <th scope="col" className="p-2 border-bottom font-bold">
              Amount
            </th>
            <th scope="col" className="p-2 border-bottom font-bold">
              Fees
            </th>
            <th scope="col" className="p-2 border-bottom font-bold">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item: any, index: any) => (
            <tr>
              <td className="p-2 border-bottom text-14">
                {moment(item.created_at).format("DD MMM YYYY")}
              </td>
              <td className="p-2 border-bottom text-14">{item.bank_title}</td>
              <td className="p-2 border-bottom text-14">{item.coin_type}</td>
              <td className="p-2 border-bottom text-14">{item.amount}</td>
              <td className="p-2 border-bottom text-14">{item.fees}</td>
              <td className="p-2 border-bottom text-14 text-primary-color">
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
