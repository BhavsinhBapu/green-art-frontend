export const AddPostSteep = () => {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-between">
            <p>Set Type & Price</p>
            <p className="px-3">Set Total Amount & Payment Method</p>
            <p>Set Remarks & Amount Response</p>
          </div>
          <div className="d-flex justify-content-between px-2 px-md-5 align-items-center mt-3">
            <div className="steepNumber">1</div>
            <div className="steepBar mx-2"></div>
            <div className="steepNumber">2</div>
            <div className="steepBar mx-2"></div>
            <div className="steepNumber">3</div>
          </div>
        </div>
      </div>
    </div>
  );
};
