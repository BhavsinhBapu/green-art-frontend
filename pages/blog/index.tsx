import CardSection from "components/Blog/CardSection";
import SliderCover from "components/Blog/SliderCover";
import TabSection from "components/Blog/TabSection";
import Footer from "components/common/footer";
import { Search } from "components/common/search";
import Pagination from "components/Pagination/Pagination";
import {
  pageAvailabilityCheck,
  SSRAuthCheck,
} from "middlewares/ssr-authentication-check";
import { GetServerSideProps } from "next";
import React, { useState } from "react";
import { customPage, landingPage } from "service/landing-page";
import { getBlogNewsSettings } from "service/news";
import { BlogHomePageAction, BlogSearchAction } from "state/actions/blog";

const Index = ({
  customPageData,
  socialData,
  copyright_text,
  featuredBlogs,
  recentBlogs,
  categories,
  BlogNewsSettings,
}: any) => {
  const [loading, setLoading] = useState(false);
  const [recentBlogsState, setRecentBlogState] = useState(
    recentBlogs?.data ? recentBlogs?.data : []
  );
  return (
    <>
      <div className="">
        <div className="container ">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h2>{BlogNewsSettings?.blog_feature_heading}</h2>
              <p>{BlogNewsSettings?.blog_feature_description}</p>
            </div>
            <div className="col-md-5">
              {parseInt(BlogNewsSettings.blog_search_enable) === 1 && (
                <Search searchFunction={BlogSearchAction} linkName={"blog"} />
              )}
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className="container">
        <SliderCover featuredblogs={featuredBlogs.data} />
        <TabSection
          categories={categories}
          setRecentBlogState={setRecentBlogState}
          setLoading={setLoading}
        />
        <CardSection blogs={recentBlogsState} loading={loading} />

        {/* <Pagination /> */}
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
  // await SSRAuthCheck(ctx, "/blog");

  const { data } = await landingPage();
  const { data: customPageData } = await customPage();
  const { FeaturedBlogs, RecentBlogs, Categories } = await BlogHomePageAction();
  const { data: BlogNewsSettings } = await getBlogNewsSettings();
  const commonRes = await pageAvailabilityCheck();
  if (parseInt(commonRes.blog_news_module) !== 1) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      socialData: data.media_list,
      copyright_text: data?.copyright_text,
      customPageData: customPageData.data,
      featuredBlogs: FeaturedBlogs.data,
      recentBlogs: RecentBlogs.data,
      categories: Categories?.data,
      BlogNewsSettings: BlogNewsSettings,
    },
  };
};
export default Index;
