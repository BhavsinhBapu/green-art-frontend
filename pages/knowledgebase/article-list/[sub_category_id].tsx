import { ArticalCard } from "components/Knowledgebase/article-card";
import { TopBanner } from "components/Knowledgebase/top-banner";
import { CustomLoading } from "components/common/CustomLoading";
import Footer from "components/common/footer";
import { pageAvailabilityCheck } from "middlewares/ssr-authentication-check";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { customPage, landingPage } from "service/landing-page";
import { knowledgebaseArticleListAction } from "state/actions/knowlegdgbase";

const KnowledgebaseArticleList = ({
  socialData,
  customPageData,
  copyright_text,
}: any) => {
  const [list, setList] = useState([]);
  const [details, setDetails] = useState<any>({});
  const [Loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    router.query.sub_category_id &&
      knowledgebaseArticleListAction(
        setList,
        setDetails,
        setLoading,
        router.query.sub_category_id
      );
  }, [router.query.sub_category_id]);
  return (
    <>
      <TopBanner />
      {Loading ? (
        <div className="row mt-5 pt-5">
          <div className="col-12">
            <CustomLoading />
          </div>
        </div>
      ) : (
        <section className="mb-5 pb-5">
          <div className="container">
            <div className="row mt-5 ">
              <div className="col-12">
                <h1 className="text-center">{details?.name}</h1>
              </div>
              {list?.map((article: any) => (
                <ArticalCard article={article} />
              ))}
            </div>
          </div>
        </section>
      )}
      <Footer
        customPageData={customPageData}
        socialData={socialData}
        copyright_text={copyright_text}
      />
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
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
      socialData: data.media_list,
      copyright_text: data?.copyright_text,
      customPageData: customPageData.data,
    },
  };
};
export default KnowledgebaseArticleList;
