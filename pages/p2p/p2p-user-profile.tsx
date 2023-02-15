import Footer from "components/common/footer";
import { P2pTopBar } from "components/P2P/P2pHome/TopBar";
import { TradeDetails } from "components/P2P/P2pUser/TradeDetails";
import { UserBlockTable } from "components/P2P/P2pUser/UserBlockTable";
import { UserFeedbackTable } from "components/P2P/P2pUser/UserFeedbackTable";
import { UserHeader } from "components/P2P/P2pUser/UserHeader";
import { UserPaymentTable } from "components/P2P/P2pUser/UserPaymentTable";

const P2pUserProfile = () => {
  return (
    <>
      <div className="mb-5">
        <P2pTopBar />
        <UserHeader />
        <TradeDetails />
        <div className="userProfileBg mt-5 pb-5 pt-3">
          <UserPaymentTable />
          <UserFeedbackTable />
          <UserBlockTable />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default P2pUserProfile;
