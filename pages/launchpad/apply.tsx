import { Formik } from "formik";
import {
  FORM_CHECKBOX,
  FORM_FILE,
  FORM_INPUT_TEXT,
  FORM_RADIO,
  FORM_SELECT,
  FORM_TEXT_AREA,
} from "helpers/core-constants";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import { customPage, landingPage } from "service/landing-page";
import { launchpadDynamicFromAction } from "state/actions/launchpad";

const Apply = () => {
  const [launchpadForm, setLaunchpadForm] = useState([]);
  const [formFields, setFormFields] = useState([]);
  useEffect(() => {
    launchpadDynamicFromAction(setLaunchpadForm, formFields, setFormFields);
  }, []);
  return (
    <div className="container">
      {/* {JSON.stringify(formFields)} */}
      <div className="appy-form">
        {launchpadForm?.map((item: any) =>
          item.type === FORM_INPUT_TEXT ? (
            <div className="form-div">
              <label htmlFor="">{item?.title}</label>
              <input type="text" className="form-control apply-input" id="" />
            </div>
          ) : item.type === FORM_SELECT ? (
            <div className="form-div">
              <label htmlFor="">{item?.title}</label>
              <select className="form-control apply-select-field" name="" id="">
                {item.optionList.map((select: any) => (
                  <>
                    <option value="">{select}</option>
                  </>
                ))}
              </select>
            </div>
          ) : item.type === FORM_RADIO ? (
            <div className="form-div">
              <label htmlFor="">{item?.title}</label>
              <div className="d-flex ">
                {item.optionList.map((radioItem: any, index: number) => (
                  <fieldset className="w-100" key={index}>
                    <input
                      className="form-control apply-radio-input"
                      type="radio"
                      name="radio"
                    />
                    <span>{radioItem}</span>
                  </fieldset>
                ))}
              </div>
            </div>
          ) : item.type === FORM_CHECKBOX ? (
            <div className="form-div">
              <label htmlFor="">{item?.title}</label>
              <div className="d-flex ">
                {item.optionList.map((radioItem: any, index: number) => (
                  <div className="w-100 d-flex " key={index}>
                    <input
                      className="form-control apply-radio-input"
                      type="checkbox"
                    />
                    <span>{radioItem}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : item.type === FORM_FILE ? (
            <div className="form-div">
              <label htmlFor="">{item?.title}</label>
              <input className="apply-file-input" type="file" />
            </div>
          ) : item.type === FORM_TEXT_AREA ? (
            <div className="form-div">
              <label htmlFor="">{item?.title}</label>
              <textarea className="apply-file-input" />
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  await SSRAuthCheck(ctx, "/user/buy-order-history");
  const { data } = await landingPage();
  const { data: customPageData } = await customPage();
  return {
    props: {
      socialData: data.media_list,
      copyright_text: data?.copyright_text,
      customPageData: customPageData.data,
    },
  };
};

export default Apply;
