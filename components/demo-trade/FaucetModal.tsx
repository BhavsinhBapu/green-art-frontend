import useTranslation from "next-translate/useTranslation";
import React from "react";

export default function FaucetModal({ setIsModalOpen }: any) {
  const { t } = useTranslation();
  return (
    <div id="demo-modal" className="gift-card-modal">
      <div className="faucet-modal__content p-5">
        <h2>{t(`Coin`)}</h2>
        <div></div>
        <div>
          <p className="text-16">{t("Tips:")}</p>
          <p className="text-16">
            If current asset value exceeds 1000 U, it cannot be claimed again.
            You can only receive assets worth 1,000 U each time and each asset
            claim requires a 72-hour interval before it can be claimed again.
          </p>
        </div>
        <div className="text-center">
          <button type="button" className="btn bg-primary-color capitalize">
            {t("Add Assests")}
          </button>
        </div>
        <span
          className="gift-card-modal__close text-45 pointer"
          onClick={() => setIsModalOpen(false)}
        >
          &times;
        </span>
      </div>
    </div>
  );
}
