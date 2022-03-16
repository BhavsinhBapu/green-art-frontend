import type { GetServerSideProps, NextPage } from "next";
import ProfileSidebar from "layout/profile-sidebar";
import React, { useState } from "react";
import { handleSearch } from "common/search";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";

const Activity: NextPage = () => {
  type searchType = string;
  const [search, setSearch] = useState<searchType>("");

  return (
    <div className="page-wrap">
      <ProfileSidebar />
      <div className="page-main-content">
        <div className="container-fluid">
          <div className="section-top-wrap mb-25">
            <div className="profle-are-top">
              <h2 className="section-top-title mb-0">Activity</h2>
            </div>
          </div>
          <div className="active-sessions mb-25">
            <h4 className="section-title-medium">Active Sessions</h4>
            <div className="section-wrapper">
              <div className="table-responsive">
                <div
                  id="activity-tbl_wrapper"
                  className="dataTables_wrapper no-footer"
                >
                  <div
                    id="assetBalances_wrapper"
                    className="dataTables_wrapper no-footer"
                  >
                    <div className="dataTables_head">
                      <div
                        className="dataTables_length"
                        id="assetBalances_length"
                      >
                        <label className="">
                          Show
                          <select
                            name="assetBalances_length"
                            aria-controls="assetBalances"
                            className=""
                          >
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                          </select>
                          entries
                        </label>
                      </div>
                      <div id="table_filter" className="dataTables_filter">
                        <label>
                          Search:
                          <input
                            type="search"
                            className="data_table_input"
                            placeholder=""
                            aria-controls="table"
                            value={search}
                            onChange={(e) => {
                              handleSearch(e, setSearch);
                            }}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div
                    id="activity-tbl_processing"
                    className="dataTables_processing"
                    style={{ display: "none" }}
                  >
                    Processing...
                  </div>
                  <table
                    id="activity-tbl"
                    className="table table-borderless dataTable no-footer dtr-inline"
                    role="grid"
                    aria-describedby="activity-tbl_info"
                  >
                    <thead>
                      <tr role="row">
                        <th
                          className="all sorting_disabled"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Action"
                        >
                          Action
                        </th>
                        <th
                          className="desktop sorting_disabled"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Source"
                        >
                          Source
                        </th>
                        <th
                          className="desktop sorting_disabled"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="IP Address"
                        >
                          IP Address
                        </th>
                        <th
                          className="all sorting_desc"
                          tabIndex={0}
                          aria-controls="activity-tbl"
                          rowSpan={1}
                          colSpan={1}
                          aria-sort="descending"
                          aria-label="Updated At: activate to sort column ascending"
                        >
                          Updated At
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr role="row" className="odd">
                        <td tabIndex={0}>Log In</td>
                        <td>Web</td>
                        <td>127.0.0.1</td>
                        <td className="sorting_1">2022-02-02 12:05:31</td>
                      </tr>
                      <tr role="row" className="even">
                        <td tabIndex={0}>Log In</td>
                        <td>Web</td>
                        <td>127.0.0.1</td>
                        <td className="sorting_1">2022-02-03 04:33:27</td>
                      </tr>
                      <tr role="row" className="odd">
                        <td tabIndex={0}>Log In</td>
                        <td>Web</td>
                        <td>127.0.0.1</td>
                        <td className="sorting_1">2022-02-03 05:15:24</td>
                      </tr>
                      <tr role="row" className="even">
                        <td tabIndex={0}>Log In</td>
                        <td>Web</td>
                        <td>127.0.0.1</td>
                        <td className="sorting_1">2022-02-03 09:33:10</td>
                      </tr>
                      <tr role="row" className="odd">
                        <td tabIndex={0}>Log In</td>
                        <td>Web</td>
                        <td>127.0.0.1</td>
                        <td className="sorting_1">2022-02-04 04:40:17</td>
                      </tr>
                    </tbody>
                  </table>
                  <div
                    className="dataTables_info"
                    id="activity-tbl_info"
                    role="status"
                    aria-live="polite"
                  >
                    Showing 1 to 5 of 5 entries
                  </div>
                  <div
                    className="pagination-wrapper"
                    id="assetBalances_paginate"
                  >
                    <a className="paginate-button">
                      <i className="fa fa-angle-left"></i>
                    </a>
                    <span>
                      <a
                        className="paginate_button paginate-number"
                        aria-controls="assetBalances"
                        data-dt-idx="1"
                      >
                        1
                      </a>
                    </span>
                    <a className="paginate-button">
                      <i className="fa fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  await SSRAuthCheck(ctx, "/user/activity");
  return {
    props: {},
  };
};
