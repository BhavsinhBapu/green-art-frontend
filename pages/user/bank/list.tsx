import { formatCurrency } from "common";
import Footer from "components/common/footer";
import TableLoading from "components/common/TableLoading";
import ProfileSidebar from "layout/profile-sidebar";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
import moment from "moment";
import { GetServerSideProps } from "next";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { parseCookies } from "nookies";
import React from "react";
import DataTable from "react-data-table-component";
import { customPage, landingPage } from "service/landing-page";
import { GetUserInfoByTokenServer } from "service/user";

const List = ({ customPageData, socialData, copyright_text }: any) => {
  const { t } = useTranslation("common");
  const [processing, setProcessing] = React.useState<boolean>(false);
  type searchType = string;
  const [search, setSearch] = React.useState<searchType>("");

  return (
    <>
      <div className="page-wrap">
        <ProfileSidebar />
        <div className="page-main-content">
          <div className="container-fluid">
            <div className="section-top-wrap mb-25">
              <div className="profle-are-top">
                <h2 className="section-top-title">{t("Bank List")}</h2>
              </div>
            </div>

            <div className="asset-balances-area">
              {processing ? (
                <TableLoading />
              ) : (
                <div className="asset-balances-left">
                  <div className="section-wrapper boxShadow">
                    <div className="table-responsive tableScroll">
                      <div
                        id="assetBalances_wrapper"
                        className="dataTables_wrapper no-footer"
                      >
                        <div className="bank-table-header">
                          <div className="dataTables_head">
                            <div
                              className="dataTables_length"
                              id="assetBalances_length"
                            >
                              <label className="">
                                {t("Show")}
                                <select
                                  name="assetBalances_length"
                                  aria-controls="assetBalances"
                                  className=""
                                  // onChange={(e) => {
                                  //   CoinConvertHistoryAction(
                                  //     parseInt(e.target.value),
                                  //     1,
                                  //     setHistory,
                                  //     setProcessing,
                                  //     setStillHistory
                                  //   );
                                  // }}
                                >
                                  <option selected disabled hidden>
                                    10
                                  </option>
                                  <option value="10">10</option>
                                  <option value="25">25</option>
                                  <option value="50">50</option>
                                  <option value="100">100</option>
                                </select>
                                {t("entries")}
                              </label>
                            </div>
                            <div
                              id="table_filter"
                              className="dataTables_filter"
                            >
                              <label>
                                {t("Search")}:
                                <input
                                  type="search"
                                  className="data_table_input"
                                  aria-controls="table"
                                  value={search}
                                  // onChange={(e) => {
                                  //   handleSwapHistorySearch(
                                  //     e,
                                  //     setSearch,
                                  //     stillHistory,
                                  //     setHistory
                                  //   );
                                  // }}
                                />
                              </label>
                            </div>
                          </div>

                          <div className="dataTables_head">
                            <div className="">
                              <Link href={"/user/bank/add-bank"}>
                                <button className="add-bank-btn">
                                  <span>Add Bank</span>
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <DataTable columns={columns} data={history} /> */}
                      {/* {history?.length > 0 && (
                        <div
                          className="pagination-wrapper"
                          id="assetBalances_paginate"
                        >
                          <span>
                            {stillHistory?.list?.links.map(
                              (link: any, index: number) =>
                                link.label === "&laquo; Previous" ? (
                                  <a
                                    className="paginate-button"
                                    onClick={() => {
                                      if (link.url)
                                        LinkTopaginationString(link);
                                    }}
                                    key={index}
                                  >
                                    <i className="fa fa-angle-left"></i>
                                  </a>
                                ) : link.label === "Next &raquo;" ? (
                                  <a
                                    className="paginate-button"
                                    onClick={() => LinkTopaginationString(link)}
                                    key={index}
                                  >
                                    <i className="fa fa-angle-right"></i>
                                  </a>
                                ) : (
                                  <a
                                    className={`paginate_button paginate-number ${
                                      link.active === true && "text-warning"
                                    }`}
                                    aria-controls="assetBalances"
                                    data-dt-idx="1"
                                    onClick={() => LinkTopaginationString(link)}
                                    key={index}
                                  >
                                    {link.label}
                                  </a>
                                )
                            )}
                          </span>
                        </div>
                      )} */}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer
        customPageData={customPageData}
        socialData={socialData}
        copyright_text={copyright_text}
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  await SSRAuthCheck(ctx, "/user/profile");
  const { data } = await landingPage();
  const { data: customPageData } = await customPage();
  const cookies = parseCookies(ctx);

  return {
    props: {
      socialData: data.media_list,
      copyright_text: data?.copyright_text,
      customPageData: customPageData.data,
    },
  };
};
export default List;
