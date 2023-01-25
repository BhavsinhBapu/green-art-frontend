import React, { useState } from "react";
import { getBlogsByCategoryApi } from "service/blog";

const TabSection = ({ categories, setRecentBlogState, setLoading }: any) => {
  const [selected, setSelected] = useState(null);
  const getBlogsByCategory = async (id: any) => {
    setLoading(true);
    setSelected(id);
    const CategoryBlog = await getBlogsByCategoryApi(id, 0, 5, 1);
    setRecentBlogState(CategoryBlog?.data?.data);
    setLoading(false);
  };
  return (
    <div className="newsCategory mt-5">
      {categories?.map((category: any) => (
        <li
          className={`itemCatagory ${
            category?.id === selected ? "itemCatagoryactive" : ""
          }`}
          onClick={() => {
            getBlogsByCategory(category?.id);
          }}
        >
          {category?.title}
        </li>
      ))}
    </div>
  );
};

export default TabSection;
