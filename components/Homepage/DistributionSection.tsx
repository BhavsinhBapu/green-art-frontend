import useTranslation from "next-translate/useTranslation";
import { FaApple, FaGoogle, FaWindows, FaLinux, FaMap } from "react-icons/fa";

import React from "react";
import BlockComponent from "components/Animation/block-component";

const DistributionSection = ({ landing }: any) => {
  const { t } = useTranslation("common");

  return (
    <div>
      {parseInt(landing.landing_fourth_section_status) === 1 &&
        parseInt(landing.download_link_display_type) === 1 && (
          <section className="trade-anywhere-area sectiob-bg">
            <div className="container-4xl trade-anywhere-container">
              <div className="section-title">
                <h2 className="title">{landing?.trade_anywhere_title}</h2>
              </div>
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="trade-anywhere-left text-center">
                    <img
                      className="trend-image"
                      src={landing?.trade_anywhere_left_img}
                      alt="trade-imge"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="trade-anywhere-right">
                    <div className="avable-items">
                      <ul className="item-lsit">
                        {landing?.apple_store_link && (
                          <li className="single-item">
                            <BlockComponent
                              gradientClass="gradient-full"
                              icon={<FaApple size={22} />}
                            />
                          </li>
                        )}

                        {landing?.google_store_link && (
                          <li className="single-item">
                            <BlockComponent
                              gradientClass="gradient-full"
                              icon={<FaGoogle size={22} />}
                            />
                          </li>
                        )}

                        {landing?.macos_store_link && (
                          <li className="single-item">
                            <BlockComponent
                              gradientClass="gradient-full"
                              icon={<FaApple size={22} />}
                            />
                          </li>
                        )}

                        {landing?.windows_store_link && (
                          <li className="single-item">
                            <BlockComponent
                              gradientClass="gradient-full"
                              icon={<FaWindows size={22} />}
                            />
                          </li>
                        )}

                        {landing?.linux_store_link && (
                          <li className="single-item">
                            <BlockComponent
                              gradientClass="gradient-full"
                              icon={<FaLinux size={22} />}
                            />
                          </li>
                        )}

                        {landing?.api_link && (
                          <li className="single-item">
                            <BlockComponent
                              gradientClass="gradient-full"
                              icon={<FaMap size={22} />}
                            />
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
    </div>
  );
};

export default DistributionSection;
