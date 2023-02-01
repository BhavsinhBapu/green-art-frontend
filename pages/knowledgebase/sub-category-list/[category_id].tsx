import { KnowledgeCard } from "components/Knowledgebase/knowledge-card";
import { TopBanner } from "components/Knowledgebase/top-banner";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { knowledgebaseSubcategoryListbyIdAction } from "state/actions/knowlegdgbase";

const KnowledgebaseCategory = () => {
  const [list, setList] = useState([]);
  const [details, setDetails] = useState<any>({});
  const [Loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    router.query.category_id &&
      knowledgebaseSubcategoryListbyIdAction(
        setList,
        setDetails,
        setLoading,
        router.query.category_id
      );
  }, [router.query.category_id]);
  return (
    <>
      <TopBanner />
      <section className="mb-5 pb-5">
        <div className="container">
          <div className="row mt-5 ">
            <div className="col-12">
              <h1 className="text-center">Subcategory</h1>
              <a className="d-flex align-items-center title-icon mt-5" href="">
                <i className={details?.icon_class} aria-hidden="true"></i>
                <h3 className="fw_600 m-0">{details?.name}</h3>
              </a>
            </div>
            {list.map((Subcategory) => (
              <KnowledgeCard subCategory={Subcategory} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default KnowledgebaseCategory;
