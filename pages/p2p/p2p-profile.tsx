import Footer from "components/common/footer";
import { P2pTopBar } from "components/P2P/P2pHome/TopBar";
import { TradeDetails } from "components/P2P/P2pProfile/TradeDetails";
import { BlockTable } from "components/P2P/P2pProfile/BlockTable";
import { FeedbackTable } from "components/P2P/P2pProfile/FeedbackTable";
import { ProfileHeader } from "components/P2P/P2pProfile/ProfileHeader";
import { PaymentTable } from "components/P2P/P2pProfile/PaymentTable";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
import { GetServerSideProps } from "next";

const P2pProfile = () => {
  return (
    <>
      <div className="mb-5">
        <P2pTopBar />
        <ProfileHeader />
        <TradeDetails />
        <div className="userProfileBg mt-5 pb-5 pt-3">
          <PaymentTable />
          <FeedbackTable />
          {/* <BlockTable /> */}
        </div>
      </div>
      <Footer />
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  await SSRAuthCheck(ctx, "");

  return {
    props: {},
  };
};
export default P2pProfile;
