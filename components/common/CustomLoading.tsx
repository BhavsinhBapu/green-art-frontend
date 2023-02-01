export const CustomLoading = () => {
  return (
    <div className="container">
      <div className="custom-loading-conatiner loading_box">
        <div className="d-flex justify-content-center">
          <div className="spinner-border loadingSpinner" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};
