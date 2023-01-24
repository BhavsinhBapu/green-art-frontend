import { formateData } from "common";
import TableLoading from "components/common/TableLoading";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useState } from "react";
import { getNewsByCategoryApi } from "service/news";

export const NewsList = ({ RecentNews, categories }: any) => {
  const [recentNewsData, setRecentNews] = useState(RecentNews);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);
  const getNewsByCategory = async (id: any) => {
    setLoading(true);
    setSelected(id);
    const CategoryNews = await getNewsByCategoryApi(id, 0);
    setRecentNews(CategoryNews.data);
    setLoading(false);
  };
  const { t } = useTranslation("common");

  return (
    <>
      <div className="row">
        <div className="col-12 mb-5 mt-5 d-flex">
          {categories.map((category: any, index: any) => (
            <div className="newsCategory">
              <li
                className={`itemCatagory ${
                  category?.id === selected ? "itemCatagoryactive" : ""
                }`}
                onClick={() => {
                  getNewsByCategory(category?.id);
                }}
              >
                {category?.title}
              </li>
            </div>
          ))}
        </div>
        {loading ? (
          <TableLoading />
        ) : (
          <div className="col-12 mt-2 mb-5">
            {recentNewsData.length > 0 &&
              recentNewsData?.map((list: any, index: any) => (
                <Link href={"/news/" + list?.post_id}>
                  <div key={index} className="newsCard p-4 mt-2">
                    <a href="">
                      <div className="row">
                        <div className="col-md-4">
                          <img src={list.thumbnail} alt="" />
                        </div>
                        <div className="col-md-8 pt-3 pt-md-0">
                          <div className="newsCardText">
                            <h3>{list.title}</h3>
                            <small>{formateData(list.created_at)}</small>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </Link>
              ))}
            {recentNewsData.length === 0 && <>No item to display</>}
          </div>
        )}
      </div>
    </>
  );
};
