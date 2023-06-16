import ImageComponent from "components/common/ImageComponent";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import { BsGiftFill } from "react-icons/bs";

export default function MyCardModal({ setIsModalOpen, giftCardData }: any) {
    const {t} = useTranslation();
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
                    <h4>{`${parseFloat(giftCardData?.amount)} BTC`}</h4>
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
          </div>
        </div>

        <a
          href="#"
          className="gift-card-modal__close text-45"
          onClick={() => setIsModalOpen(false)}
        >
          &times;
        </a>
      </div>
    </div>
  );
}
