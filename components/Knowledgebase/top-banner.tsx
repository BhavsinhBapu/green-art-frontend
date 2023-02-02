import { Search } from "components/common/search";
import Link from "next/link";
import { useState } from "react";
import { knowledgebaseArticleSearchAction } from "state/actions/knowlegdgbase";

export const TopBanner = () => {
  const [lists, setLists] = useState([]);
  return (
    <section className="top_bg">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center text-white mt-5 pt-5">
            <h1 className="text-white">How can we help you ?</h1>
          </div>
          <div className="col-md-6 mx-auto pb-5">
            <form>
              <div className="input-group my-3 mx-auto pb-5">
                <div className="d-flex w-100 rounded top_search">
                  <input
                    className="w-100 px-2 py-2 rounded-left border-0"
                    type="text"
                    name="notes"
                    onChange={(e: any) => {
                      knowledgebaseArticleSearchAction(
                        e.target.value,
                        setLists
                      );
                    }}
                  />
                  <button
                    className="border-0 px-4 btn-secondary rounded-r"
                    type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </div>

                <div
                  className="search-filter ps-1 rounded"
                  id="append-search-result">
                  {lists.map((list: any, index: number) => (
                    <Link
                      key={index}
                      href={"/knowledgebase/" + list.unique_code}>
                      <a href="">{list?.title}</a>
                    </Link>
                  ))}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
