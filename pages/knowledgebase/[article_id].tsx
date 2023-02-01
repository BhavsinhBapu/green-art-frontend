import { formateData } from "common";
import { ArticalCard } from "components/Knowledgebase/article-card";
import { GetServerSideProps } from "next";
import { articleDetails } from "service/knowledgebase";
import { customPage, landingPage } from "service/landing-page";
import { getNewsDetails } from "service/news";

const KnowledgebaseArticleDetails = ({ articleDetails }: any) => {
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
                // <div className="col-12">
                //   <div className="sub_title px-4 pt-4 pb-1 h-100">
                //     <h4 className="fw_600 pt-3 mb-0">
                //       <span className="mr-2 h5">
                //         <i className="fa fa-address-card"></i>
                //       </span>
                //       What is Lorem Ipsum?
                //     </h4>
                //     <small className="article-date">12-02-2000</small>
                //     <p className="p_color pt-3">
                //       Lorem Ipsum is simply dummy text of the printing and
                //       typesetting industry. Lorem Ipsum has been the industry's
                //       standard dummy text ever since the 1500s, when an unknown
                //       printer took a galley of type and scrambled it to make a
                //       type specimen book.
                //     </p>
                //   </div>
                //   <div className="details-button">
                //     <a href="#">
                //       view more
                //       <i
                //         className="ml-2 fa fa-long-arrow-right"
                //         aria-hidden="true"
                //       ></i>
                //     </a>
                //   </div>
                // </div>
                <div className="col-12 w-100">
                  <ArticalCard article={article} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const { article_id } = ctx.params;
  const Details = await articleDetails(article_id);
  const { data } = await landingPage();
  const { data: customPageData } = await customPage();

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
