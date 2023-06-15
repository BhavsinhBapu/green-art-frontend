import ImageComponent from "components/common/ImageComponent";
import useTranslation from "next-translate/useTranslation";
import React, { useEffect } from "react";
import { BsGiftFill } from "react-icons/bs";

export default function GiftCardModal({
  activeBtn,
  setIsModalOpen,
  giftCardData,
  error,
}: any) {
  const { t } = useTranslation();
  console.log("Modal");
  console.log("Modal type");
  useEffect(() => {
    console.log("Modal useEffect");
    console.log("Modal type useEffect");
  }, []);

  // if (Object.keys(giftCardData).length === 0) return;
  console.log(Object.keys(giftCardData).length);

  return (
    <div
      className="modal fade"
      id="giftCardModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Gift Card
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => setIsModalOpen(false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body px-3">
            {Object.keys(giftCardData).length === 0 ? (
              <h4 className="text-center">{error}</h4>
            ) : (
              <div className="row">
                <div className="col-6">
                  <div className="">
                    <div className="relative">
                      <ImageComponent
                        src={
                          giftCardData?.banner?.banner ||
                          "/demo_gift_banner.png"
                        }
                        height={300}
                      />{" "}
                      <div>
                        <div className="d-flex gap-10 buy-absolute-btn">
                          <BsGiftFill size={22} />
                          <h4>{`${parseFloat(
                            giftCardData?.card?.amount
                          )} BTC`}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <h3 className="mb-3">{t(giftCardData?.banner?.title)}</h3>
                  <h5 className="font-normal">
                    {t(giftCardData?.banner?.sub_title)}
                  </h5>
                 
                </div>
              </div>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
            {activeBtn !== "check" && Object.keys(giftCardData).length !== 0 && (
              <button type="button" className="btn btn-primary capitalize">
                {t(activeBtn)}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
