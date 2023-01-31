import { NewsList } from "components/News/NewsList";
import { NewsSlider } from "components/News/NewsSlider";
import Footer from "components/common/footer";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
import { GetServerSideProps } from "next";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import { customPage, landingPage } from "service/landing-page";
import { NewsHomePageAction } from "state/actions/news";
import Pagination from "components/Pagination/Pagination";
import { Search } from "components/common/search";
import { getBlogNewsSettings } from "service/news";
import { NewsSearchAction } from "state/actions/news";
const News = ({
  customPageData,
  socialData,
  copyright_text,
  PopularNews,
  RecentNews,
  categories,
}: any) => {
  const { t } = useTranslation("common");
  const [recentNewsData, setRecentNews] = useState(RecentNews.data.data);
  const [links, setLinks] = useState(
    RecentNews?.data?.links ? RecentNews?.data?.links : []
  );
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div className="container">
        <Search searchFunction={NewsSearchAction} linkName={"news"} />
        <h1 className="pb-2 sectionTitle">{t("Top news")}</h1>
        <hr />
        <NewsSlider PopularNews={PopularNews.data.data} />
        <NewsList
          recentNewsData={recentNewsData}
          setRecentNews={setRecentNews}
          categories={categories}
          loading={loading}
          setLoading={setLoading}
          setLinks={setLinks}
          setSelected={setSelected}
          selected={selected}
        />
        {recentNewsData.length !== 0 && (
          <Pagination
            setRecentNews={setRecentNews}
            links={links}
            setLinks={setLinks}
            setLoading={setLoading}
            selected={selected}
          />
        )}
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
  const { data: BlogNewsSettings } = await getBlogNewsSettings();

  return {
    props: {
      socialData: data.media_list,
      copyright_text: data?.copyright_text,
      customPageData: customPageData.data,
      PopularNews: PopularNews,
      RecentNews: RecentNews,
      categories: Categories?.data,
      BlogNewsSettings: BlogNewsSettings,
    },
  };
};
export default News;
