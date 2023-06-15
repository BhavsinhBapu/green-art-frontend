import ImageComponent from "components/common/ImageComponent";
import useTranslation from "next-translate/useTranslation";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import GiftCardModal from "../modal/GiftCardModal";
import request from "lib/request";
import { toast } from "react-toastify";

export default function MainBannerSection({
  header,
  description,
  banner,
}: {
  header: string;
  description: string;
  banner: string;
}) {
  const [activeBtn, setActiveBtn] = useState("redeem");
  const [code, setCode] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [giftCardData, setGiftCardData] = useState({});
  const [error, setError] = useState("")
  const { t } = useTranslation();

  const handleGiftCard = async () => {
    if (!code) return;
    const { data } = await request.get(`gift-card/check-card?code=${code}`);
    console.log("data", data);
    if (!data.success) {
      setGiftCardData({});
      setError(data.message)
      return;
    }
    setGiftCardData(data.data);
    setIsModalOpen(true);
  };

  return (
    <>
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
                  <span
                    className={`pointer btn w-none ${
                      activeBtn === "redeem" ? " bg-primary-gift" : "block"
                    }`}
                    onClick={() => setActiveBtn("redeem")}
                  >
                    {t("Redeem to crypto")}{" "}
                  </span>
                  <span
                    className={`btn w-none pointer ${
                      activeBtn === "add" ? " bg-primary-gift" : "block"
                    }`}
                    onClick={() => setActiveBtn("add")}
                  >
                    {t("Add Card")}
                  </span>
                  <span
                    className={`pointer btn w-none ${
                      activeBtn === "check" ? " bg-primary-gift" : "block"
                    }`}
                    onClick={() => setActiveBtn("check")}
                  >
                    {t("Check Card")}
                  </span>
                </div>
                <div className="gift-inner-card-input-section">
                  <div className="w-full">
                    <label className="gift-font-color">Redemption Code</label>
                    <input
                      type="text"
                      className="gift-inner-card-input"
                      onChange={(e) => setCode(e.target.value)}
                    />
                  </div>
                  <button
                    className="gift-btn capitalize"
                    data-toggle="modal"
                    data-target="#giftCardModal"
                    disabled={code ? false : true}
                    onClick={handleGiftCard}
                  >
                    {t(activeBtn)}
                  </button>
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
     
        <GiftCardModal activeBtn={activeBtn} setIsModalOpen={setIsModalOpen} giftCardData={giftCardData} error={error}/>
      
    </>
  );
}
