import useTranslation from "next-translate/useTranslation";
import React from "react";

const TokenCreate = () => {
  const { t } = useTranslation("common");

  return (
    <div className="container">
      <div className="row">
        <div className="ico-tokenCreate">
          <div className="col-12">
            <h2>Add New ICO Token</h2>
          </div>
          <div className="ico-create-form col-12">
            <form action="" className="row">
              <div className="col-md-6 form-input-div">
                <label className="ico-label-box" htmlFor="">
                  {t(" ICO Submit Form ID")}
                </label>
                <input type="text" className="ico-input-box" />
              </div>
              <div className="col-md-6 form-input-div">
                <label className="ico-label-box" htmlFor="">
                  {t(" Base Coin")}
                </label>
                <select name="" className="ico-input-box">
                  <option value="">{"Select Base Coin"}</option>
                  <option value="BTC">{"BTC"}</option>
                  <option value="ETC">{"ETC"}</option>
                  <option value="BNB">{"BNB"}</option>
                </select>
              </div>
              <div className="col-md-6 form-input-div">
                <label className="ico-label-box" htmlFor="">
                  {t("Token Name")}
                </label>
                <input type="text" className="ico-input-box" />
              </div>
              <div className="col-md-6 form-input-div">
                <label className="ico-label-box" htmlFor="">
                  {t("Network")}
                </label>
                <select name="" className="ico-input-box">
                  <option value="">{"Select Your Network"}</option>
                  <option value="4">{"ERC20 Token Api"}</option>
                  <option value="5">{"BEP20 Token Api"}</option>
                </select>
              </div>
              <div className="col-md-6 form-input-div">
                <label className="ico-label-box" htmlFor="">
                  {t("Wallet Address")}
                </label>
                <input type="text" className="ico-input-box" />
              </div>
              <div className="col-md-6 form-input-div">
                <label className="ico-label-box" htmlFor="">
                  {t("Contract Address")}
                </label>
                <input type="text" className="ico-input-box" />
              </div>
              <div className="col-md-6 form-input-div">
                <label className="ico-label-box" htmlFor="">
                  {t("Wallet Private Key")}
                </label>
                <input type="text" className="ico-input-box" />
              </div>
              <div className="col-md-6 form-input-div">
                <label className="ico-label-box" htmlFor="">
                  {t("Chain Id")}
                </label>
                <input type="text" className="ico-input-box" />
              </div>
              <div className="col-md-6 form-input-div">
                <label className="ico-label-box" htmlFor="">
                  {t("Chain Link")}
                </label>
                <input type="text" className="ico-input-box" />
              </div>
              <div className="col-md-6 form-input-div">
                <label className="ico-label-box" htmlFor="">
                  {t("Decimal")}
                </label>
                <select name="" className="ico-input-box">
                  <option value="">{"Select Your Decimal"}</option>
                  <option value="6">{"6"}</option>
                  <option value="12">{"12"}</option>
                  <option value="15">{"15"}</option>
                  <option value="18">{"18"}</option>
                  <option value="21">{"21"}</option>
                  <option value="24">{"24"}</option>
                  <option value="27">{"27"}</option>
                  <option value="30">{"30"}</option>
                </select>
              </div>
              <div className="col-md-6 form-input-div">
                <label className="ico-label-box" htmlFor="">
                  {t("Gas Limit")}
                </label>
                <input type="text" className="ico-input-box" />
              </div>

              <div className="col-md-12 form-input-div">
                <button className="primary-btn">Apply To Launch</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenCreate;
