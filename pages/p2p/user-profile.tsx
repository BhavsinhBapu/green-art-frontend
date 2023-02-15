import Footer from "components/common/footer";
import { P2pTopBar } from "components/P2P/P2pHome/TopBar";
import { UserProfileHeader } from "components/P2P/UserProfile/UserProfileHeader";

const UserProfile = () => {
  return (
    <>
      <div>
        <P2pTopBar />
        <UserProfileHeader />
      </div>
      <Footer />
    </>
  );
};

export default UserProfile;
