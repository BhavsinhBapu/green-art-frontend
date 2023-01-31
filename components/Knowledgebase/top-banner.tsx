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
                <div className="d-flex w-100 p-3 rounded ">
                  <input
                    className="w-100 px-2 py-2 rounded-left"
                    type="text"
                    name="notes"
                  />
                  <button
                    className="border-0 px-4 btn-secondary rounded-reight"
                    type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </div>

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
