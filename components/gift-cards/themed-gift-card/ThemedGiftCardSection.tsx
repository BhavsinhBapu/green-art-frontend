import useTranslation from "next-translate/useTranslation";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
type item = {
  banner: string;
};

export default function ThemedGiftCardSection({ giftCards }: any) {
  const { t } = useTranslation();
  return (
    <div className="py-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex justify-content-between">
              <div>
                <h3>{t("Themed Gift Cards")}</h3>
                <small>{t("Send a crypto gift card for any occasion")}</small>
              </div>
              <div>
                <div className="d-flex align-items-center">
                  <span className="inline-block pr-2">
                    {t("View All Cards")}
                  </span>
                  <span className="gift-card-arrow">
                    <BsArrowRight />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {giftCards?.length > 0 ? (
          <>
            <div className="row mt-3">
              {giftCards.map((item: item, index: number) => (
                <div className="col-lg-3 my-1" key={index}>
                  <img src={item.banner || "/demo_gift_banner.png"} alt="" />
                </div>
              ))}
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <div className="d-flex justify-content-center align-items-center">
                  <button className="gift-btn bg-primary-color border-primary-color">
                    {t("View More Theme Gift Cards")} <BsArrowRight />{" "}
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="mt-3 no-gift-card">No Gift Card Avilable</div>
        )}
      </div>
    </div>
  );
}
