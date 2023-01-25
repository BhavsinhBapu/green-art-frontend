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
    <div className="mt-5 pt-5 blogTab">
      {categories?.map((category: any) => (
        <button
          className={`itemCatagory ${
            category?.id === selected ? "itemCatagoryactive" : ""
          }`}
          onClick={() => {
            getBlogsByCategory(category?.id);
          }}>
          {category?.title}
        </button>
      ))}
    </div>
  );
};

export default TabSection;
