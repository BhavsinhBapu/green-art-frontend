import Footer from "components/common/footer";

const AddPaymentMethod = () => {
  return (
    <>
      <div className="container paymentMethodBox rounded shadow-sm my-5">
        <div className="row">
          <div className="col-md-6 mx-auto py-3 py-md-5">
            <div className="paymentBox d-flex align-items-center border-0">
              <div></div>
              <h6>Bank Transfer (Brazil)</h6>
            </div>
            <div className="my-4">
              <label>Full name of receiver</label>
              <h6>ISRAFIL HOSSAIN</h6>
            </div>
            <div className="">
              <label>Account number</label>
              <div className="P2psearchBox position-relative">
                <input
                  type="text"
                  placeholder="Enter your bank account number"
                />
              </div>
            </div>
            <div className="mt-4">
              <label>CPF / CNPJ</label>
              <div className="P2psearchBox position-relative">
                <input
                  type="text"
                  placeholder="Enter Brazilian valid document"
                />
              </div>
            </div>
            <div className="mt-4">
              <label>Bank Name</label>
              <div className="P2psearchBox position-relative">
                <input type="text" placeholder="Enter the name of your bank" />
              </div>
            </div>
            <div className="mt-4">
              <label>Bank agency</label>
              <div className="P2psearchBox position-relative">
                <input
                  type="text"
                  placeholder="Enter the name of your bank agency"
                />
              </div>
            </div>
            <div className="my-4">
              <label>Type of transfer</label>
              <div className="P2psearchBox position-relative">
                <input
                  type="text"
                  placeholder="Please filled with TED/DOC/PIX"
                />
              </div>
            </div>
            <div className="mt-5">
              <h6>Tips</h6>
              <p className="p_color ">
                Tips: Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi corporis cupiditate nam voluptatum modi? Nihil unde sint
                modi excepturi nesciunt quas necessitatibus minus quis error
                esse! Incidunt consequuntur sint tempora?
              </p>
            </div>
            <div className="mt-4 d-flex justify-content-center">
              <button className="tableButton buyCancelButton px-3 px-sm-5">
                Cancel
              </button>
              <button className="tableButton ml-3 px-3 px-sm-5">Confirm</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default AddPaymentMethod;
