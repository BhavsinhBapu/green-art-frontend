import { NewsList } from "components/News/NewsList";
import { NewsSlider } from "components/News/NewsSlider";
import Footer from "components/common/footer";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
import { GetServerSideProps } from "next";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import { customPage, landingPage } from "service/landing-page";
import { getNewsByCategoryApi } from "service/news";
import { NewsHomePageAction } from "state/actions/news";
import Pagination from "components/Pagination/Pagination";

const News = ({
  customPageData,
  socialData,
  copyright_text,
  PopularNews,
  RecentNews,
  categories,
}: any) => {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="container">
        <h1 className="pb-2">{t("Top news")}</h1>
        <hr />
        <NewsSlider PopularNews={PopularNews} />
        <NewsList RecentNews={RecentNews} categories={categories} />
        <Pagination />
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
  await SSRAuthCheck(ctx, "/news");
  const { data } = await landingPage();
  const { data: customPageData } = await customPage();
  const { Categories, PopularNews, RecentNews } = await NewsHomePageAction();
  return {
    props: {
      socialData: data.media_list,
      copyright_text: data?.copyright_text,
      customPageData: customPageData.data,
      PopularNews: PopularNews?.data,
      RecentNews: RecentNews?.data,
      categories: Categories?.data,
    },
  };
};
export default News;
