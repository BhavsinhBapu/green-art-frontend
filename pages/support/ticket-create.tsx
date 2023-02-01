const TicketCreate = () => {
  return (
    <section className="my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="ticket_create_box p-4 rounded">
              <h4 className="fw_600">Create New Ticket</h4>
              <form>
                <input type="hidden" />
                <div className="p_color pt-4">
                  <label>Choose Project:</label>
                  <select
                    id="inputState"
                    className="w-100 px-2 py-2 rounded search-field">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>

                  <label className="pt-4">Title :</label>
                  <input
                    className="w-100 px-2 py-2 rounded search-field"
                    type="text"
                    name="title"
                  />

                  <label className="pt-4">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    className="w-100 px-2 py-2 rounded search-field"></textarea>

                  <label className="pt-4">Purchase Code (optional) :</label>
                  <input
                    className="w-100 px-2 py-2 rounded search-field"
                    type="text"
                    name="purchase_code"
                    value=""
                  />
                  <label className="pt-4">Attach File:</label>
                  <div className="input-group">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input "
                        id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01"
                      />
                      <label className="custom-file-label">Choose file</label>
                    </div>
                  </div>

                  <button className="btn btn-warning fw-bolder text-white mt-4 px-4 py-2 rounded">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TicketCreate;
