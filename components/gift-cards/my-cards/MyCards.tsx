import ImageComponent from "components/common/ImageComponent";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function MyCards({ myCards }: any) {
  console.log("myCards", myCards);
  return (
    <div className="container pb-80">
      <div className="d-flex justify-content-between">
        <div>
          <h3>My Cards</h3>
        </div>
        <div>
          <div className="d-flex align-items-center">
            <span className="inline-block pr-2">All({myCards.length})</span>
            <span className="gift-card-arrow">
              <BsArrowRight />
            </span>
          </div>
        </div>
      </div>
      {myCards.length > 0 ? (
        <div className="row mt-3">
          {myCards.map((item: any, index: number) => (
            <div className="col-lg-3 my-1" key={index}>
              <ImageComponent
                src={item.banner.image || "/demo_gift_banner.png"}
                height={300}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-3 no-gift-card">No Gift Card Avilable</div>
      )}
    </div>
  );
}
