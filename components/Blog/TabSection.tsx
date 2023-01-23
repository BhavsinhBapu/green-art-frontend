import React, { useState } from "react";

const TabSection = ({ categories, setLoading }: any) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="d-flex mt-5">
      {categories?.map((category: any) => (
        <div
          className={`itemCatagory ${
            category?.id === selected ? "itemCatagoryactive" : ""
          }`}
          onClick={() => {
            setLoading(true);
            setSelected(category?.id);
            setLoading(false);
          }}
        >
          <p>{category?.title}</p>
        </div>
      ))}
    </div>
  );
};

export default TabSection;
