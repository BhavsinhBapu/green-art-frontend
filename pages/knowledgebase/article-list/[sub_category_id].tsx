import { ArticalCard } from "components/Knowledgebase/article-card";
import { KnowledgeCard } from "components/Knowledgebase/knowledge-card";
import { TopBanner } from "components/Knowledgebase/top-banner";
import { CustomLoading } from "components/common/CustomLoading";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { knowledgebaseArticleListAction } from "state/actions/knowlegdgbase";

const KnowledgebaseArticleList = () => {
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
                <h1 className="text-center mb-5">{details?.name}</h1>
              </div>
              {list.map((article: any) => (
                <ArticalCard article={article} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default KnowledgebaseArticleList;
