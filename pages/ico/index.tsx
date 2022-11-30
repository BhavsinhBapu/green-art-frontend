import Footer from "components/common/footer";
import Hero from "components/ico/Hero";
import LaunchPad from "components/ico/LaunchPad";
import Launchpool from "components/ico/Launchpool";
import LaunchTop from "components/ico/LaunchTop";
import SellingSection from "components/ico/SellingSection";
import { GetServerSideProps } from "next";
import useTranslation from "next-translate/useTranslation";
import { parseCookies } from "nookies";
import React, { useEffect, useState } from "react";
import { customPage, landingPage } from "service/landing-page";
import {
  getLaunchpadLandingPageAction,
  getLaunchpadListAction,
} from "state/actions/launchpad";

const Index = ({ socialData, customPageData, copyright_text }: any) => {
  const { t } = useTranslation("common");
  const [launchpadList, setLaunchpadList]: any = useState([]);
  const [launchpadLandingPage, setLaunchpadLandingPage]: any = useState([]);
  const [launchpadFeatureItem, setLaunchpadFeatureItem]: any = useState([]);
  const [aaaa, setaaaa]: any = useState(false);
  let hideSection = false;

  useEffect(() => {
    getLaunchpadListAction(setLaunchpadList, setLaunchpadFeatureItem);
    getLaunchpadLandingPageAction(setLaunchpadLandingPage);
  }, []);

  return (
    <div>
      <div className="launchPad">
        <LaunchTop data={launchpadLandingPage?.data} />
        <div className="launch-body container">
          <Hero data={launchpadLandingPage?.data} />
          {launchpadFeatureItem.length > 0 && (
            <>
              <h2 className="mb-5">{t("Launchpad")}</h2>
              {launchpadFeatureItem.map((item: any, index: number) => (
                <LaunchPad
                  key={index}
                  viewMore={
                    launchpadFeatureItem?.length == index + 1 ? true : false
                  }
                  data={item}
                />
              ))}
            </>
          )}
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src="/altcoins-removebg-preview.png"
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="/altcoins-removebg-preview.png"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="/altcoins-removebg-preview.png"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          <SellingSection data={launchpadLandingPage?.data} />
        </div>
      </div>
      <Footer
        customPageData={customPageData}
        socialData={socialData}
        copyright_text={copyright_text}
      />
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const { data } = await landingPage();
  const cookies = parseCookies(ctx);
  const { data: customPageData } = await customPage();

  return {
    props: {
      landing: data,
      bannerListdata: data.banner_list,
      announcementListdata: data.announcement_list,
      socialData: data.media_list,
      featureListdata: data.feature_list,
      asset_coin_pairs: data.asset_coin_pairs,
      hourly_coin_pairs: data.hourly_coin_pairs,
      latest_coin_pairs: data.latest_coin_pairs,
      loggedin: cookies.token ? true : false,
      landing_banner_image: data?.landing_banner_image
        ? data?.landing_banner_image
        : null,
      copyright_text: data?.copyright_text,
      customPageData: customPageData.data,
    },
  };
};
export default Index;
