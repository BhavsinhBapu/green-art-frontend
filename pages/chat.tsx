import Footer from "components/common/footer";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
import { GetServerSideProps } from "next";
import useTranslation from "next-translate/useTranslation";
import React, { useState } from "react";
import { customPage, landingPage } from "service/landing-page";
import { TiDelete } from "react-icons/ti";

export const Chat = ({ customPageData, socialData, copyright_text }: any) => {
  const { t } = useTranslation("common");
  const [file, setFile] = useState<any>();

  return (
    <>
      <div className="page-wrap rightMargin">
        <div className="page-main-content">
          <div className="container-fluid">
            <div className="section-top-wrap mb-25">
              <div className="overview-area">
                <div className="overview-left">
                  <h2 className="section-top-title">{t("Chat")}</h2>
                  {/* <h4 className="blance-title">{t("Total balance")}</h4> */}
                  {/* <h4 className="blance">dfdfd</h4> */}
                </div>
              </div>
            </div>
            <div className="asset-balances-area cstm-loader-area">
              <div className="asset-balances-left">
                <div className="section-wrapper boxShadow">
                  <div className="live-chat">
                    <div className="chat-inner">
                      <div className="chat-header">
                        <img
                          className="chat-avatar"
                          height={45}
                          width={45}
                          src="https://tradexpro-app.cdibrandstudio.com/assets/img/avater.png"
                          alt=""
                        />
                        <div className="chart-header-title">
                          <p className="chat-name">Rolex</p>
                          <p className="chat-status ofline online">Offline</p>
                          <p className="chat-last-seen">
                            Last seen 2 months ago
                          </p>
                        </div>
                      </div>
                      <div className="chat-body">
                        <div className="chat-left">
                          <img
                            className="chat-list-avatar"
                            height={35}
                            width={35}
                            src="https://tradexpro-app.cdibrandstudio.com/assets/img/avater.png"
                            alt=""
                          />
                          <div className="chart-header-title">
                            <p className="chat-details">Rolex</p>
                            <p className="chat-last-seen">
                              Last seen 2 months ago
                            </p>
                          </div>
                        </div>

                        <div className="chat-left">
                          <img
                            className="chat-list-avatar"
                            height={35}
                            width={35}
                            src="https://tradexpro-app.cdibrandstudio.com/assets/img/avater.png"
                            alt=""
                          />
                          <div className="chart-header-title">
                            <p className="chat-details">Rolex</p>
                            <p className="chat-last-seen">
                              Last seen 2 months ago
                            </p>
                          </div>
                        </div>

                        <div className="chat-left">
                          <img
                            className="chat-list-avatar"
                            height={35}
                            width={35}
                            src="https://tradexpro-app.cdibrandstudio.com/assets/img/avater.png"
                            alt=""
                          />
                          <div className="chart-header-title">
                            <p className="chat-details">Rolex</p>
                            <p className="chat-last-seen">
                              Last seen 2 months ago
                            </p>
                          </div>
                        </div>
                        <div className="chat-right">
                          <img
                            className="chat-list-avatar"
                            height={35}
                            width={35}
                            src="https://tradexpro-app.cdibrandstudio.com/assets/img/avater.png"
                            alt=""
                          />
                          <div className="chart-header-title">
                            <p className="chat-details">Rolex</p>
                            <p className="chat-last-seen">
                              Last seen 2 months ago
                            </p>
                          </div>
                        </div>

                        <div className="chat-right">
                          <img
                            className="chat-list-avatar"
                            height={35}
                            width={35}
                            src="https://tradexpro-app.cdibrandstudio.com/assets/img/avater.png"
                            alt=""
                          />
                          <div className="chart-header-title">
                            <p className="chat-details">Rolex</p>
                            <p className="chat-last-seen">
                              Last seen 2 months ago
                            </p>
                          </div>
                        </div>

                        <div className="chat-right">
                          <img
                            className="chat-list-avatar"
                            height={35}
                            width={35}
                            src="https://tradexpro-app.cdibrandstudio.com/assets/img/avater.png"
                            alt=""
                          />
                          <div className="chart-header-title">
                            <p className="chat-details">Rolex</p>
                            <p className="chat-last-seen">
                              Last seen 2 months ago
                            </p>
                          </div>
                        </div>

                        <div className="chat-right">
                          <img
                            className="chat-list-avatar"
                            height={35}
                            width={35}
                            src="https://tradexpro-app.cdibrandstudio.com/assets/img/avater.png"
                            alt=""
                          />
                          <div className="chart-header-title">
                            <p className="chat-details">Rolex</p>
                            <p className="chat-last-seen">
                              Last seen 2 months ago
                            </p>
                          </div>
                        </div>
                      </div>
                      {file && (
                        <div className="chat-upload-image">
                          <div
                            onClick={() => setFile(null)}
                            className="image-close"
                          >
                            <TiDelete size={25} color="red" />
                          </div>
                          <img
                            className="upload-preview-img"
                            src={file}
                            alt="--"
                          />
                        </div>
                      )}

                      <div className="chat-submit-bottom">
                        <div className="image-upload">
                          <label className="upload-file-btn press-enter">
                            <span className="fa fa-paperclip press-enter"></span>
                            <input
                              onChange={(e) => {
                                setFile(URL.createObjectURL(e.target.files[0]));
                              }}
                              id="msgFile"
                              type="file"
                              className="upload-attachment press-enter"
                              name="file"
                              accept="image/*, .txt, .rar, .zip"
                            />
                          </label>
                        </div>
                        <div className="chat-input-box">
                          <input
                            type="text"
                            className="chatInput"
                            placeholder="Type here.."
                          />
                        </div>

                        <div className="submit-button">
                          <button className="chat-button">Send</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
  await SSRAuthCheck(ctx, "/chat");

  const { data } = await landingPage();
  const { data: customPageData } = await customPage();
  return {
    props: {
      socialData: data.media_list,
      copyright_text: data?.copyright_text,
      customPageData: customPageData.data,
    },
  };
};
export default Chat;
