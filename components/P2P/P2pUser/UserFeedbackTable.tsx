import { NoItemFound } from "components/NoItemFound/NoItemFound";
import { GoPlus } from "react-icons/go";

export const UserFeedbackTable = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="paymentMethodBox mt-4 rounded shadow-sm">
            <div className="row">
              <div className="col-12">
                <div className="p-4">
                  <h5 className="pb-4">Feedback</h5>
                  <h5>0.00%</h5>
                  <p>(0) Reviews</p>
                </div>
                <ul className="d-flex p2pTabList py-3 tableRow userProfileBg px-4">
                  <li>
                    <a href="">All</a>
                  </li>
                  <li>
                    <a className="p2pOrderTabListActive" href="">
                      Positive (0)
                    </a>
                  </li>
                  <li>
                    <a href="">Negative(0)</a>
                  </li>
                </ul>
                <div className="p-4">
                  <NoItemFound />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
