export const TicketFilter = () => {
  return (
    <div className="row mt-5">
      <div className="col-md-12">
        <form>
          <div className="row align-items-end">
            <div className="col-lg-3 col-md-6">
              <label>Select Project</label>
              <select name="project" className="form-control h-50">
                <option value="1">new project</option>
              </select>
            </div>
            <div className="col-lg-3 col-md-6 mt-3 mt-md-0">
              <label>Select Status</label>
              <select name="status" className="form-control h-50">
                <option value="1">Pending</option>
                <option value="2">Open</option>
                <option value="3">Close</option>
                <option value="4">Close Forever</option>
              </select>
            </div>
            <div className="col-lg-2 col-md-4 mt-3 mt-lg-0">
              <label>From</label>
              <input
                className="form-control h-50"
                type="date"
                name="from_date"
                value=""
              />
            </div>
            <div className="col-lg-2 col-md-4 mt-3 mt-lg-0">
              <label>To</label>
              <input
                className="form-control h-50"
                type="date"
                name="to_date"
                value=""
              />
            </div>
            <div className="col-lg-2 col-md-4 mt-3 mt-lg-0">
              <button
                type="submit"
                className="btn btn_ticket_search w-100 rounded">
                Filter Ticket
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
