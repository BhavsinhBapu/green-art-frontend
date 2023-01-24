import CardSection from "components/Blog/CardSection";
import SliderCover from "components/Blog/SliderCover";
import TabSection from "components/Blog/TabSection";
import Footer from "components/common/footer";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import { customPage, landingPage } from "service/landing-page";
import { BlogHomePageAction } from "state/actions/blog";

const index = ({
  customPageData,
  socialData,
  copyright_text,
  featuredBlogs,
  recentBlogs,
  categories,
}: any) => {
  const [loading, setLoading] = useState(false);
  const [recentBlogsState, setRecentBlogState] = useState(recentBlogs);
  return (
    <>
      <div className="container">
        <SliderCover featuredblogs={featuredBlogs} />
        <TabSection
          categories={categories}
          setRecentBlogState={setRecentBlogState}
          setLoading={setLoading}
        />
        <CardSection blogs={recentBlogsState} loading={loading} />
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
  await SSRAuthCheck(ctx, "/blog");

  const { data } = await landingPage();
  const { data: customPageData } = await customPage();
  const { FeaturedBlogs, RecentBlogs, Categories } = await BlogHomePageAction();

  return {
    props: {
      socialData: data.media_list,
      copyright_text: data?.copyright_text,
      customPageData: customPageData.data,
      featuredBlogs: FeaturedBlogs?.data,
      recentBlogs: RecentBlogs?.data,
      categories: Categories?.data,
    },
  };
};
export default index;
