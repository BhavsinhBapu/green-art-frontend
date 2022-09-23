import Footer from "components/common/footer";
import Hero from "components/launchpad/Hero";
import LaunchPad from "components/launchpad/LaunchPad";
import Launchpool from "components/launchpad/Launchpool";
import LaunchTop from "components/launchpad/LaunchTop";
import SellingSection from "components/launchpad/SellingSection";
import { GetServerSideProps } from "next";
import useTranslation from "next-translate/useTranslation";
import { parseCookies } from "nookies";
import React from "react";
import { customPage, landingPage } from "service/landing-page";

const Index = ({ socialData, customPageData, copyright_text }: any) => {
  const { t } = useTranslation("common");
  return (
    <div>
      <div className="">
        <LaunchTop />
        <div className="launch-body container">
          <Hero />
          <h1>Launchpad</h1>
          <LaunchPad />
          <h1>Launchpool</h1>
          <Launchpool />
          <SellingSection />
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
