import { formateData } from "common";
import { ArticalCard } from "components/Knowledgebase/article-card";
import Footer from "components/common/footer";
import { pageAvailabilityCheck } from "middlewares/ssr-authentication-check";
import { GetServerSideProps } from "next";
import { articleDetails } from "service/knowledgebase";
import { customPage, landingPage } from "service/landing-page";
import { getNewsDetails } from "service/news";

const KnowledgebaseArticleDetails = ({
  articleDetails,
  socialData,
  customPageData,
  copyright_text,
}: any) => {
  console.log(articleDetails, "articleDetails");
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mt-4">
            <div className="main_img">
              {articleDetails.article_details?.feature_image && (
                <img
                  className="rounded"
                  src={articleDetails.article_details?.feature_image}
                  alt="img"
                />
              )}
            </div>
            <h1 className="fw_600 pt-4 mb-0">
              {articleDetails.article_details?.title}
            </h1>
            <small className="article-date">
              {formateData(articleDetails.article_details.created_at)}
            </small>
            <div
              dangerouslySetInnerHTML={{
                // __html: clean(details.description),
                __html: articleDetails.article_details.description,
              }}
            ></div>
          </div>

          <div className="col-md-6 col-lg-4 mt-5 mt-lg-0 pt-4 ">
            <div className="row">
              {articleDetails.related_article_list.map((article: any) => (
                <div className="col-12 w-100">
                  <ArticalCard article={article} />
                </div>
              ))}
            </div>
          </div>
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
  const { article_id } = ctx.params;
  const Details = await articleDetails(article_id);
  const { data } = await landingPage();
  const { data: customPageData } = await customPage();
  const commonRes = await pageAvailabilityCheck();
  if (parseInt(commonRes.knowledgebase_support_module) !== 1) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      articleDetails: Details.data,
      socialData: data.media_list,
      copyright_text: data?.copyright_text,
      customPageData: customPageData.data,
    },
  };
};
export default KnowledgebaseArticleDetails;
