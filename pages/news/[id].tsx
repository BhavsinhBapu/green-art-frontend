import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { BiChevronLeft } from "react-icons/bi";
import {
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperIcon,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterIcon,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineReddit } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
import { getNewsDetails } from "service/news";
import { GetServerSideProps } from "next";
import { formateData } from "common";

const NewsDetails = ({ newsDetails }: any) => {
  const { t } = useTranslation("common");
  console.log(newsDetails, "newsDetails");
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
                }}></div>
            </div>
            <div className="row">
              <div className="col-md-8 mx-auto my-5">
                <img
                  className="rounded"
                  src="https://public.bnbstatic.com/image/cms/content/body/202301/4646133d08c4de0373702e761113abb1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <h4 className="mt-4 ">{t("Share")}</h4>
            <div className="my-3 newsShare d-flex align-items-center">
              <a href="">
                 
                <FacebookShareButton
                  url={
                    process.env.NEXT_PUBLIC_HOSTED_CLIENT_URL +
                    "news/" +
                    newsDetails?.details?.post_id
                  }
                  quote={"Share on facebook"}
                  hashtag="#muo">
                          
                  <FacebookIcon size={32} round />
                        
                </FacebookShareButton>
              </a>
              <a href="">
                <TwitterShareButton
                  url={
                    process.env.NEXT_PUBLIC_HOSTED_CLIENT_URL +
                    "news/" +
                    newsDetails?.details?.post_id
                  }>
                          
                  <TwitterIcon size={32} round />
                        
                </TwitterShareButton>
              </a>
              <a href="">
                <RedditShareButton
                  url={
                    process.env.NEXT_PUBLIC_HOSTED_CLIENT_URL +
                    "news/" +
                    newsDetails?.details?.post_id
                  }>
                  <RedditIcon size={32} round />
                </RedditShareButton>
              </a>
              <a href="">
                <InstapaperShareButton
                  url={
                    process.env.NEXT_PUBLIC_HOSTED_CLIENT_URL +
                    "news/" +
                    newsDetails?.details?.post_id
                  }>
                  <InstapaperIcon size={32} round />
                </InstapaperShareButton>
              </a>
              <a href="">
                <WhatsappShareButton
                  url={
                    process.env.NEXT_PUBLIC_HOSTED_CLIENT_URL +
                    "news/" +
                    newsDetails?.details?.post_id
                  }>
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  await SSRAuthCheck(ctx, "/news");
  const { id } = ctx.params;
  const newsDetails = await getNewsDetails(id);
  console.log(newsDetails, "newsDetails");
  return {
    props: {
      newsDetails: newsDetails.data,
    },
  };
};
export default NewsDetails;
