const KnowledgebaseArticleDetails = () => {
  return (
    // body text section start
    <section className="mb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mt-4">
            <div className="main_img">
              <img className="rounded-3" src="" alt="img" />
            </div>
            <h2 className="fw_600 pt-3 mb-0">All the assets you need</h2>
            <small className="article-date">2023-01-27 06:26:27</small>
            <p className="p_color pt-3">
              Get the inspiration you need with these collections carefully
            </p>
          </div>

          <div className="col-md-6 col-lg-4 mt-5 mt-lg-0 pt-4">
            <div className="h-100">
              <div className="sub_title  p-4">
                <h4 className="fw_600 pt-3 mb-1">
                  <span className="me-2 h5">
                    <i className="fa fa-address-card"></i>
                  </span>
                  What is Lorem Ipsum?
                </h4>
                <small className="article-date">12-02-2000</small>
                <p className="p_color pt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="details-button">
                <a href="">
                  view more{" "}
                  <i
                    className="ms-1 fa fa-long-arrow-right"
                    aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // body text section end
  );
};
export default KnowledgebaseArticleDetails;
