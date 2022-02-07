import type { NextPage } from "next";

const Index: NextPage = () => {
  return (
    <div className="container-fluid">
      <div
        className="alert alert-success alert-dismissible fade show d-none"
        role="alert"
        id="web_socket_notification"
      >
        <span id="socket_message" />
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div
        className="modal fade"
        id="confirm-modal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <img src="/close.svg" className="img-fluid" alt="" />
            </button>
            <div className="text-center">
              <img
                src="/add-pockaet-vector.svg"
                className="img-fluid img-vector"
                alt=""
              />
              <h3 id="confirm-title" />
            </div>
            <div className="modal-body">
              <a
                id="confirm-link"
                href="#"
                className="btn btn-block cp-user-move-btn"
              >
                Confirm
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section-top-wrap mb-25">
        <div className="profle-are-top">
          <h2 className="section-top-title mb-0">FAQ</h2>
        </div>
      </div>
      <div className="container">
        <div className="section-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="accordion" id="accordionExample">
                <div className="cp-user-referral-content">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseOne1"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          What is Codexpro exchange ?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseOne1"
                      className="collapse  show "
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Aenean condimentum nibh vel enim sodales scelerisque.
                        Mauris quisn pellentesque odio, in vulputate turpis.
                        Integer condimentum eni lorem pellentesque euismod. Nam
                        rutrum accumsan nisl vulputate.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cp-user-referral-content">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseOne2"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          How it works ?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseOne2"
                      className="collapse "
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Aenean condimentum nibh vel enim sodales scelerisque.
                        Mauris quisn pellentesque odio, in vulputate turpis.
                        Integer condimentum eni lorem pellentesque euismod. Nam
                        rutrum accumsan nisl vulputate.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cp-user-referral-content">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseOne3"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          What is the workflow ?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseOne3"
                      className="collapse "
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Aenean condimentum nibh vel enim sodales scelerisque.
                        Mauris quisn pellentesque odio, in vulputate turpis.
                        Integer condimentum eni lorem pellentesque euismod. Nam
                        rutrum accumsan nisl vulputate.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cp-user-referral-content">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseOne4"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          How i place a order ?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseOne4"
                      className="collapse "
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Aenean condimentum nibh vel enim sodales scelerisque.
                        Mauris quisn pellentesque odio, in vulputate turpis.
                        Integer condimentum eni lorem pellentesque euismod. Nam
                        rutrum accumsan nisl vulputate.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cp-user-referral-content">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseOne5"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          How i make a withdrawal ?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseOne5"
                      className="collapse "
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Aenean condimentum nibh vel enim sodales scelerisque.
                        Mauris quisn pellentesque odio, in vulputate turpis.
                        Integer condimentum eni lorem pellentesque euismod. Nam
                        rutrum accumsan nisl vulputate.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cp-user-referral-content">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseOne6"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          What about the deposit process ?
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseOne6"
                      className="collapse "
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Aenean condimentum nibh vel enim sodales scelerisque.
                        Mauris quisn pellentesque odio, in vulputate turpis.
                        Integer condimentum eni lorem pellentesque euismod. Nam
                        rutrum accumsan nisl vulputate.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-image text-center">
                <img src="/faq-image.png" alt="faq-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
