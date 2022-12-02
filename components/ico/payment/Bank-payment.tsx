import { BANK_DEPOSIT } from "helpers/core-constants";
import useTranslation from "next-translate/useTranslation";
import React, { useRef, useState } from "react";
import { TokenBuyIcoBankAction } from "state/actions/launchpad";

const BankPayment = ({ pageInfo, initialData }: any) => {
  const { t } = useTranslation("common");
  const [loading, setLoading] = useState(false);
  const [doc, setDoc] = useState(null);
  const [data, setData] = useState<any>({
    amount: 0,
    bank_id: null,
  });
  const inputRef = useRef(null);
  const handleFileChange = (event: any) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
    event;
    setDoc(event.target.files[0]);
  };
  const handleClick = () => {
    // 👇️ open file input box on click of other element
    //@ts-ignore
    inputRef.current.click();
  };
  return (
    <div className="w-100 ico-tokenCreate row">
      <div className="col-md-6 form-input-div">
        <label className="ico-label-box" htmlFor="">
          {t("Amount")}
        </label>
        <input
          type="number"
          name="amount"
          value={data.amount}
          placeholder="amount"
          required
          className={`ico-input-box`}
          onChange={(e: any) => {
            setData({
              ...data,
              amount: e.target.value,
            });
          }}
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
            setData({
              ...data,
              bank_id: e.target.value,
            });
          }}
        >
          <option value="">{t("Select currency")}</option>
          {pageInfo?.bank?.map((item: any, index: any) => (
            <option value={item.id} key={index}>
              {item?.bank_name}
            </option>
          ))}
        </select>
      </div>
      <div className="col-md-12 form-input-div">
        <div className="file-upload-wrapper">
          {/* @ts-ignore */}
          <label htmlFor="upload-photo" onClick={handleClick}>
            {/* @ts-ignore */}
            {doc ? doc.name : t("Browse")}
          </label>
          <input
            style={{ display: "none" }}
            ref={inputRef}
            type="file"
            onChange={handleFileChange}
          />
        </div>
      </div>
      <button
        disabled={!doc || !data.bank_id || !data.amount}
        className="primary-btn-outline w-100"
        type="button"
        onClick={() => {
          TokenBuyIcoBankAction(
            initialData,
            setLoading,
            doc,
            data.bank_id,
            data.amount,
            BANK_DEPOSIT,
            pageInfo.ref
          );
        }}
      >
        {t("Make Payment")}
      </button>
    </div>
  );
};

export default BankPayment;
