import { KnowledgeCard } from "components/Knowledgebase/knowledge-card";
import { TopBanner } from "components/Knowledgebase/top-banner";

const KnowledgebaseCategory = () => {
  return (
    <>
      <TopBanner />
      <section className="mb-5 pb-5">
        <div className="container">
          <div className="row mt-5 ">
            <div className="col-12">
              <h1 className="text-center">Tradexpro Knowledge</h1>
              <a className="d-flex align-items-center title-icon mt-5" href="">
                <i className="fa fa-home" aria-hidden="true"></i>
                <h3 className="fw_600 m-0">Project One</h3>
              </a>
            </div>
            <KnowledgeCard />
          </div>
        </div>
      </section>
    </>
  );
};
export default KnowledgebaseCategory;
