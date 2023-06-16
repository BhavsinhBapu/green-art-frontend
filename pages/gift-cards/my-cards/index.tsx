import { CUstomSelect } from "components/common/CUstomSelect";
import ImageComponent from "components/common/ImageComponent";
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

export default function index() {
  const { t } = useTranslation();
  const [myCards, setMyCards] = useState({});
  useEffect(() => {
    getMyCards("1", 9, 1);
  }, []);

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
    getMyCards(event.value, 9, 1);
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
            <div className="row mt-3">
              {myCards?.data?.map((item: any, index: number) => (
                <div className="col-lg-4 my-3 pointer" key={index}>
                  <div className="single-card h-full">
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
          ) : (
            <div className="mt-3 no-gift-card">No Gift Card Avilable</div>
          )}
        </div>
      </div>
      {/* Themed Gift Cards end */}
    </section>
  );
}
