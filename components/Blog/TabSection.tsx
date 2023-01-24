import React, { useState } from "react";
import { getBlogsByCategoryApi } from "service/blog";

const TabSection = ({ categories, setRecentBlogState, setLoading }: any) => {
  const [selected, setSelected] = useState(null);
  const getBlogsByCategory = async (id: any) => {
    setLoading(true);
    setSelected(id);
    const CategoryBlog = await getBlogsByCategoryApi(id, 0);
    setRecentBlogState(CategoryBlog?.data);
    setLoading(false);
  };
  return (
    <div className="d-flex mt-5">
      {categories?.map((category: any) => (
        <div
          className={`itemCatagory ${
            category?.id === selected ? "itemCatagoryactive" : ""
          }`}
          onClick={() => {
            getBlogsByCategory(category?.id);
          }}
        >
          <p>{category?.title}</p>
        </div>
      ))}
    </div>
  );
};

export default TabSection;
