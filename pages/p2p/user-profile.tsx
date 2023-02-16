import Footer from "components/common/footer";
import { P2pTopBar } from "components/P2P/P2pHome/TopBar";
import { UserDataTable } from "components/P2P/UserProfile/UserDataTable";
import { UserProfileHeader } from "components/P2P/UserProfile/UserProfileHeader";
import { UserTaskCard } from "components/P2P/UserProfile/UserTaskCard";

const UserProfile = () => {
  return (
    <>
      <div className="mb-5">
        <P2pTopBar />
        <UserProfileHeader />
        <UserTaskCard />
        <UserDataTable />
      </div>
      <Footer />
    </>
  );
};

export default UserProfile;
