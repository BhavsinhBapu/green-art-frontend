import { FORM_CHECKBOX, FORM_RADIO, FORM_SELECT } from "helpers/core-constants";
import { toast } from "react-toastify";
import {
  DynamicSubmittedFormList,
  getLaunchpadList,
  getLaunchpadListDetails,
  GetTokenList,
  IcoTokenPhaseList,
  launchpadBuyIcoToken,
  launchpadCreateUpdatePhase,
  launchpadCreateUpdateToken,
  launchpadDynamicFrom,
  launchpadDynamicFromSubmit,
  launchpadLandingPage,
} from "service/launchpad";
import Router from "next/router";
import { GetCoinListApi } from "service/wallet";

export const getLaunchpadListAction = async (
  setLaunchpadList: any,
  setLaunchpadFeatureItem: any
) => {
  let featuredItem: any = [];
  const response = await getLaunchpadList();
  response?.data?.data?.map((item: any, index: number) => {
    item.is_featured == 1 && featuredItem.push(item);
  });
  setLaunchpadList(response);
  setLaunchpadFeatureItem(featuredItem);
};
export const getLaunchpadListDetailsAction = async (
  setLaunchpadListDetails: any,
  id: any
) => {
  const response = await getLaunchpadListDetails(id);
  setLaunchpadListDetails(response);
};

export const launchpadBuyIcoTokenAction = async () => {
  const response = await launchpadBuyIcoToken();
  return response;
};

//find binary search in javascript.

export const launchpadDynamicFromSubmitAction = async (
  payload: any,
  launchpadForm: any
) => {
  const formData = new FormData();
  let i = 0;
  launchpadForm.map((item: any) => {
    if (item.type === FORM_CHECKBOX) {
      // payload[item.id].form_id}
      formData.append(`ids[${i}]`, payload[item.id].form_id);
      formData.append(`values[${i}]`, String(payload[item.id].value));
      i++;
      return;
    }
    formData.append(`ids[${i}]`, payload[item.id].form_id);
    formData.append(`values[${i}]`, payload[item.id].value);
    i++;
    // formData.append(payload[item.id].form_id, payload[item.id].value);
  });
  const response = await launchpadDynamicFromSubmit(formData);
  if (response.success === true) {
    toast.success(response.message);
  } else if (response.success === false) {
    toast.error(response.message);
  }
  return response;
};

export const launchpadDynamicFromAction = async (
  setLaunchpadForm: any,
  formFields: any,
  setFormFields: any,
  setLoading: any
) => {
  const response = await launchpadDynamicFrom();
  setLaunchpadForm(response.data);
  let tempJson: any = {};
  response?.data?.dynamic_form?.map((item: any) => {
    console.log(item, "item.type === FORM_RADIOitem.type === FORM_RADIO");
    tempJson[item.id] = {
      value:
        item.type === FORM_CHECKBOX
          ? []
          : item.type === FORM_RADIO
          ? [item?.optionList.length > 0 && item?.optionList[0]]
          : "",
      form_id: item.id,
    };
  });
  setFormFields(tempJson);
  setLoading(false);
};
export const getLaunchpadLandingPageAction = async (
  setLaunchpadLandingPage: any
) => {
  const response = await launchpadLandingPage();
  setLaunchpadLandingPage(response);
};
export const DynamicSubmittedFormListAction = async (
  per_page: number,
  page: number,
  setReport: any,
  setProcessing: any,
  setStillHistory: any,
  column_name: string,
  order_by: string
) => {
  const response = await DynamicSubmittedFormList(
    per_page,
    page,
    column_name,
    order_by
  );
  if (response.success === true) {
    setReport(response.data.data);
    setStillHistory(response.data);
  }
};

export const launchpadCreateUpdateTokenAction = async (
  payload: any,
  setLoading: any
) => {
  setLoading(true);
  if (Object.keys(payload).length > 0) {
    const formData: any = new FormData();
    formData.append("form_id", payload.form_id);
    formData.append("base_coin", payload.base_coin);
    formData.append("token_name", payload.token_name);
    formData.append("network", payload.network);
    formData.append("wallet_address", payload.wallet_address);
    formData.append("contract_address", payload.contract_address);
    formData.append("wallet_private_key", payload.wallet_private_key);
    formData.append("chain_id", payload.chain_id);
    formData.append("decimal", payload.decimal);
    formData.append("chain_link", payload.chain_link);
    formData.append("gas_limit", payload.gas_limit);
    formData.append("id", payload.id);
    const response = await launchpadCreateUpdateToken(formData);
    setLoading(false);
    if (response.success === true) {
      toast.success(response.message);
      Router.push("/ico/ico-tokens");
    } else if (response.success === false) {
      toast.error(response.message);
    }
    return response;
  }
};
export const launchpadCreateUpdatePhaseAction = async (
  payload: any,
  setLoading: any
) => {
  setLoading(true);
  if (Object.keys(payload).length > 0) {
    const formData: any = new FormData();
    formData.append("ico_token_id", payload.ico_token_id);
    formData.append("coin_price", payload.coin_price);
    formData.append("coin_currency", payload.coin_currency);
    formData.append("phase_title", payload.phase_title);
    formData.append("start_date", payload.start_date);
    formData.append("end_date", payload.end_date);
    formData.append("description", payload.description);
    formData.append("video_link", payload.video_link);
    formData.append("image", payload.image);
    formData.append("social_link[1]", payload.social_link["1"]);
    formData.append("social_link[2]", payload.social_link["2"]);
    formData.append("id", payload.id === null ? null : payload.id);
    formData.append("total_token_supply", payload.total_token_supply);
    console.log(payload.id, "payload.id");
    const response = await launchpadCreateUpdatePhase(formData);
    setLoading(false);

    if (response.success === true) {
      toast.success(response.message);
      Router.push("/ico/ico-tokens");
    } else if (response.success === false) {
      toast.error(response.message);
    }
    return response;
  }
};

// IcoTokenPhaseList;
export const IcoTokenPhaseListAction = async (
  per_page: number,
  page: number,
  setReport: any,
  setProcessing: any,
  setStillHistory: any,
  column_name: string,
  order_by: string,
  id: number
) => {
  const response = await IcoTokenPhaseList(
    per_page,
    page,
    column_name,
    order_by,
    id
  );
  if (response.success === true) {
    console.log(response.data.data, "response.data.data");
    setReport(response.data.data);
    setStillHistory(response.data);
  }
};
export const GetTokenListAction = async (
  per_page: number,
  page: number,
  setReport: any,
  setProcessing: any,
  setStillHistory: any,
  column_name: string,
  order_by: string
) => {
  const response = await GetTokenList(per_page, page, column_name, order_by);
  if (response.success === true) {
    setReport(response.data.data);
    setStillHistory(response.data);
  }
};
