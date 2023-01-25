import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { BiChevronLeft } from "react-icons/bi";

import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
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

  console.log(newsDetails.related.data, "newsDetailsnewsDetailsnewsDetails");

  return (
    <>
      <div className="container">
        <Link href="/news">
          <a>
            <h3 className="pb-2 newsDetailsTitle sectionTitle d-flex align-items-center">
              <BiChevronLeft />
              {t("Back")}
            </h3>
          </a>
        </Link>
        <hr />

        <div className="row">
          <div className="col-md-8">
            <div className="newsCardText mt-4">
              <h3 className="titleText">{newsDetails?.details?.title}</h3>
              <small>{formateData(newsDetails?.details?.created_at)}</small>
              <img src={newsDetails?.details?.thumbnail} alt="" />
              <div
                className="mt-4"
                dangerouslySetInnerHTML={{
                  __html: newsDetails?.details?.body,
                }}></div>
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

            {newsDetails?.related?.data.map((item: any) => (
              <div className="newsCard p-4 mt-2">
                <a href="">
                  <div className="row">
                    <div className="col-12">
                      <img className="rounded" src={item.thumbnail} alt="" />
                    </div>
                    <div className="col-12 pt-3">
                      <div className="newsCardText">
                        <h3 className="titleText">{item.title}</h3>
                        <small>{formateData(item.created_at)}</small>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
            {/* 
            <div className="newsCard p-4 mt-2">
              <a href="">
                <div className="row">
                  <div className="col-12">
                    <img
                      className="rounded"
                      src="https://public.bnbstatic.com/image/cms/blog/20220303/a9bf1151-d820-436b-a550-3670aba02b61.png"
                      alt=""
                    />
                  </div>
                  <div className="col-12 pt-3">
                    <div className="newsCardText">
                      <h3 className="titleText">
                        How To Top Up Your Mobile On the Binance App
                      </h3>
                      <small>Jan 25th 23 4:30:43 pm</small>
                      <p>
                        Binance Pay is a contactless, borderless, and secure
                        user-to-user cryptocurrency payment feature on the
                        Binance App. Binance Pay allows users and merchants to
                        send and receive crypto payments around the world.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div> 
            */}
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
