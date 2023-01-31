import { KnowledgeCard } from "components/Knowledgebase/knowledge-card";
import { TopBanner } from "components/Knowledgebase/top-banner";

const Knowledgebase = () => {
  return (
    <>
      <TopBanner />
      <section className="mb-5 pb-5">
        <div className="container">
          <div className="row mt-5 pt-5">
            <div className="col-12">
              <a className="d-flex align-items-center title-icon" href="">
                <i className="fa-sharp fa-solid fa-house"></i>
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
export default Knowledgebase;
