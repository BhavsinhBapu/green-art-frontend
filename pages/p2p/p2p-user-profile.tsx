import Footer from "components/common/footer";
import { P2pTopBar } from "components/P2P/P2pHome/TopBar";
import { TradeDetails } from "components/P2P/P2pUser/TradeDetails";
import { UserHeader } from "components/P2P/P2pUser/UserHeader";

const P2pUserProfile = () => {
  return (
    <>
      <div className="mb-5">
        <P2pTopBar />
        <UserHeader />
        <TradeDetails />
      </div>
      <Footer />
    </>
  );
};
export default P2pUserProfile;
