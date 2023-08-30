import type { GetServerSideProps, NextPage } from "next";
import ProfileComp from "components/profile/profile";
import { parseCookies } from "nookies";

import { GetUserInfoByTokenServer } from "service/user";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
import useTranslation from "next-translate/useTranslation";
import Footer from "components/common/footer";
import { customPage, landingPage } from "service/landing-page";
import moment from "moment";
import ImageComponent from "components/common/ImageComponent";
import WalletOverviewSidebar from "layout/WalletOverviewSidebar";
import Link from "next/link";
const Profile: NextPage = ({ user, profileActivity }: any) => {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="page-wrap">
        <WalletOverviewSidebar />
        <div className="page-main-content pt-0">
          <div className="container-fluid">
            <div className="my-5 wallet-overview-header inner-section-margin-top">
              <div className="profle-are-top">
                <h3 className="section-top-title">Wallet Overview</h3>
              </div>
              <div>
                <Link href={`/`}>
                  <a className="wallet-overview-btn wallet-overview-btn-active ">
                    Deposit
                  </a>
                </Link>
                <Link href={`/`}>
                  <a className="wallet-overview-btn mx-3">
                    Withdraw
                  </a>
                </Link>
                <Link href={`/`}>
                  <a className="wallet-overview-btn">
                    Transaction History
                  </a>
                </Link>
              </div>
            </div>
            <div className="row py-3" style={{background: "var(--card-background-color)"}}>
                <div className="col-md-8">
                    left side
                </div>

                <div className="col-md-4">
                    <div>
                        <img src="https://admin.tradexpro.xyz/uploaded_file/uploads/6470b727aa3f51685108519.png" alt="" />
                    </div>
                </div>
            </div>

            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  await SSRAuthCheck(ctx, "/user/profile");
  const cookies = parseCookies(ctx);
  const response = await GetUserInfoByTokenServer(cookies.token);

  return {
    props: {
      user: response.user,
      profileActivity: response.activityLog,
    },
  };
};
export default Profile;
