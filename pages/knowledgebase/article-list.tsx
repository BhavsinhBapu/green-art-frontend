import { ArticalCard } from "components/Knowledgebase/article-card";
import { KnowledgeCard } from "components/Knowledgebase/knowledge-card";
import { TopBanner } from "components/Knowledgebase/top-banner";

const KnowledgebaseArticleList = () => {
  return (
    <>
      <TopBanner />
      <section className="mb-5 pb-5">
        <div className="container">
          <div className="row mt-5 ">
            <div className="col-12">
              <h1 className="text-center mb-5">
                Project One / Technical (Artical List)
              </h1>
            </div>
            <ArticalCard />
          </div>
        </div>
      </section>
    </>
  );
};
export default KnowledgebaseArticleList;
