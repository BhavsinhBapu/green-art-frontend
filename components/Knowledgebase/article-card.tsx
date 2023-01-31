export const ArticalCard = () => {
  return (
    <div className="col-md-6 col-lg-4 mt-5 mt-lg-0 pt-4 ">
      <div className="sub_title px-4 pt-4 pb-1 h-100">
        <h4 className="fw_600 pt-3 mb-0">
          <span className="mr-2 h5">
            <i className="fa fa-address-card"></i>
          </span>
          What is Lorem Ipsum?
        </h4>
        <small className="article-date">12-02-2000</small>
        <p className="p_color pt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="details-button">
        <a href="#">
          view more{" "}
          <i className="ml-2 fa fa-long-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
};
