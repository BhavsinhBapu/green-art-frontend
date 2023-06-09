import React, { useState } from "react";
import { CUstomSelect } from "components/common/CUstomSelect";
import ImageComponent from "components/common/ImageComponent";
import useTranslation from "next-translate/useTranslation";
import { BiTransferAlt } from "react-icons/bi";
import { BsGiftFill } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";
import { HiOutlineRefresh } from "react-icons/hi";
import { RiCreativeCommonsZeroFill } from "react-icons/ri";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
export default function index() {
  const [isSingle, setIsSingle] = useState(true);
  const { t } = useTranslation("common");

  const buySingleOrBulkHandler = (value: string) => {
    if (value === "single") {
      setIsSingle(true);
      return;
    }
    setIsSingle(false);
  };

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
              <div className="d-flex justify-content-between align-items-center h-full gift-card-buy-banner-margin">
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
              <div className="d-flex gap-20">
                <h4
                  className={`font-normal gift-card-inner-buy-tab pointer ${
                    isSingle && "gift-card-inner-buy-tab-active"
                  }`}
                  onClick={() => buySingleOrBulkHandler("single")}
                >
                  Buy 1 Card
                </h4>
                <div className="d-flex">
                  <h4
                    className={`font-normal gift-card-inner-buy-tab pointer ${
                      !isSingle && "gift-card-inner-buy-tab-active"
                    } mr-2`}
                    onClick={() => buySingleOrBulkHandler("bulk")}
                  >
                    Bulk Create
                  </h4>
                  <div className="d-flex">
                    <span className="buy-triangle"></span>
                    <span className="buy-trinagle-btn">Business</span>
                  </div>
                </div>
              </div>
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
                <div className="col-lg-4 col-md-4 col-6 my-1">
                  <div>
                    <ImageComponent src={"/demo_gift_banner.png"} />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-6 my-1">
                  <ImageComponent src={"/demo_gift_banner.png"} />
                </div>
                <div className="col-lg-4 col-md-4 col-6 my-1">
                  <ImageComponent src={"/demo_gift_banner.png"} />
                </div>

                <div className="col-lg-4 col-md-4 col-6 my-1">
                  <div>
                    <ImageComponent src={"/demo_gift_banner.png"} />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-6 my-1">
                  <ImageComponent src={"/demo_gift_banner.png"} />
                </div>
                <div className="col-lg-4 col-md-4 col-6 my-1">
                  <ImageComponent src={"/demo_gift_banner.png"} />
                </div>

                <div className="col-lg-4 col-md-4 col-6 my-1">
                  <div>
                    <ImageComponent src={"/demo_gift_banner.png"} />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-6 my-1">
                  <ImageComponent src={"/demo_gift_banner.png"} />
                </div>
                <div className="col-lg-4 col-md-4 col-6 my-1">
                  <ImageComponent src={"/demo_gift_banner.png"} />
                </div>

                <div className="col-lg-4 col-md-4 col-6 my-1">
                  <div>
                    <ImageComponent src={"/demo_gift_banner.png"} />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-6 my-1">
                  <ImageComponent src={"/demo_gift_banner.png"} />
                </div>
                <div className="col-lg-4 col-md-4 col-6 my-1">
                  <ImageComponent src={"/demo_gift_banner.png"} />
                </div>

                <div className="col-lg-4 col-md-4 col-6 my-1">
                  <div>
                    <ImageComponent src={"/demo_gift_banner.png"} />
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-6 my-1">
                  <ImageComponent src={"/demo_gift_banner.png"} />
                </div>
                <div className="col-lg-4 col-md-4 col-6 my-1">
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
                    <CUstomSelect
                      options={options}
                      classname={"buy-amount-select-section"}
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group p2pSelectFilter">
                    <h6 className="gift-buy-input-label font-normal mb-3 border-bottom-dashed">
                      Amount
                    </h6>
                    <div className="d-flex buy-input-bg py-2 rounded">
                      <input
                        type="text"
                        placeholder="Enter Amount"
                        className="px-3 w-full bg-transparent border-none buy-border-right"
                      />
                      <CUstomSelect
                        options={options}
                        classname={
                          "buy-amount-select-section buy-amount-select-section-width"
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group p2pSelectFilter">
                    <div className="mb-3 d-flex justify-content-between">
                      <div className="d-flex align-items-center gap-20">
                        <h6 className="gift-buy-input-label font-normal  border-bottom-dashed">
                          Available
                        </h6>
                        <div className="text-primary-color">
                          <h6 className="gift-buy-input-label mr-2">0 BTC</h6>
                          <span>
                            <HiOutlineRefresh size={20} />
                          </span>
                        </div>
                      </div>
                      <div className=" text-primary-color">
                        <h6 className="gift-buy-input-label font-normal text-primary-color mr-2">
                          Transfer
                        </h6>
                        <span>
                          <BiTransferAlt size={20} />
                        </span>
                      </div>
                    </div>

                    <div className="buy-input-bg p-3 rounded buy-checkbox">
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

                {/*quantity for bulk upload only start */}
                {!isSingle && (
                  <div className="col-lg-12">
                    <div className="form-group p2pSelectFilter">
                      <h6 className="gift-buy-input-label font-normal mb-3 border-bottom-dashed">
                        Quantity
                      </h6>
                      <div className="d-flex buy-input-bg py-2 rounded">
                        <input
                          type="text"
                          placeholder="Enter Quantity"
                          className="px-3 w-full bg-transparent border-none buy-border-right"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/*quantity for bulk upload only end */}

                <div className="col-lg-12">
                  <div className="form-group p2pSelectFilter">
                    <h6 className="gift-buy-input-label font-normal mb-3">
                      Note (Optional)
                    </h6>
                    <div className="d-flex buy-input-bg py-2 rounded">
                      <textarea
                        placeholder="Enter note for this order"
                        className="px-3 w-full bg-transparent border-none"
                        rows={4}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mb-4">
                  <div className="form-group p2pSelectFilter">
                    <div className=" d-flex align-items-center gap-10">
                      <h6 className="gift-buy-input-label font-normal  border-bottom-dashed">
                        Lock
                      </h6>

                      <label className="gift-card-buy-switch mb-0">
                        <input type="checkbox" />
                        <span className="gift-card-buy-slider gift-card-buy"></span>
                      </label>
                    </div>

                    <div>
                      <small>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's
                      </small>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="row mb-2">
                        <div className="col-lg-8 col-md-8 col-6">
                          <p className="font-normal">Fees</p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-6">
                          <p className="font-normal">0</p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-8 col-md-8 col-6">
                          <h5>Total Amount</h5>
                        </div>
                        <div className="col-lg-4 col-md-4 col-6">
                          <h5>0 BTC</h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-4 ">
                      <a
                        href="#"
                        className="h-full d-flex justify-content-center align-items-center text-white bg-primary-color rounded gift-card-buy-btn"
                      >
                        Buy
                      </a>
                    </div>
                  </div>
                </div>
                {/* only for single buy start */}
                {isSingle && (
                  <div className="col-lg-12 my-4 text-primary-color">
                    <div className="d-flex align-items-center">
                      <h5 className="font-normal text-primary-color inline-block">
                        <u>Buy multiple gift cards</u>{" "}
                      </h5>
                      <span>
                        <FaAngleRight size={15} />
                      </span>
                    </div>
                  </div>
                )}

                {/* only for single buy start */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
