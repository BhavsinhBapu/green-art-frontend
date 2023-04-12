import { NoItemFound } from "components/NoItemFound/NoItemFound";
import { useState } from "react";
import { GoPlus } from "react-icons/go";

export const FeedbackTable = ({ details }: any) => {
  const [active, setActive] = useState(0);
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
                    <a
                      className={`${active === 0 && "p2pOrderTabListActive"}`}
                      onClick={() => {
                        setActive(0);
                      }}
                    >
                      All
                    </a>
                  </li>
                  <li>
                    <a
                      className={`${active === 1 && "p2pOrderTabListActive"}`}
                      onClick={() => {
                        setActive(1);
                      }}
                    >
                      Positive
                    </a>
                  </li>
                  <li>
                    <a
                      className={`${active === 2 && "p2pOrderTabListActive"}`}
                      onClick={() => {
                        setActive(2);
                      }}
                    >
                      Negative
                    </a>
                  </li>
                </ul>
                {active === 0 && (
                  <>
                    {details?.feedback_list?.length === 0 && <NoItemFound />}
                    <div className="p-4 row">
                      {details?.feedback_list?.map(
                        (list: any) =>
                          list.feedback && (
                            <div className="single-feedback col-sm-12 col-md-6">
                              <h3>{list?.feedback}</h3>
                              <p>
                                <span className="feedback-status negetive">
                                  active
                                </span>
                              </p>
                            </div>
                          )
                      )}
                    </div>
                  </>
                )}
                {active === 1 && (
                  <>
                    {details?.positive_feedback_list?.length === 0 && (
                      <NoItemFound />
                    )}
                    <div className="p-4 row">
                      {details?.positive_feedback_list?.map(
                        (list: any) =>
                          list.feedback && (
                            <div className="single-feedback col-sm-12 col-md-6">
                              <h3>{list?.feedback}</h3>
                              <p>
                                <span className="feedback-status negetive">
                                  active
                                </span>
                              </p>
                            </div>
                          )
                      )}
                    </div>
                  </>
                )}
                {active === 2 && (
                  <>
                    {details?.negative_feedback_list?.length === 0 && (
                      <NoItemFound />
                    )}
                    <div className="p-4 row">
                      {details?.negative_feedback_list?.map(
                        (list: any) =>
                          list.feedback && (
                            <div className="single-feedback col-sm-12 col-md-6">
                              <h3>{list?.feedback}</h3>
                              <p>
                                <span className="feedback-status negetive">
                                  active
                                </span>
                              </p>
                            </div>
                          )
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
