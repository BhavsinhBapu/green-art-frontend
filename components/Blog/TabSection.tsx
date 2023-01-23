import React from "react";

const TabSection = ({ categories }: any) => {
  return (
    <div className="d-flex mt-5">
      {categories?.map((category: any) => (
        <div className="itemCatagory itemCatagoryactive">
          <p>{category?.title}</p>
        </div>
      ))}
    </div>
  );
};

export default TabSection;
