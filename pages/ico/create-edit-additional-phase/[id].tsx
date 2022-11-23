import useTranslation from "next-translate/useTranslation";
import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
import { useRouter } from "next/router";
import {
  launchpadCreateUpdatePhaseAction,
  launchpadCreateUpdatePhaseAdditionalAction,
} from "state/actions/launchpad";
import { GetCoinListApi } from "service/wallet";
import { icoListDetails, phaseListDetails } from "service/launchpad";
import { parseCookies } from "nookies";

const CreateEditAdditionalPhase = ({ id, edit, data }: any) => {
  const { t } = useTranslation("common");

  const [inputFields, setInputFields] = useState<any>([
    { value: "", title: "", file: "" },
  ]);
  const [loading, setLoading]: any = useState<any>(false);
  const router = useRouter();
  const handleFormChange = (index: any, event: any) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };
  const handleFormFileChange = (index: any, event: any) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.files[0];
    setInputFields(data);
  };
  const addFields = () => {
    let newfield = { value: "", title: "", file: "" };
    setInputFields([...inputFields, newfield]);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="ico-tokenCreate">
          <div className="col-12">
            <h2>
              {t(
                `${
                  router.query.edit === "true" ? "Edit" : "Add"
                }  Additional Info`
              )}
            </h2>
            <button className="primary-btn" onClick={addFields}>
              {t("Add Field")}
            </button>
          </div>
          <div className="ico-create-form col-12">
            <form
              className="row"
              onSubmit={(e) => {
                e.preventDefault();

                launchpadCreateUpdatePhaseAdditionalAction(
                  inputFields,
                  id,
                  setLoading
                );
              }}
            >
              {inputFields.map((item: any, index: any) => (
                <>
                  <div className="col-md-4 form-input-div">
                    <label className="ico-label-box" htmlFor="">
                      {t("Title")}
                    </label>
                    <input
                      type="text"
                      name="title"
                      placeholder="Title"
                      required
                      value={item.title}
                      onChange={(event) => handleFormChange(index, event)}
                      className={`ico-input-box`}
                    />
                  </div>
                  <div className="col-md-4 form-input-div">
                    <label className="ico-label-box" htmlFor="">
                      {t("Value")}
                    </label>
                    <input
                      type="text"
                      name="value"
                      placeholder="Value"
                      value={item.value}
                      required
                      onChange={(event) => handleFormChange(index, event)}
                      className={`ico-input-box`}
                    />
                  </div>
                  <div className="col-md-4 form-input-div">
                    <label className="ico-label-box" htmlFor="">
                      {t("Value")}
                    </label>
                    <input
                      type="file"
                      name="file"
                      placeholder="File"
                      onChange={(event) => handleFormFileChange(index, event)}
                      className={`ico-input-box`}
                    />
                  </div>
                </>
              ))}

              <div className="col-md-12 form-input-div">
                <button
                  type="submit"
                  disabled={loading}
                  className="primary-btn"
                >
                  {loading ? t("Loading..") : t("Add aditional data")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const { id, edit } = ctx.query;
  await SSRAuthCheck(ctx, "/ico/applied-launchpad");
  const cookies = parseCookies(ctx);
  return {
    props: {
      id: id,
      edit: edit ? edit : null,
      data: {},
    },
  };
};
export default CreateEditAdditionalPhase;
