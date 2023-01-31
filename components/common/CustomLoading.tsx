export const CustomLoading = () => {
  return (
    <div className="custom-loading-conatiner">
      <div className="d-flex justify-content-center">
        <div className="spinner-border loadingSpinner" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};
