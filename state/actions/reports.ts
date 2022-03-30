import {
  WithdrawAndDepositHistoryApi,
  AllBuyOrdersHistoryApi,
  AllSellOrdersHistoryApi,
} from "service/reports";
import React, { Dispatch, SetStateAction } from "react";
import * as JsSearch from "js-search";
import FuzzySearch from "fuzzy-search";
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
    setHistory(json.histories.data);
    return;
  }

  const searcher = new FuzzySearch(
    json.histories.data,
    [
      "id",
      "created_at",
      "address",
      "coin_type",
      "amount",
      "fees",
      "transaction_hash",
      "status",
      "type",
      "processed",
      "price",
      "base_coin",
      "trade_coin",
    ],
    {
      caseSensitive: false,
      sort: true,
    }
  );
  const result = searcher.search(e.target.value);
  setHistory(result);
};
export const handleSearchItems = (
  e: React.ChangeEvent<HTMLInputElement>,
  setSearch: Dispatch<any>,
  json: any,
  setHistory: React.Dispatch<SetStateAction<object>>
) => {
  e.preventDefault();
  setSearch(e.target.value);
  if (!e.target.value) {
    setHistory(json.items.data);
    return;
  }

  const searcher = new FuzzySearch(
    json.items.data,
    [
      "id",
      "created_at",
      "address",
      "coin_type",
      "amount",
      "fees",
      "transaction_hash",
      "status",
      "type",
      "processed",
      "price",
      "base_coin",
      "trade_coin",
    ],
    {
      caseSensitive: false,
      sort: true,
    }
  );
  const result = searcher.search(e.target.value);
  setHistory(result);
};

export const AllBuyOrdersHistoryAction = async (
  per_page: number,
  page: number,
  setReport: React.Dispatch<SetStateAction<object>>,
  setProcessing: React.Dispatch<SetStateAction<boolean>>,
  setStillHistory: React.Dispatch<SetStateAction<boolean>>
) => {
  setProcessing(true);
  const response = await AllBuyOrdersHistoryApi(per_page, page);
  setReport(response.data.items.data);
  setStillHistory(response.data);
  setProcessing(false);
  return response;
};

export const AllSellOrdersHistoryAction = async (
  per_page: number,
  page: number,
  setReport: React.Dispatch<SetStateAction<object>>,
  setProcessing: React.Dispatch<SetStateAction<boolean>>,
  setStillHistory: React.Dispatch<SetStateAction<boolean>>
) => {
  setProcessing(true);
  const response = await AllSellOrdersHistoryApi(per_page, page);
  setReport(response.data.items.data);
  setStillHistory(response.data);
  setProcessing(false);
  return response;
};
