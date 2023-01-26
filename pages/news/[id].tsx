import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { BiChevronLeft } from "react-icons/bi";

import {
  SSRAuthCheck,
  pageAvailabilityCheck,
} from "middlewares/ssr-authentication-check";
import { getBlogNewsSettings, getNewsDetails } from "service/news";
import { GetServerSideProps } from "next";
import { formateData } from "common";
import SocialShare from "components/common/SocialShare";
import { customPage, landingPage } from "service/landing-page";
import Footer from "components/common/footer";
import CommentSection from "components/Blog/CommentSection";
import { PostCommentAction } from "state/actions/news";

const NewsDetails = ({
  customPageData,
  socialData,
  copyright_text,
  newsDetails,
  BlogNewsSettings,
}: any) => {
  const { t } = useTranslation("common");
  console.log(
    BlogNewsSettings.news_comment_enable,
    "newsDetails?.data.details?.post_id"
  );
  return (
    <>
      <div className="container">
        <Link href="/news">
          <a>
            <h3 className="pb-2 newsDetailsTitle d-flex align-items-center">
              <BiChevronLeft />
              {t("Back")}
            </h3>
          </a>
        </Link>
        <hr />

        <div className="row">
          <div className="col-md-8">
            <div className="newsCardText mt-4">
              <h3>{newsDetails?.details?.title}</h3>
              <small>{formateData(newsDetails?.details?.created_at)}</small>
              <img src={newsDetails?.details?.thumbnail} alt="" />
              <div
                className="mt-4"
                dangerouslySetInnerHTML={{
                  __html: newsDetails?.details?.body,
                }}
              ></div>
            </div>
          </div>
          <div className="col-md-4">
            <SocialShare
              url={
                process.env.NEXT_PUBLIC_HOSTED_CLIENT_URL +
                "news/" +
                newsDetails?.details?.post_id
              }
            />
          </div>
        </div>
        {parseInt(BlogNewsSettings?.news_comment_enable) === 1 && (
          <CommentSection
            comments={newsDetails?.comments}
            post_id={newsDetails?.details?.post_id}
            PostCommentAction={PostCommentAction}
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
  const { id } = ctx.params;
  const newsDetails = await getNewsDetails(id);
  const { data } = await landingPage();
  const { data: customPageData } = await customPage();
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
      newsDetails: newsDetails.data,
      socialData: data.media_list,
      copyright_text: data?.copyright_text,
      customPageData: customPageData.data,
      BlogNewsSettings: BlogNewsSettings,
    },
  };
};
export default NewsDetails;
