import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
import type { NextPage } from "next";

const Referral: NextPage = () => {
  return (
    <div className="referral-area">
      <div className="section-top-wrap mb-25">
        <div className="profle-are-top">
          <div className="container">
            <h2 className="section-top-title">Referrals</h2>
            <div className="invite-friends">
              <h4>Invite your friends</h4>
              <div className="input-group">
                <input
                  type="url"
                  className="form-control"
                  id="url"
                  defaultValue="http://localhost:8000/referral-reg?ref_code=261fb5b35b3b82"
                  readOnly
                />
                <button type="button" className="btn copy-url-btn">
                  <i className="fa fa-clone" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section-wrapper rounded-sm">
          <div className="rewards-inviter mb-25">
            <div className="single-item">
              <h4>Total Rewards</h4>
              <h2>
                0.00000000 <span />
              </h2>
            </div>
            <div className="single-item">
              <h4>Total Invited</h4>
              <h2>0</h2>
            </div>
          </div>
          <div className="referrals-table">
            <h4 className="section-title-medium">My Referrals</h4>
            <div className="table-responsive">
              <table
                className="table cp-user-custom-table table-borderless text-center dataTable no-footer"
                id="DataTables_Table_0"
              >
                <thead>
                  <tr>
                    <th
                      className="referral-level"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Level 1"
                    >
                      Level 1
                    </th>
                    <th
                      className="referral-level"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Level 2"
                    >
                      Level 2
                    </th>
                    <th
                      className="referral-level"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Level 3"
                    >
                      Level 3
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr id="" role="row" className="">
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td colSpan={3} />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="referrals-table">
            <h4 className="section-title-medium">My References</h4>
            <div className="table-responsive">
              <table className="table dataTable cp-user-custom-table table-borderless text-center">
                <thead>
                  <tr>
                    <th className="">Full Name</th>
                    <th className="">Email</th>
                    <th className="">Level</th>
                    <th className="">Joining Date</th>
                    <th className="">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={5} className="text-center">
                      <b>No Data available</b>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="my-earnings-table">
            <h4 className="section-title-medium">My Earnings</h4>
            <div className="table-responsive">
              <table className="table dataTable cp-user-custom-table table-borderless text-center">
                <thead>
                  <tr>
                    <th>Period</th>
                    <th>Commissions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={2} className="text-center">
                      <b>No Data available</b>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Referral.getInitialProps = async (ctx) => {
  await SSRAuthCheck(ctx, "/user/referral");
  return {};
};
export default Referral;
