import Navbar from "components/common/navbar";
const index = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      <div className="cp-user-main-wrapper">{children}</div>
    </div>
  );
};

export default index;
