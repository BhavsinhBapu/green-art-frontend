import BackButton from "components/P2P/BackButton";
import SectionLoading from "components/common/SectionLoading";
import Footer from "components/common/footer";
import { STAKING_TERMS_TYPE_STRICT } from "helpers/core-constants";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { TfiHandPointRight } from "react-icons/tfi";
import { GetOfferlistDetails } from "service/staking";
import { GetOfferlistDetailsAction } from "state/actions/staking";

const lockedStaking = () => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState<any>();
  const router = useRouter();
  const { uid } = router.query;
  useEffect(() => {
    uid && GetOfferlistDetailsAction(uid, setDetails, setLoading);
  }, [uid]);
  return (
    <div className="">
      <div className="container">
        {loading ? (
          <SectionLoading />
        ) : (
          <div className="col-12 p-5 boxShadow mb-5">
            <div className="mt-3 mb-3">
              <BackButton />
            </div>
            <h1 className="ny-3">Locked staking</h1>
            <hr />
            <div className="rounded">
              <div className="row">
                <div className="col-md-6">
                  <div className="tableImg d-flex align-items-center">
                    <img
                      src="https://api-tradex.nftarttoken.xyz/images/avatars/yellow-hat.png"
                      alt=""
                    />
                    <h5>{details?.coin_type}</h5>
                  </div>
                  <div className="row pt-6 mt-3">
                    <div className="col-lg-12">
                      <div className="est-price">
                        <p>Type</p>
                        <h6 className="pl-3 text-warning">
                          {details?.terms_type === STAKING_TERMS_TYPE_STRICT
                            ? "Locked"
                            : "Flexible"}
                        </h6>
                      </div>
                      <div className="est-price">
                        <p>Duration</p>
                        <h6 className="pl-3">{details?.period} Days</h6>
                      </div>
                      <div className="est-price">
                        <p>Maximum Investment</p>
                        <h6 className="pl-3">{details?.maximum_investment}</h6>
                      </div>
                      <div className="est-price">
                        <p>Minimum Investment</p>
                        <h6 className="pl-3">{details?.minimum_investment}</h6>
                      </div>

                      <div className="est-price">
                        <p>Minimum Maturity Period</p>
                        <h6 className="pl-3">
                          {details?.minimum_maturity_period}
                        </h6>
                      </div>
                      <div className="est-price">
                        <p>Interest Period</p>
                        <h6 className="pl-3">12 Days</h6>
                      </div>
                      <div className="est-price">
                        <p>End Date</p>
                        <h6 className="pl-3">12 November 2023</h6>
                      </div>
                      <div className="est-price">
                        <p>Redemption Period</p>
                        <h6 className="pl-3">2days</h6>
                      </div>
                      <div className="est-price mt-5">
                        <h4>Est APY</h4>
                        <h4 className="text-success">9.78%</h4>
                      </div>
                      <div className="est-price mt-5">
                        <h4>Estimated </h4>
                        <h4 className="text-success">9.78%</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <form className="col-md-6">
                  <div>
                    <label>Lock Amount</label>
                    <div className="P2psearchBox position-relative">
                      <input
                        type="text"
                        placeholder="233.0555 - 24.24240"
                        defaultValue={0}
                      />
                      <p className="limitBalance my-2">
                        Available Amount 500000.3215
                      </p>
                      <button>
                        <span className="ml-3 text-muted">EOS</span>
                      </button>
                    </div>
                  </div>
                  <div className="">
                    <div className="pt-5">
                      <h5>Terms and Conditions</h5>
                      <div className="d-flex align-items-center p2pTerms pt-3">
                        <TfiHandPointRight />

                        <p>
                          Include popular icons in your React projects easily
                          with react-icons.
                        </p>
                      </div>
                      <div className="d-flex align-items-center p2pTerms pt-3">
                        <TfiHandPointRight />
                        <p>
                          Include popular icons in your React projects easily
                          with react-icons.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 d-flex justify-content-center">
                    <button
                      className="primary-btn-outline w-100 "
                      type="submit"
                    >
                      Buy
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async ({
  params,
}: any) => {
  return { props: {} };
};
export default lockedStaking;
