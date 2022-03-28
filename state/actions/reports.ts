import {
  WithdrawAndDepositHistoryApi,
  GetAllSellOrdersAppApi,
} from "service/reports";
import React, { Dispatch, SetStateAction } from "react";
import * as JsSearch from "js-search";
export const WithdrawAndDepositHistoryAction = async (
  type: string,
  per_page: number,
  page: number,
  setReport: React.Dispatch<SetStateAction<object>>,
  setProcessing: React.Dispatch<SetStateAction<boolean>>,
  setStillHistory: React.Dispatch<SetStateAction<boolean>>
) => {
  setProcessing(true);
  const response = await WithdrawAndDepositHistoryApi(type, per_page, page);
  setReport(response.data.histories.data);
  // sortArray(response.data.histories.data, "id", "asc");
  setStillHistory(response.data);
  console.log(response, "response");
  setProcessing(false);
  return response;
};
export const handleSearch = (
  e: React.ChangeEvent<HTMLInputElement>,
  setSearch: Dispatch<any>,
  json: any,
  setHistory: React.Dispatch<SetStateAction<object>>
) => {
  e.preventDefault();
  setSearch(e.target.value);
  if (!e.target.value) {
    setHistory(json.data.histories.data);
    return;
  }
  const search = new JsSearch.Search("id");
  search.addIndex("created_at");
  search.addIndex("address");
  search.addIndex("coin_type");
  search.addIndex("amount");
  search.addIndex("fees");
  search.addIndex("transaction_hash");
  search.addDocuments(json.data.histories.data);
  const result = search.search(e.target.value);
  setHistory(result);
  console.log(result, "result");
};

export const GetAllSellOrdersAppAction = async (
  order_type: string,
  base_coin_id: number,
  trade_coin_id: number,
  per_page: number,
  dashboard_type: string,
  setReport: React.Dispatch<SetStateAction<object>>
) => {
  const response = await GetAllSellOrdersAppApi(
    order_type,
    base_coin_id,
    trade_coin_id,
    per_page,
    dashboard_type
  );
  console.log(response, "base data");
  console.log(response?.data.items, "response.data.sell_orders.data");
  setReport(response?.data.items);

  return response;
};
