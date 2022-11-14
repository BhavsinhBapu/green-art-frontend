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
import useTranslation from "next-translate/useTranslation";
import React, { useEffect, useState } from "react";
import { customPage, landingPage } from "service/landing-page";
import { launchpadDynamicFromAction } from "state/actions/launchpad";

const Apply = () => {
  const [launchpadForm, setLaunchpadForm] = useState([]);
  const [formFields, setFormFields] = useState<any>([]);

  const { t } = useTranslation("common");

  useEffect(() => {
    launchpadDynamicFromAction(setLaunchpadForm, formFields, setFormFields);
  }, []);
  return (
    <div className="container">
      {JSON.stringify(formFields)}
      <div className="appy-form">
        <h2 className="launchpadTitle">{t("Apply For Launchpad")}</h2>
        <p className="launchpadDescription">
          {t(
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, "
          )}
        </p>
        {launchpadForm?.map((item: any) =>
          item.type === FORM_INPUT_TEXT ? (
            <div className="form-div">
              <label htmlFor="">{item?.title}</label>
              <input
                type="text"
                className="form-control apply-input"
                id=""
                onChange={(e) => {
                  setFormFields({
                    ...formFields,
                    [item.id]: e.target.value,
                  });
                }}
              />
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
              <div className="radio-item">
                {item.optionList.map((radioItem: any, index: number) => (
                  <fieldset className="radio-inline" key={index}>
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
              <div className="radio-item">
                {item.optionList.map((radioItem: any, index: number) => (
                  <div className="radio-inline" key={index}>
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
              <textarea
                className="apply-file-input"
                onChange={(e) => {
                  setFormFields({
                    ...formFields,
                    [item.id]: e.target.value,
                  });
                }}
              />
            </div>
          ) : (
            ""
          )
        )}
        <div className="applyButton">
          <button className="primary-btn">{t("Apply Now")}</button>
        </div>
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
