import useTranslation from "next-translate/useTranslation";
import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
import { useRouter } from "next/router";
import { launchpadCreateUpdatePhaseAction } from "state/actions/launchpad";
import { GetCoinListApi } from "service/wallet";

const CreateEditPhase = ({ id }: any) => {
  const { t } = useTranslation("common");
  const [coinList, setCoinList] = useState([]);
  const [phaseForm, setphaseForm]: any = useState<any>({
    id: null,
    ico_token_id: id,
    coin_price: "",
    coin_currency: "",
    total_token_supply: "",
    phase_title: "",
    start_date: "",
    end_date: "",
    description: "",
    video_link: "",
    image: "",
    social_link: {
      1: "",
      2: "",
      3: "",
    },
  });
  const [loading, setLoading]: any = useState<any>(false);
  const router = useRouter();
  const getCoinList = async () => {
    const coinResponse = await GetCoinListApi();
    console.log(coinResponse, "coinResponse");
    setCoinList(coinResponse.data);
  };
  useEffect(() => {
    getCoinList();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="ico-tokenCreate">
          <div className="col-12">
            <h2>
              {t(
                `${router.query.edit === "true" ? "Edit" : "Create New"}  Phase`
              )}
            </h2>
          </div>
          <div className="ico-create-form col-12">
            <form
              className="row"
              onSubmit={(e) => {
                e.preventDefault();
                launchpadCreateUpdatePhaseAction(phaseForm, setLoading);
              }}
            >
              <div className="col-md-6 form-input-div">
                <label className="ico-label-box" htmlFor="">
                  {t("Coin price")}
                </label>
                <input
                  type="number"
                  name="coin_price"
                  required
                  value={phaseForm.coin_price}
                  onChange={(e) => {
                    setphaseForm({
                      ...phaseForm,
                      coin_price: e.target.value,
                    });
                  }}
                  className={`ico-input-box`}
                />
              </div>
              <div className="col-md-6 form-input-div">
                <label className="ico-label-box" htmlFor="">
                  {t("Select Coin Currency")}
                </label>
                <select
                  name="coin_currency"
                  className={`ico-input-box`}
                  required
                  onChange={(e) => {
                    setphaseForm({
                      ...phaseForm,
                      coin_currency: e.target.value,
                    });
                  }}
                >
                  <option value="">{t("Select currency")}</option>
                  {coinList.map((item: any) => (
                    <option value={item.coin_type}>{item?.name}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-12 form-input-div">
                <label className="ico-label-box" htmlFor="">
                  {t("Phase Title")}
                </label>
                <input
                  type="text"
                  name="phase_title"
                  required
                  value={phaseForm.phase_title}
                  onChange={(e) => {
                    setphaseForm({
                      ...phaseForm,
                      phase_title: e.target.value,
                    });
                  }}
                  className={`ico-input-box`}
                />
              </div>
              <div className="col-md-12 form-input-div">
                <label className="ico-label-box" htmlFor="">
                  {t("Total Token Supply")}
                </label>
                <input
                  type="number"
                  name="total_token_supply"
                  required
                  value={phaseForm.total_token_supply}
                  onChange={(e) => {
                    setphaseForm({
                      ...phaseForm,
                      total_token_supply: e.target.value,
                    });
                  }}
                  className={`ico-input-box`}
                />
              </div>

              <div className="col-md-6 form-input-div">
                <label className="ico-label-box" htmlFor="">
                  {t("Start Date")}
                </label>
                <input
                  type="date"
                  name="start_date"
                  required
                  value={phaseForm.start_date}
                  onChange={(e) => {
                    setphaseForm({
                      ...phaseForm,
                      start_date: e.target.value,
                    });
                  }}
                  className={`ico-input-box`}
                />
              </div>
              <div className="col-md-6 form-input-div">
                <label className="ico-label-box" htmlFor="">
                  {t("End Date")}
                </label>
                <input
                  type="date"
                  name="end_date"
                  value={phaseForm.end_date}
                  onChange={(e) => {
                    setphaseForm({
                      ...phaseForm,
                      end_date: e.target.value,
                    });
                  }}
                  className={`ico-input-box`}
                />
              </div>
              <div className="col-md-12 form-input-div">
                <label className="ico-label-box" htmlFor="">
                  {t("Description")}
                </label>
                <textarea
                  name="description"
                  className={`ico-input-box`}
                  required
                  value={phaseForm.description}
                  onChange={(e) => {
                    setphaseForm({
                      ...phaseForm,
                      description: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="col-md-6 form-input-div">
                <label className="ico-label-box" htmlFor="">
                  {t("Video Link")}
                </label>
                <input
                  type="text"
                  name="video_link"
                  value={phaseForm.video_link}
                  onChange={(e) => {
                    setphaseForm({
                      ...phaseForm,
                      video_link: e.target.value,
                    });
                  }}
                  className={`ico-input-box`}
                />
              </div>
              <div className="col-md-6 form-input-div">
                <label className="ico-label-box" htmlFor="">
                  {t("Upload Image")}
                </label>
                <input
                  type="file"
                  name="image"
                  required
                  className={`ico-input-box`}
                  // value={phaseForm.image}
                  // onChange={(e: any) => {
                  //   setphaseForm({
                  //     ...phaseForm,
                  //     image: e.target.file[0],
                  //   });
                  // }}
                  onChange={(e: any) => {
                    setphaseForm({
                      ...phaseForm,
                      image: e.target.files[0],
                    });
                  }}
                />
              </div>
              <div className="col-md-6 form-input-div">
                <label className="ico-label-box" htmlFor="">
                  {t("Facebook Link")}
                </label>
                <input
                  type="text"
                  name="social_link"
                  className={`ico-input-box`}
                  required
                  value={phaseForm.social_link["1"]}
                  onChange={(e: any) => {
                    setphaseForm({
                      ...phaseForm,
                      social_link: {
                        ...phaseForm.social_link,
                        ["1"]: e.target.value,
                      },
                    });
                  }}
                />
              </div>
              <div className="col-md-6 form-input-div">
                <label className="ico-label-box" htmlFor="">
                  {t("Instagram Link")}
                </label>
                <input
                  type="text"
                  name="social_link"
                  className={`ico-input-box`}
                  required
                  value={phaseForm.social_link["2"]}
                  onChange={(e: any) => {
                    setphaseForm({
                      ...phaseForm,
                      social_link: {
                        ...phaseForm.social_link,
                        ["2"]: e.target.value,
                      },
                    });
                  }}
                />
              </div>
              <div className="col-md-6 form-input-div">
                <label className="ico-label-box" htmlFor="">
                  {t("Linkedin Link")}
                </label>
                <input
                  type="text"
                  name="social_link"
                  className={`ico-input-box`}
                  required
                  value={phaseForm.social_link["3"]}
                  onChange={(e: any) => {
                    setphaseForm({
                      ...phaseForm,
                      social_link: {
                        ...phaseForm.social_link,
                        ["3"]: e.target.value,
                      },
                    });
                  }}
                />
              </div>
              <div className="col-md-12 form-input-div">
                <button type="submit" className="primary-btn">
                  {loading ? t("Loading..") : t("Create Phase")}
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
  // const icoList = await icoListDetails(id);

  return {
    props: {
      id: id,
      edit: edit ? edit : null,
      // data: icoList?.data ? icoList?.data : null,
    },
  };
};
export default CreateEditPhase;
