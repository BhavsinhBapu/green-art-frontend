import type { GetServerSideProps, NextPage } from "next";
import ProfileComp from "components/profile/profile";
import { parseCookies } from "nookies";
import { BiSupport, BiShapeCircle } from "react-icons/bi";
import { GetUserInfoByTokenServer } from "service/user";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
import useTranslation from "next-translate/useTranslation";
import Footer from "components/common/footer";
import { FaPeopleArrows } from "react-icons/fa";
import { AiOutlineUpload } from "react-icons/ai";
import moment from "moment";
import ImageComponent from "components/common/ImageComponent";
import WalletOverviewSidebar from "layout/WalletOverviewSidebar";
import Link from "next/link";
const Profile: NextPage = ({ user, profileActivity }: any) => {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="page-wrap">
        <WalletOverviewSidebar />
        <div className="page-main-content pt-0">
          <div className="container-fluid">
            <div className="my-5 wallet-overview-header inner-section-margin-top">
              <div className="profle-are-top">
                <h2>Wallet Overview</h2>
              </div>
              <div>
                <Link href={`/`}>
                  <a className="wallet-overview-btn wallet-overview-btn-active ">
                    Deposit
                  </a>
                </Link>
                <Link href={`/`}>
                  <a className="wallet-overview-btn mx-3">Withdraw</a>
                </Link>
                <Link href={`/`}>
                  <a className="wallet-overview-btn">Transaction History</a>
                </Link>
              </div>
            </div>
            <div
              className="row py-3"
              style={{ background: "var(--card-background-color)" }}
            >
              <div className="col-md-7">
                <div
                  className="py-3"
                  style={{ borderBottom: "1px solid var(--border-color)" }}
                >
                  <div>
                    <h6>Estimated Balance</h6>
                    <div className="pt-3">
                      <div
                        style={{
                          borderBottom: "2px dotted var(--border-color)",
                          display: "inline-block",
                        }}
                      >
                        <h3>0.00000000BNB</h3>
                      </div>
                    </div>
                    <p>$8.45</p>
                  </div>
                </div>

                <div>
                  <div className="py-3">
                    <h6>My Asstes</h6>
                  </div>
                  <div className="my-3 d-flex align-items-center gap-10">
                    <div className="wallet-assets-btn wallet-assets-btn-active ">
                      Wallet View
                    </div>

                    <div className="wallet-assets-btn">Coin View</div>
                  </div>

                  <div className="my-3">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th className="p-2 border-0">Wallet</th>
                          <th className="p-2 border-0 text-right">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="p-2 align-middle">
                            <Link href="/user/edit-profile">
                              <a className="d-flex align-items-center gap-10">
                                <BiShapeCircle size={18} />
                                <span>{t("Futures")}</span>
                              </a>
                            </Link>
                          </td>
                          <td className="p-2 text-right align-middle">
                            <div>
                              <span className="d-block">0.0000000 BNB</span>
                              <small>$5.54</small>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 align-middle">
                            <Link href="/user/edit-profile">
                              <a className="d-flex align-items-center gap-10">
                                <BiShapeCircle size={18} />
                                <span>{t("Spot")}</span>
                              </a>
                            </Link>
                          </td>
                          <td className="p-2 text-right align-middle">
                            <div>
                              <span className="d-block">0.0000000 BNB</span>
                              <small>$5.54</small>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 align-middle">
                            <Link href="/user/edit-profile">
                              <a className="d-flex align-items-center gap-10">
                                <FaPeopleArrows size={18} />
                                <span>{t("P2P")}</span>
                              </a>
                            </Link>
                          </td>
                          <td className="p-2 text-right align-middle">
                            <div>
                              <span className="d-block">0.0000000 BNB</span>
                              <small>$5.54</small>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="offset-md-1 col-md-4">
                <div className="py-3">
                  <div style={{ overflow: "hidden", borderRadius: "10px" }}>
                    <img
                      className="w-full"
                      height={150}
                      src="https://admin.tradexpro.xyz/uploaded_file/uploads/6470b727aa3f51685108519.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="py-5">
                  <div className="mt-5 mb-3 px-2 d-flex justify-content-between align-items-center gap-10">
                    <h6>Recent Transactions</h6>
                    <Link href="/user/edit-profile">
                      <a className="text-12 bg-main-clr py-1 px-3 rounded">
                        <span>{t("View All")}</span>
                      </a>
                    </Link>
                  </div>
                  <div>
                    <table className="table">
                      <thead></thead>
                      <tbody>
                        <tr>
                          <td className="p-2 align-middle">
                            <div className="d-flex gap-10 align-items-center">
                              <div
                                className="d-flex justify-content-center align-items-center bg-main-clr rounded"
                                style={{ width: "36px", height: "36px" }}
                              >
                                <AiOutlineUpload size={16} />
                              </div>
                              <div>
                                <span className="d-block">Withdraw</span>
                                <small>2023-12-05 12:12:12</small>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 text-right align-middle">
                            <div>
                              <span className="d-block">+4 USD</span>
                              <small>
                                <span
                                  style={{
                                    display: "inline-block",
                                    width: "5px",
                                    height: "5px",
                                    background: "green",
                                    borderRadius: "50%",
                                    marginBottom: "1px",
                                  }}
                                ></span>{" "}
                                Completed
                              </small>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 align-middle">
                            <div className="d-flex gap-10 align-items-center">
                              <div
                                className="d-flex justify-content-center align-items-center bg-main-clr rounded"
                                style={{ width: "36px", height: "36px" }}
                              >
                                <AiOutlineUpload size={16} />
                              </div>
                              <div>
                                <span className="d-block">Withdraw</span>
                                <small>2023-12-05 12:12:12</small>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 text-right align-middle">
                            <div>
                              <span className="d-block">+4 USD</span>
                              <small>
                                <span
                                  style={{
                                    display: "inline-block",
                                    width: "5px",
                                    height: "5px",
                                    background: "green",
                                    borderRadius: "50%",
                                    marginBottom: "1px",
                                  }}
                                ></span>{" "}
                                Completed
                              </small>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 align-middle">
                            <div className="d-flex gap-10 align-items-center">
                              <div
                                className="d-flex justify-content-center align-items-center bg-main-clr rounded"
                                style={{ width: "36px", height: "36px" }}
                              >
                                <AiOutlineUpload size={16} />
                              </div>
                              <div>
                                <span className="d-block">Withdraw</span>
                                <small>2023-12-05 12:12:12</small>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 text-right align-middle">
                            <div>
                              <span className="d-block">+4 USD</span>
                              <small>
                                <span
                                  style={{
                                    display: "inline-block",
                                    width: "5px",
                                    height: "5px",
                                    background: "green",
                                    borderRadius: "50%",
                                    marginBottom: "1px",
                                  }}
                                ></span>{" "}
                                Completed
                              </small>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
