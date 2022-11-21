import useTranslation from "next-translate/useTranslation";
import React, { useEffect, useState } from "react";
import { launchpadCreateUpdateTokenAction } from "state/actions/launchpad";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { GetServerSideProps } from "next";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";

const TokenCreate = ({ id }: any) => {
  const { t } = useTranslation("common");
  const [launchpadForm, setLaunchpadForm]: any = useState<any>([]);
  const [loading, setLoading]: any = useState<any>(false);

  return (
    <div className="container">
      <div className="row">
        <div className="ico-tokenCreate">
          <div className="col-12">
            <h2>{t("Add New ICO Token")}</h2>
          </div>
          <div className="ico-create-form col-12">
            <Formik
              initialValues={{
                form_id: id,
                base_coin: "",
                token_name: "",
                network: "",
                wallet_address: "",
                contract_address: "",
                wallet_private_key: "",
                chain_id: "",
                chain_link: "",
                decimal: "",
                gas_limit: "",
              }}
              validationSchema={Yup.object({
                form_id: Yup.number().required(
                  t("ICO Submit Form ID is required")
                ),

                base_coin: Yup.string().required(t("Base Coin is required")),
                token_name: Yup.string().required(t("Token Name is required")),
                network: Yup.string().required(t("Network is required")),
                wallet_address: Yup.string().required(
                  t("Wallet Address is required")
                ),
                contract_address: Yup.string().required(
                  t("Contract Address is required")
                ),
                wallet_private_key: Yup.string().required(
                  t("Wallet Private Key is required")
                ),
                chain_id: Yup.string().required(t("Chain ID is required")),
                chain_link: Yup.string().required(t("Chain Link is required")),
                decimal: Yup.number().required(t("Decimal is required")),
                gas_limit: Yup.number().required(t("Gas Limit is required")),
              })}
              onSubmit={(values) => {
                launchpadCreateUpdateTokenAction(values, setLoading);
              }}
            >
              {({ errors, touched, setFieldValue }) => (
                <Form className="row">
                  <div className="col-md-6 form-input-div">
                    <label className="ico-label-box" htmlFor="">
                      {t(" Base Coin")}
                    </label>
                    <Field
                      as="select"
                      name="base_coin"
                      className={`ico-input-box ${
                        touched.base_coin && errors.base_coin
                          ? "is-invalid"
                          : ""
                      }`}
                    >
                      <option value="">{"Select Base Coin"}</option>
                      <option value="BND">{"BND"}</option>
                      <option value="ETH">{"ETH"}</option>
                    </Field>
                  </div>
                  <div className="col-md-6 form-input-div">
                    <label className="ico-label-box" htmlFor="">
                      {t("Token Name")}
                    </label>
                    <Field
                      type="text"
                      name="token_name"
                      className={`ico-input-box ${
                        touched.token_name && errors.token_name
                          ? "is-invalid"
                          : ""
                      }`}
                    />
                  </div>
                  <div className="col-md-6 form-input-div">
                    <label className="ico-label-box" htmlFor="">
                      {t("Network")}
                    </label>
                    <Field
                      as="select"
                      name="network"
                      className={`ico-input-box ${
                        touched.network && errors.network ? "is-invalid" : ""
                      }`}
                    >
                      <option value="">{"Select Your Network"}</option>
                      <option value="4">{"ERC20 Token Api"}</option>
                      <option value="5">{"BEP20 Token Api"}</option>
                    </Field>
                  </div>
                  <div className="col-md-6 form-input-div">
                    <label className="ico-label-box" htmlFor="">
                      {t("Wallet Address")}
                    </label>
                    <Field
                      type="text"
                      name="wallet_address"
                      className={`ico-input-box ${
                        touched.wallet_address && errors.wallet_address
                          ? "is-invalid"
                          : ""
                      }`}
                    />
                  </div>
                  <div className="col-md-6 form-input-div">
                    <label className="ico-label-box" htmlFor="">
                      {t("Contract Address")}
                    </label>
                    <Field
                      type="text"
                      name="contract_address"
                      className={`ico-input-box ${
                        touched.contract_address && errors.contract_address
                          ? "is-invalid"
                          : ""
                      }`}
                    />
                  </div>
                  <div className="col-md-6 form-input-div">
                    <label className="ico-label-box" htmlFor="">
                      {t("Wallet Private Key")}
                    </label>
                    <Field
                      type="text"
                      name="wallet_private_key"
                      className={`ico-input-box ${
                        touched.wallet_private_key && errors.wallet_private_key
                          ? "is-invalid"
                          : ""
                      }`}
                    />
                  </div>
                  <div className="col-md-6 form-input-div">
                    <label className="ico-label-box" htmlFor="">
                      {t("Chain Id")}
                    </label>
                    <Field
                      type="text"
                      name="chain_id"
                      className={`ico-input-box ${
                        touched.chain_id && errors.chain_id ? "is-invalid" : ""
                      }`}
                    />
                  </div>
                  <div className="col-md-6 form-input-div">
                    <label className="ico-label-box" htmlFor="">
                      {t("Chain Link")}
                    </label>
                    <Field
                      type="text"
                      name="chain_link"
                      className={`ico-input-box ${
                        touched.chain_link && errors.chain_link
                          ? "is-invalid"
                          : ""
                      }`}
                    />
                  </div>
                  <div className="col-md-6 form-input-div">
                    <label className="ico-label-box" htmlFor="">
                      {t("Decimal")}
                    </label>
                    <Field
                      name="decimal"
                      as="select"
                      className={`ico-input-box ${
                        touched.decimal && errors.decimal ? "is-invalid" : ""
                      }`}
                    >
                      <option value="">{"Select Your Decimal"}</option>
                      <option value={6}>{"6"}</option>
                      <option value={12}>{"12"}</option>
                      <option value={15}>{"15"}</option>
                      <option value={18}>{"18"}</option>
                      <option value={21}>{"21"}</option>
                      <option value={24}>{"24"}</option>
                      <option value={27}>{"27"}</option>
                      <option value={30}>{"30"}</option>
                    </Field>
                  </div>
                  <div className="col-md-6 form-input-div">
                    <label className="ico-label-box" htmlFor="">
                      {t("Gas Limit")}
                    </label>
                    <Field
                      type="number"
                      name="gas_limit"
                      className={`ico-input-box ${
                        touched.gas_limit && errors.gas_limit
                          ? "is-invalid"
                          : ""
                      }`}
                    />
                  </div>

                  <div className="col-md-12 form-input-div">
                    <button type="submit" className="primary-btn">
                      {loading ? t("Loading..") : t("Apply To Launch")}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const { id } = ctx.query;
  await SSRAuthCheck(ctx, "/ico/applied-launchpad");
  return {
    props: {
      id: id,
    },
  };
};
export default TokenCreate;
