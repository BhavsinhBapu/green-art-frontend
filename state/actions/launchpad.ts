import { FORM_CHECKBOX, FORM_RADIO, FORM_SELECT } from "helpers/core-constants";
import {
  getLaunchpadList,
  getLaunchpadListDetails,
  launchpadBuyIcoToken,
  launchpadDynamicFrom,
  launchpadDynamicFromSubmit,
} from "service/launchpad";

export const getLaunchpadListAction = async (
  setLaunchpadList: any,
  setLaunchpadFeatureItem: any
) => {
  let featuredItem: any = [];
  const response = await getLaunchpadList();
  response?.data?.map((item: any, index: number) => {
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
export const launchpadDynamicFromSubmitAction = async () => {
  const response = await launchpadDynamicFromSubmit();
  return response;
};
export const launchpadDynamicFromAction = async (
  setLaunchpadForm: any,
  formFields: any,
  setFormFields: any
) => {
  const response = await launchpadDynamicFrom();
  setLaunchpadForm(response);
  let tempJson: any = {};
  response.map((item: any) => {
    tempJson[item.id] = {
      value:
        item.type === FORM_RADIO
          ? []
          : item.type === FORM_SELECT
          ? []
          : item.type === FORM_CHECKBOX
          ? []
          : "",
      form_id: item.id,
    };
  });
  setFormFields(tempJson);
};
