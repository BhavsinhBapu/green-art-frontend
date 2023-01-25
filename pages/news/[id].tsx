import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { BiChevronLeft } from "react-icons/bi";

import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
import { getNewsDetails } from "service/news";
import { GetServerSideProps } from "next";
import { formateData } from "common";
import SocialShare from "components/common/SocialShare";
import { customPage, landingPage } from "service/landing-page";
import Footer from "components/common/footer";

const NewsDetails = ({
  customPageData,
  socialData,
  copyright_text,
  newsDetails,
}: any) => {
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
                }}
              ></div>
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
          <SocialShare
            url={
              process.env.NEXT_PUBLIC_HOSTED_CLIENT_URL +
              "news/" +
              newsDetails?.details?.post_id
            }
          />
        </div>
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
  return {
    props: {
      newsDetails: newsDetails.data,
      socialData: data.media_list,
      copyright_text: data?.copyright_text,
      customPageData: customPageData.data,
    },
  };
};
export default NewsDetails;
