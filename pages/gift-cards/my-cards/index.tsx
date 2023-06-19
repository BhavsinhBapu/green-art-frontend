import { CUstomSelect } from "components/common/CUstomSelect";
import ImageComponent from "components/common/ImageComponent";
import MyCardModal from "components/gift-cards/modal/MyCardModal";
import SendCryptoCardModal from "components/gift-cards/modal/SendCryptoCardModal";
import request from "lib/request";
import useTranslation from "next-translate/useTranslation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const options = [
  { value: "1", label: "Active" },
  { value: "2", label: "Redeemed" },
  { value: "3", label: "Transfared" },
  { value: "4", label: "Trading" },
  { value: "5", label: "Locked" },
];
const limit = 2;
export default function index() {
  const { t } = useTranslation();
  const [myCards, setMyCards] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [giftCardData, setGiftCardData] = useState({});
  const [activeStatus, setActiveStatus] = useState("1");
  const [isSendCryptoCardModalOpen, setIsSendCryptoCardModalOpen] =
    useState(false);

  useEffect(() => {
    getMyCards("1", limit, 1);
  }, []);

  const myCardHandle = (cardData: any) => {
    console.log("adt", cardData);
    setGiftCardData(cardData);
    setIsModalOpen(true);
  };

  const sendCryptoCardModalHandler = () => {
    setIsSendCryptoCardModalOpen(true);
    setIsModalOpen(false);
  };

  const getMyCards = async (status: any, limit: any, page: any) => {
    const { data } = await request.get(
      `/gift-card/my-gift-card-list?status=${status}&limit=${limit}&page=${page}`
    );
    if (!data.success) {
      toast.error(data.message);
      return;
    }
    setMyCards(data.data);
  };

  const handleStatus = (event: any) => {
    console.log("event", event);
    getMyCards(event.value, limit, 1);
    setActiveStatus(event.value);
  };

  const LinkTopaginationString = (links: any) => {
    console.log("sfsf", myCards, links);
    if (links.url === null) return;
    if (links.label === myCards.current_page.toString()) return;
    const queryString = links.url.split("?")[1];
    const params = new URLSearchParams(queryString);
    const pageValue = params.get("page");
    getMyCards(activeStatus, limit, pageValue);
  };

  return (
    <section>
      {/* gift card banner start */}
      <div className="bg-card-primary-color py-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <div>
                <h1 className="text-45 text-capitalize font-bold gift-font-color">
                  {t("My Cards")}
                </h1>
                <p className="my-3 gift-font-color font-medium text-16">
                  {t(
                    "Tradexpro exchange is such a marketplace where people can trade directly with each other"
                  )}
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
            <div className="col-lg-9 col-md-9 col-6">
              <div>
                <h3>My Cards</h3>
                <small>Send a crypto gift card for any occasion</small>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-6">
              <div className="d-flex align-items-center gap-10 border px-2 rounded ">
                <span>
                  <b>Status:</b>{" "}
                </span>
                <CUstomSelect
                  options={options}
                  classname={"themed-category-select-section w-full"}
                  handleFunction={handleStatus}
                  defaultValue={options[0]}
                />
              </div>
            </div>
          </div>
          {myCards?.data?.length > 0 ? (
            <>
              <div className="row mt-3">
                {myCards?.data?.map((item: any, index: number) => (
                  <div className="col-lg-4 my-3 pointer" key={index}>
                    <div
                      className="single-card h-full"
                      onClick={() => myCardHandle(item)}
                    >
                      <ImageComponent
                        src={item.banner.image || "/demo_gift_banner.png"}
                        height={300}
                      />
                      <div className="mt-4">
                        <h4>{t(item.banner.title)}</h4>
                        <p>{t(item.banner.sub_title)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pagination-wrapper" id="assetBalances_paginate">
                <span>
                  {myCards?.links?.map((link: any, index: number) =>
                    link.label === "&laquo; Previous" ? (
                      <a
                        className="paginate-button"
                        onClick={() => LinkTopaginationString(link)}
                        key={index}
                      >
                        <i className="fa fa-angle-left"></i>
                      </a>
                    ) : link.label === "Next &raquo;" ? (
                      <a
                        className="paginate-button"
                        onClick={() => LinkTopaginationString(link)}
                        key={index}
                      >
                        <i className="fa fa-angle-right"></i>
                      </a>
                    ) : (
                      <a
                        className={`paginate_button paginate-number ${
                          link.active === true && "text-warning"
                        }`}
                        aria-controls="assetBalances"
                        data-dt-idx="1"
                        onClick={() => LinkTopaginationString(link)}
                        key={index}
                      >
                        {link.label}
                      </a>
                    )
                  )}
                </span>
              </div>
            </>
          ) : (
            <div className="mt-3 no-gift-card">No Gift Card Avilable</div>
          )}
        </div>
      </div>

      {/* Themed Gift Cards end */}
      {isModalOpen && (
        <MyCardModal
          giftCardData={giftCardData}
          setIsModalOpen={setIsModalOpen}
          sendCryptoCardModalHandler={sendCryptoCardModalHandler}
        />
      )}
      {isSendCryptoCardModalOpen && (
        <SendCryptoCardModal
          setIsSendCryptoCardModalOpen={setIsSendCryptoCardModalOpen}
          giftCardData={giftCardData}
        />
      )}
    </section>
  );
}
