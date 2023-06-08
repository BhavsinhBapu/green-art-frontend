import ImageComponent from "components/common/ImageComponent";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { GrFormAdd } from "react-icons/gr";

export default function index() {
  const { t } = useTranslation("common");
  return (
    <section>
      {/* gift card banner start */}
      <div className="bg-card-primary-color py-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="text-45 text-capitalize font-bold gift-font-color">
                {t("Buy & Sell Instantly And Hold Cryptocurrency")}
              </h1>
              <p className="my-3 gift-font-color font-medium text-16">
                {t(
                  "Tradexpro exchange is such a marketplace where people can trade directly with each other"
                )}
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
              <ImageComponent src={"/demo_gift_banner.png"} height={300} />{" "}
            </div>
          </div>
        </div>
      </div>
      {/* gift card banner end */}

      {/* Themed Gift Cards start */}
      <div className="py-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex justify-content-between">
                <div>
                  <h3>Themed Gift Cards</h3>
                  <small>Send a crypto gift card for any occasion</small>
                </div>
                <div>
                  <div className="d-flex align-items-center">
                    <span className="inline-block pr-2">View All Cards</span>
                    <span className="gift-card-arrow">
                      <BsArrowRight />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-3 my-1">
              <img src="/demo_gift_banner.png" alt="" />
            </div>
            <div className="col-lg-3 my-1">
              <img src="/demo_gift_banner.png" alt="" />
            </div>
            <div className="col-lg-3 my-1">
              <img src="/demo_gift_banner.png" alt="" />
            </div>
            <div className="col-lg-3 my-1">
              <img src="/demo_gift_banner.png" alt="" />
            </div>
            <div className="col-lg-3 my-1">
              <img src="/demo_gift_banner.png" alt="" />
            </div>
            <div className="col-lg-3 my-1">
              <img src="/demo_gift_banner.png" alt="" />
            </div>
            <div className="col-lg-3 my-1">
              <img src="/demo_gift_banner.png" alt="" />
            </div>
            <div className="col-lg-3 my-1">
              <img src="/demo_gift_banner.png" alt="" />
            </div>
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
        </div>
      </div>
      {/* Themed Gift Cards end */}

      {/* my gift card  start*/}
      <div className="container pb-80">
        <div className="d-flex justify-content-between">
          <div>
            <h3>My Cards</h3>
          </div>
          <div>
            <div className="d-flex align-items-center">
              <span className="inline-block pr-2">All(0)</span>
              <span className="gift-card-arrow">
                <BsArrowRight />
              </span>
            </div>
          </div>
        </div>
        <div className="mt-3 no-gift-card">No Gift Card Avilable</div>
      </div>
      {/* my gift card  end*/}

      {/* feature section start*/}
      <div className="bg-card-primary-color py-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="text-45 text-capitalize font-bold gift-font-color">
                {t("Buy & Sell Instantly And Hold Cryptocurrency")}
              </h1>
              <p className="my-3 gift-font-color font-medium text-16">
                {t(
                  "Tradexpro exchange is such a marketplace where people can trade directly with each other"
                )}
              </p>
              <button className="gift-btn bg-primary-color border-primary-color mt-40">
                {t("Learn More")} <BsArrowRight />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* feature section end*/}

      {/* faq section start*/}
      <div className="py-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex justify-content-between">
                <div>
                  <h3>Faq</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-6 my-2">
              <div id="accordionExample">
                <div>
                  <div id="headingThree">
                    <button
                      className="collapsed d-flex align-items-center gap-15 w-full bg-transparent border-0 text-primary"
                      type="button"
                      // onClick={faqArrow}
                      data-toggle="collapse"
                      data-target="#collapseThree1"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <span
                        className="gift-card-add-btn"
                      >
                        <GrFormAdd />
                      </span>
                      What is Gift Card?
                    </button>
                  </div>
                  <div
                    id="collapseThree1"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div className="p-3">Answer</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 my-2">
              <div id="accordionExample">
                <div>
                  <div id="headingThree">
                    <button
                      className="collapsed d-flex align-items-center gap-15 w-full bg-transparent border-0 text-primary"
                      type="button"
                      // onClick={faqArrow}
                      data-toggle="collapse"
                      data-target="#collapseThree2"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <span
                        className="gift-card-add-btn"
                        style={{ color: "white" }}
                      >
                        <GrFormAdd />
                      </span>
                      What is Gift Card?
                    </button>
                  </div>
                  <div
                    id="collapseThree2"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div className="p-3">Answer</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 my-2">
              <div id="accordionExample">
                <div>
                  <div id="headingThree">
                    <button
                      className="collapsed d-flex align-items-center gap-15 w-full bg-transparent border-0 text-primary"
                      type="button"
                      // onClick={faqArrow}
                      data-toggle="collapse"
                      data-target="#collapseThree3"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <span
                        className="gift-card-add-btn"
                        style={{ color: "white" }}
                      >
                        <GrFormAdd />
                      </span>
                      What is Gift Card?
                    </button>
                  </div>
                  <div
                    id="collapseThree3"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div className="p-3">Answer</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 my-2">
              <div id="accordionExample">
                <div>
                  <div id="headingThree">
                    <button
                      className="collapsed d-flex align-items-center gap-15 w-full bg-transparent border-0 text-primary"
                      type="button"
                      // onClick={faqArrow}
                      data-toggle="collapse"
                      data-target="#collapseThree4"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <span
                        className="gift-card-add-btn"
                        style={{ color: "white" }}
                      >
                        <GrFormAdd />
                      </span>
                      What is Gift Card?
                    </button>
                  </div>
                  <div
                    id="collapseThree4"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div className="p-3">Answer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* faq section end*/}
    </section>
  );
}
