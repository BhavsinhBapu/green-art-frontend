import ImageComponent from 'components/common/ImageComponent'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

export default function MainBannerSection({
    header,
    description,
    banner,
  }: {
    header: string;
    description: string;
    banner: string;
  }) {
    const {t} = useTranslation();
  return (
    <div className="bg-card-primary-color py-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="text-45 text-capitalize font-bold gift-font-color">
                {t(header)}
              </h1>
              <p className="my-3 gift-font-color font-medium text-16">
                {t(description)}
              </p>
              <button className="gift-btn">
                {t("Send a crypto gift card")} <BsArrowRight />{" "}
              </button>
              <div className="gift-inner-card my-5 gift-font-color">
                <div className="gift-inner-card-btns">
                  <button className="btn bg-primary-gift w-none">
                    {t("Redeem to crypto")}{" "}
                  </button>
                  <span className="block">{t("Add Card")}</span>
                  <span className="block">{t("Check Card")}</span>
                </div>
                <div className="gift-inner-card-input-section">
                  <div className="w-full">
                    <label className="gift-font-color">Redemption Code</label>
                    <input type="text" className="gift-inner-card-input" />
                  </div>
                  <button className="gift-btn">{t("Redeem")}</button>
                </div>
                <p className="gift-font-color line-16 my-3 text-12">
                  Tradexpro exchange is such a marketplace where people can
                  trade
                </p>
                <p className="gift-font-color line-16 text-12">
                  Tradexpro exchange is such a marketplace where people can
                  trade directly with each other Tradexpro exchange is such a
                  marketplace where people can trade
                </p>
              </div>
            </div>
            <div className="col-lg-6 grid">
              <ImageComponent
                src={banner || "/demo_gift_banner.png"}
                height={300}
              />{" "}
            </div>
          </div>
        </div>
      </div>
  )
}
