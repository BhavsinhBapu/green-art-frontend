import { KnowledgeCard } from "components/Knowledgebase/knowledge-card";
import { TopBanner } from "components/Knowledgebase/top-banner";
import { CustomLoading } from "components/common/CustomLoading";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { knowledgebaseInfo } from "service/knowledgebase";
import { customPage, landingPage } from "service/landing-page";
import { getKnowledgebaseInfoAction } from "state/actions/knowlegdgbase";

const Knowledgebase = () => {
  const [loading, setLoading] = useState(true);
  const [knowledgebase, setKnowledgebase] = useState([]);
  useEffect(() => {
    getKnowledgebaseInfoAction(setKnowledgebase, setLoading);
  }, []);
  console.log(knowledgebase, "knowledgebase");
  return (
    <>
      <TopBanner />
      <section className="mb-5 pb-5">
        <div className="container">
          {loading ? (
            <div className="row mt-5 pt-5">
              <div className="col-12">
                <CustomLoading />
              </div>
            </div>
          ) : (
            knowledgebase.map((section: any) => (
              <div className="row mt-5 pt-5">
                <div className="col-12">
                  <a className="d-flex align-items-center title-icon" href="">
                    <i className="fa-sharp fa-solid fa-house"></i>
                    <h3 className="fw_600 m-0">{section?.name}</h3>
                  </a>
                </div>
                {section?.knb_sub_category.map((subCategory: any) => (
                  <KnowledgeCard subCategory={subCategory} />
                ))}
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default Knowledgebase;
