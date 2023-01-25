import React from "react";
import BlogCard from "components/Blog/Card";
import { GetServerSideProps } from "next";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
import { getBlogDetails } from "service/blog";
import CommentSection from "components/Blog/CommentSection";
import { customPage, landingPage } from "service/landing-page";
import Footer from "components/common/footer";
const BlogDetails = ({
  customPageData,
  socialData,
  copyright_text,
  blogDetails,
}: any) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div
              dangerouslySetInnerHTML={{
                __html: blogDetails?.data?.details?.body,
              }}
            ></div>
          </div>
          <div className="col-md-3">
            <h4>More blog from here</h4>

            {blogDetails?.data?.related.map((item: any) => (
              <div className="row mt-4">
                <div className="col-12">
                  <BlogCard blog={item} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <CommentSection blogDetails={blogDetails} />
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
  const { id } = ctx.params;
  const BlogDetails = await getBlogDetails(id);
  const { data } = await landingPage();
  const { data: customPageData } = await customPage();
  return {
    props: {
      blogDetails: BlogDetails,
      socialData: data.media_list,
      copyright_text: data?.copyright_text,
      customPageData: customPageData.data,
    },
  };
};

export default BlogDetails;
