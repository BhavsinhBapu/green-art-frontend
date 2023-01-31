export const TicketBox = () => {
  return (
    <div className="col-12 my-2 ticket-card">
      <div className="card p-3 ">
        <a href="">
          <div className="row">
            <div className="col-md-8 ticket-card-inner">
              <h4 className="fw_600 text-dark p_color uppercase">#1</h4>
              <h6 className="fw_600 text-dark py-2">
                Title: dad adda adad adadad adad
              </h6>
            </div>
            <div className="col-md-4 p_color">
              <p>
                <b>
                  Status: <span className="badge bg-warning">Pending</span>
                </b>
              </p>
              <p>
                <b>Assign To:</b> <small>Not Assign</small>
              </p>
              <p>
                <b>Created At:</b> <small>4 days ago</small>
              </p>
              <p>
                <b>Last Reply:</b> <small>4 days ago</small>
              </p>
            </div>
            <hr />
            <div className="col-12">
              <p className="pt-3 p_color">
                <b>Last Message:</b>
                <br />
                <small></small>
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
