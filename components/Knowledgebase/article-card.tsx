import { formateData } from "common";
import Link from "next/link";

export const ArticalCard = ({ article }: any) => {
  return (
    <div className="col-md-6 col-lg-4 mt-5 pt-4 ">
      <div className="sub_title px-4 pt-4 pb-1 h-100">
        <h4 className="fw_600 pt-3 mb-0">
          <span className="mr-2 h5">
            <i className="fa fa-address-card"></i>
          </span>
          {article?.title}
        </h4>
        <small className="article-date">
          {formateData(article?.created_at)}
        </small>
        <p className="p_color pt-3">{article?.description}</p>
      </div>
      <Link href={"/knowledgebase/" + article.unique_code}>
        <div className="details-button">
          <a href="#">
            view more
            <i className="ml-2 fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </Link>
    </div>
  );
};
