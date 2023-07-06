import React from "react";
import HighestSearchedItem from "./HighestSearchedItem";

export default function HighestSearchedLists() {
  return (
    <div
      className="bg-card-primary-clr"
      style={{ height: "224px", borderRadius: "8px" }}
    >
      <div className="p-3">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <p className="text-12">
              Highest Searched <span>24H</span>
            </p>
          </div>
          <div>Button</div>
        </div>
        <div className="my-3">
          {[1, 2, 3, 4, 5].map((item) => (
            <HighestSearchedItem key={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
