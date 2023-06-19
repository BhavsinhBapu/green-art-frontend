import ImageComponent from "components/common/ImageComponent";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import { BsGiftFill } from "react-icons/bs";

export default function MyCardModal({
  setIsModalOpen,
  giftCardData,
  sendCryptoCardModalHandler,
}: any) {
  const { t } = useTranslation();
  return (
    <div id="demo-modal" className="gift-card-modal">
      <div className="gift-card-modal__content p-5">
        <h2>Gift Card Details</h2>

        <div className="row my-5">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="">
              <div className="relative">
                <ImageComponent
                  src={giftCardData?.banner?.image || "/demo_gift_banner.png"}
                  height={300}
                />{" "}
                <div>
                  <div className="d-flex gap-10 buy-absolute-btn">
                    <BsGiftFill size={22} />
                    <h4>{`${parseFloat(giftCardData?.amount)} ${giftCardData?.coin_type}`}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <h3 className="mb-3">{t(giftCardData?.banner?.title)}</h3>
            <h5 className="font-normal">
              {t(giftCardData?.banner?.sub_title)}
            </h5>
            <div className="mt-3">
              <p>
                <strong>Coin Type: </strong> {t(giftCardData?.coin_type)}
              </p>
              <p>
                <strong>Category: </strong>{" "}
                {t(giftCardData?.banner?.category?.name)}
              </p>
              {giftCardData?.lock && (
                <p>
                  <strong>Lock: </strong> {t(giftCardData?.lock)}
                </p>
              )}

              {giftCardData?.wallet_type && (
                <p>
                  <strong>Wallet Type: </strong> {t(giftCardData?.wallet_type)}
                </p>
              )}

              <p>
                <strong>Status: </strong> {t(giftCardData?.status ?? "Active")}
              </p>
            </div>
          </div>
        </div>
        {giftCardData._status == 1 && (
          <div className="text-right">
            <button
              type="button"
              className="btn bg-primary-color capitalize"
              onClick={sendCryptoCardModalHandler}
            >
              {t("Send crypto gift card")}
            </button>
          </div>
        )}

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
