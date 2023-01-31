export const TopBanner = () => {
  return (
    <section className="top_bg">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center text-white mt-5 pt-5">
            <h1 className="text-white">How can we help you ?</h1>
            <p>Ask Questions Browse Articles Find Answers</p>
          </div>
          <div className="col-md-6 mx-auto">
            <form>
              <div className="input-group my-3 mx-auto pb-5 search_box">
                <input
                  name="search"
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  id="search-input-value"
                />
                <button
                  className="border-0 px-4 btn-secondary rounded-right text-white d-flex align-items-center justify-content-center"
                  type="submit">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>

                <div
                  className="bg-white search-filter ps-1 rounded"
                  id="append-search-result"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
