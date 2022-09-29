import moment from "moment";
import { toast } from "react-toastify";
export const formateData = (date: any) => {
  return moment(date).format("MMM Do YY h:mm:ss a");
};

export const formateZert = (number: any) => {
  return parseFloat(number);
};
export const splitPair = (word: any) => {
  // USDT.TRC20_BTC
  let check = word.includes(".");
  if (check === true) {
    return word.split(".")[0];
  } else {
    return word;
  }
};
export const formatCurrency = (value: any) => {
  return new Intl.NumberFormat("en-US").format(value);
};
export const copyTextById = (id: string) => {
  const element: any = document.getElementById(id);
  if (element) {
    element.select();
    document.execCommand("copy");
    toast.success("Copied to clipboard");
  }
};
export const sortArray = (
  arr: any,
  key: string,
  order: string,
  setArray: any
) => {
  let newArr = [];
  if (order === "asc") {
    newArr = arr.sort((a: any, b: any) => {
      return a[key] - b[key];
    });
  } else {
    newArr = arr.sort((a: any, b: any) => {
      return b[key] - a[key];
    });
  }

  setArray(newArr);
  return newArr;
};
