import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LaunchPad = ({ viewMore }: any) => {
  const { t } = useTranslation("common");
  return (
    <>
      <Link href="/launchpad/subscription/dfdf">
        <div className="mt-3 mb-5 row launchpad-container">
          <div className="col-lg-4 col-12  mb-2">
            <Image
              src="/binance-logo-6219389_960_720.webp"
              alt=""
              layout="responsive"
              height={150}
              width={200}
              className="launchpad-cover"
            />
          </div>
          <div className="col-lg-8 col-12 subscriptionRightContent">
            <div>
              <div className="status-launchpool">
                <p>{t("SUBSCRIPTION")}</p>
              </div>
              <h3 className="mt-1">{t("APPLE")}</h3>
              <p>
                {t("APPLE - A Move-to-Earn Health and Fitness Application")}
              </p>

              <div className="row">
                <div className="col-lg-6 col-md-12 pool-row">
                  <p className="pool-title">{t("Tokens Offered:")}</p>
                  <p className="pool-value">{t("420,000,000.0000 GMT")}</p>
                </div>
                <div className="col-lg-6 col-md-12 pool-row">
                  <p className="pool-title">{t("Participants:")}</p>
                  <p className="pool-value">{t("130,672")}</p>
                </div>{" "}
                <div className="col-lg-6 col-md-12 pool-row">
                  <p className="pool-title">{t("Sale Price:")}</p>
                  <p className="pool-value">{t("1 GMT = 0.00002514 BNB")}</p>
                </div>
                <div className="col-lg-6 col-md-12 pool-row">
                  <p className="pool-title">{t("Total committed:")}</p>
                  <p className="pool-value">{t("8,742,450.4131 BNB")}</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-6 pool-row">
                  <p className="pool-title">{t("End time:")}</p>
                  <p className="pool-value">{t("2022-03-09")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>

      {viewMore && (
        <div className="viewMoreLink">
          <Link href="/launchpad/view-all/lpd">
            <a>View more</a>
          </Link>
        </div>
      )}
    </>
  );
};

export default LaunchPad;
