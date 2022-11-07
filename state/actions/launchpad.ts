import {
  getLaunchpadList,
  launchpadBuyIcoToken,
  launchpadDynamicFrom,
  launchpadDynamicFromSubmit,
} from "service/launchpad";

export const getLaunchpadListAction = async () => {
  const response = await getLaunchpadList();
  return response;
};

export const launchpadBuyIcoTokenAction = async () => {
  const response = await launchpadBuyIcoToken();
  return response;
};
export const launchpadDynamicFromSubmitAction = async () => {
  const response = await launchpadDynamicFromSubmit();
  return response;
};
export const launchpadDynamicFromAction = async (setLaunchpadForm: any) => {
  const response = await launchpadDynamicFrom();
  console.log(response.data, "setLaunchpadForm");
  if (response.success === true) {
    setLaunchpadForm(response.data);
  }
};
