import ImageComponent from "components/common/ImageComponent";
import request from "lib/request";
import useTranslation from "next-translate/useTranslation";
import React, { useEffect, useState } from "react";

export default function index() {
  const { t } = useTranslation();
  const [myCards, setMyCards] = useState({});
  useEffect(() => {
    getMyCards();
  }, []);

  const getMyCards = async () => {
    const { data } = await request.get("/gift-card/my-gift-card-list");
    console.log("my cards", data);
    if (data.success) {
      setMyCards(data.data);
    }
  };

  if (myCards?.data?.length <= 0)
    return <div className="mt-3 no-gift-card">No Gift Card Avilable</div>;

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
            <div className="col-lg-12">
              <div className="d-flex justify-content-between">
                <div>
                  <h3>My Cards</h3>
                  <small>Send a crypto gift card for any occasion</small>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            {myCards?.data?.map((item: any, index: number) => (
              <div className="col-lg-3 col-md-3 col-sm-6 col-12 my-1" key={index}>
                <img src="/demo_gift_banner.png" alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Themed Gift Cards end */}
    </section>
  );
}
