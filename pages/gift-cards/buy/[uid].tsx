import { CUstomSelect } from "components/common/CUstomSelect";
import ImageComponent from "components/common/ImageComponent";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import { BsGiftFill } from "react-icons/bs";
import { RiCreativeCommonsZeroFill } from "react-icons/ri";

export default function index() {
  const { t } = useTranslation("common");
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <section className="main-bg">
      <div className="bg-primary-color">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-center">
                <h4>{t("Buy & Sell Instantly And Hold")}</h4>
                <h4 className="font-normal mt-3">
                  {t(
                    "Tradexpro exchange is such a marketplace where people can trade directly with each other"
                  )}
                </h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex justify-content-between align-items-center h-full">
                <div className="text-center">
                  <div className="gift-card-buy-icon">
                    <RiCreativeCommonsZeroFill size={50} />
                  </div>
                  <h4 className="font-normal">{t("Zero Fees")}</h4>
                </div>
                <div className="text-center">
                  <div className="gift-card-buy-icon">
                    <RiCreativeCommonsZeroFill size={50} />
                  </div>
                  <h4 className="font-normal">{t("270+ Tokens")}</h4>
                </div>
                <div className="text-center">
                  <div className="gift-card-buy-icon">
                    <RiCreativeCommonsZeroFill size={50} />
                  </div>
                  <h4 className="font-normal">{t("Instant Transfer")}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="py-80">
          <div className="row">
            <div className="col-lg-12">
              <h4 className="font-normal gift-card-inner-buy-tab">
                Buy 1 Card
              </h4>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-5">
              <div className="gift-card-banner-section-bottom-border">
                <div className="relative">
                  <ImageComponent src={"/demo_gift_banner.png"} height={300} />{" "}
                  <div>
                    <div className="d-flex gap-10 buy-absolute-btn">
                      <BsGiftFill size={22} />
                      <h4>0 BTC</h4>
                    </div>
                  </div>
                </div>
                <div className="mt-5 mb-4">
                  <h3 className="mb-3">{t("My First Crypto")}</h3>
                  <h5 className="font-normal">
                    {t("Welcome to the exciting world crypto!")}
                  </h5>
                </div>
              </div>

              <div className="my-4 d-flex gap-10 text-primary-color">
                <span>
                  <BsGiftFill size={22} />
                </span>
                <h4 className="text-primary-color">{t("Gift Card Store")}</h4>
              </div>

              {/* al gift cards  start*/}
              <div className="row buy-all-gift-cards">
                <div className="col-lg-4 my-1">
                  <div>
                    <ImageComponent src={"/demo_gift_banner.png"} />
                  </div>
                </div>
                <div className="col-lg-4 my-1">
                  <ImageComponent src={"/demo_gift_banner.png"} />
                </div>
                <div className="col-lg-4 my-1">
                  <ImageComponent src={"/demo_gift_banner.png"} />
                </div>

                <div className="col-lg-4 my-1">
                  <div>
                    <ImageComponent src={"/demo_gift_banner.png"} />
                  </div>
                </div>
                <div className="col-lg-4 my-1">
                  <ImageComponent src={"/demo_gift_banner.png"} />
                </div>
                <div className="col-lg-4 my-1">
                  <ImageComponent src={"/demo_gift_banner.png"} />
                </div>

                <div className="col-lg-4 my-1">
                  <div>
                    <ImageComponent src={"/demo_gift_banner.png"} />
                  </div>
                </div>
                <div className="col-lg-4 my-1">
                  <ImageComponent src={"/demo_gift_banner.png"} />
                </div>
                <div className="col-lg-4 my-1">
                  <ImageComponent src={"/demo_gift_banner.png"} />
                </div>

                <div className="col-lg-4 my-1">
                  <div>
                    <ImageComponent src={"/demo_gift_banner.png"} />
                  </div>
                </div>
                <div className="col-lg-4 my-1">
                  <ImageComponent src={"/demo_gift_banner.png"} />
                </div>
                <div className="col-lg-4 my-1">
                  <ImageComponent src={"/demo_gift_banner.png"} />
                </div>

                <div className="col-lg-4 my-1">
                  <div>
                    <ImageComponent src={"/demo_gift_banner.png"} />
                  </div>
                </div>
                <div className="col-lg-4 my-1">
                  <ImageComponent src={"/demo_gift_banner.png"} />
                </div>
                <div className="col-lg-4 my-1">
                  <ImageComponent src={"/demo_gift_banner.png"} />
                </div>
              </div>
              {/* al gift cards  start*/}
            </div>
            <div className="col-lg-7">
              <div>
                <div className="col-lg-12">
                  <div className="form-group p2pSelectFilter">
                    <h6 className="gift-buy-input-label font-normal mb-3 border-bottom-dashed">
                      {" "}
                      Buy
                    </h6>
                    <CUstomSelect options={options} classname={"buy-amount-select-section"}/>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group p2pSelectFilter">
                    <h6 className="gift-buy-input-label font-normal mb-3 border-bottom-dashed">
                      Amount
                    </h6>
                    <div className="d-flex buy-input-bg py-2 rounded">
                      <input type="text" placeholder="Enter Amount" className="px-3 w-full bg-transparent border-none buy-border-right" />
                      <CUstomSelect
                        options={options}
                        classname={"buy-amount-select-section"}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 mb-5">
                  <div className="form-group p2pSelectFilter">
                    <h6 className="gift-buy-input-label font-normal mb-3 border-bottom-dashed">
                      Available
                    </h6>
                    <div className="buy-input-bg p-3 rounded">
                      <div className="d-flex gap-20 mb-3">
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className="checkbox-w-25"
                        />
                        <div className="d-flex justify-content-between w-full">
                          <h6 className="font-normal"> Spot Wallet</h6>
                          <h6 className="font-normal"> 0 BTC</h6>
                        </div>
                      </div>
                      <div className="d-flex gap-20">
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className="checkbox-w-25"
                        />
                        <div className="d-flex justify-content-between w-full">
                          <h6 className="font-normal"> P2P Wallet</h6>
                          <h6 className="font-normal"> 0 BTC</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="row mb-2">
                        <div className="col-lg-8">
                          <p className="font-normal">Fees</p>
                        </div>
                        <div className="col-lg-4">
                          <p className="font-normal">0</p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-8">
                          <h5>Total Amount</h5>
                        </div>
                        <div className="col-lg-4">
                          <h5>0 BTC</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-4">
                      <a href="#" className="h-full d-flex justify-content-center align-items-center text-white bg-primary-color rounded">Buy</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
