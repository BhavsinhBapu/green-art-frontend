import DynamicLoading from "components/common/dynamicLoading";
import SmallLoading from "components/common/smallLoading";
import TableLoading from "components/common/TableLoading";
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
import {
  launchpadDynamicFromAction,
  launchpadDynamicFromSubmitAction,
} from "state/actions/launchpad";

const Apply = () => {
  const [loading, setLoading] = useState(true);
  const [launchpadForm, setLaunchpadForm] = useState([]);
  const [formFields, setFormFields] = useState<any>([]);

  const { t } = useTranslation("common");

  useEffect(() => {
    launchpadDynamicFromAction(
      setLaunchpadForm,
      formFields,
      setFormFields,
      setLoading
    );
  }, []);

  return (
    <div className="container">
      {loading ? (
        <DynamicLoading count={13} width={"80%"} />
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            launchpadDynamicFromSubmitAction(formFields, launchpadForm);
          }}
        >
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
                        [item.id]: {
                          value: e.target.value,
                          form_id: item.id,
                        },
                      });
                    }}
                  />
                </div>
              ) : item.type === FORM_SELECT ? (
                <div className="form-div">
                  <label htmlFor="">{item?.title}</label>
                  <select
                    className="form-control apply-select-field"
                    name=""
                    id=""
                    onChange={(e) => {
                      setFormFields({
                        ...formFields,
                        [item.id]: {
                          ...[item.id],
                          value: [e.target.value],
                          form_id: item.id,
                        },
                      });
                    }}
                  >
                    {item.optionList.map((select: any) => (
                      <>
                        <option value={select}>{select}</option>
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
                          onChange={(e) => {
                            setFormFields({
                              ...formFields,
                              [item.id]: {
                                ...[item.id],
                                value: [radioItem],
                              },
                            });
                          }}
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
                    {item.optionList.map((CheckItem: any, index: number) => (
                      <div className="radio-inline" key={index}>
                        <input
                          className="form-control apply-radio-input"
                          type="checkbox"
                          onChange={(e) => {
                            let allChecked = formFields[item.id].value;
                            if (e.target.checked === false) {
                              allChecked = allChecked.filter(
                                (mapItem: string) => mapItem != CheckItem
                              );
                            } else {
                              allChecked.push(CheckItem);
                            }
                            setFormFields({
                              ...formFields,
                              [item.id]: {
                                ...[item.id],
                                value: allChecked,
                                form_id: item.id,
                              },
                            });
                            console.log(e.target.checked);
                          }}
                        />
                        <span>{CheckItem}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : item.type === FORM_FILE ? (
                <div className="form-div">
                  <label htmlFor="">{item?.title}</label>
                  <input
                    className="apply-file-input"
                    type="file"
                    onChange={(e: any) => {
                      setFormFields({
                        ...formFields,
                        [item.id]: {
                          value: e.target.files[0],
                          form_id: item.id,
                        },
                      });
                    }}
                  />
                </div>
              ) : item.type === FORM_TEXT_AREA ? (
                <div className="form-div">
                  <label htmlFor="">{item?.title}</label>
                  <textarea
                    className="apply-file-input"
                    onChange={(e) => {
                      setFormFields({
                        ...formFields,
                        [item.id]: {
                          value: e.target.value,
                          form_id: item.id,
                        },
                      });
                    }}
                  />
                </div>
              ) : (
                ""
              )
            )}
            <div className="applyButton">
              <button className="primary-btn" type="submit">
                {t("Apply Now")}
              </button>
            </div>
          </div>
        </form>
      )}
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
