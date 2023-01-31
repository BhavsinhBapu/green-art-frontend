export const SupportCard = ({ item }) => {
  return (
    <div className="col-md-6 col-lg-3 mt-3 mt-md-0">
      <div className="h-100">
        <div className="sub_title rounded">
          <div className="d-flex justify-content-center flex-column align-items-center py-3">
            <span className="card-top-icon mb-3">
              <i className="fa fa-ticket" aria-hidden="true"></i>
            </span>
            <h5>
              {item.title} ({item.ticketNumber})
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
