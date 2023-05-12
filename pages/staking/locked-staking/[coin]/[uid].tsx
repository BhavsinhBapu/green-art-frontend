import BackButton from "components/P2P/BackButton";
import SectionLoading from "components/common/SectionLoading";
import Footer from "components/common/footer";
import { STAKING_TERMS_TYPE_STRICT } from "helpers/core-constants";
import { SSRAuthCheck } from "middlewares/ssr-authentication-check";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { TfiHandPointRight } from "react-icons/tfi";
import { GetOfferlistDetails } from "service/staking";
import {
  GetOfferlistDetailsAction,
  InvesmentSubmitAction,
} from "state/actions/staking";

const LockedStaking = () => {
  const [loading, setLoading] = useState(true);
  const [buttonLoading, setbuttonLoading] = useState(true);
  const [isChecked, setisChecked] = useState(false);

  const [amount, setAmount] = useState(0);
  const [autoRenew, setAutoRenew] = useState(0);
  const [details, setDetails] = useState<any>();
  const router = useRouter();
  const { uid } = router.query;
  const handleCheckboxChange = (event: any) => {
    setisChecked(event.target.checked);
  };
  const handleAutoRenewChange = (event: any) => {
    if (event.target.checked) {
      setAutoRenew(1);
    } else {
      setAutoRenew(0);
    }
  };
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
                          {details?.minimum_maturity_period} Day
                        </h6>
                      </div>

                      <div className=" mt-5">
                        <h4>Enable Auto Renew</h4>
                        <label className="switch">
                          <input
                            type="checkbox"
                            checked={autoRenew === 0 ? false : true}
                            name="auto_renew_status"
                            onChange={handleAutoRenewChange}
                          />
                          <span className="slider round"></span>
                        </label>
                      </div>
                      <div className="est-price mt-5">
                        <h4>User Minimum Holding Amount</h4>
                        <h4 className="text-success">
                          {details?.user_minimum_holding_amount}
                        </h4>
                      </div>
                      <div className="est-price mt-5">
                        <h4>Offer Percentage </h4>
                        <h4 className="text-success">
                          {details?.offer_percentage}%
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <form className="col-md-6">
                  <div>
                    <label>Lock Amount</label>
                    <div className="P2psearchBox position-relative">
                      <input
                        type="number"
                        placeholder=""
                        defaultValue={amount}
                        onChange={(e: any) => {
                          setAmount(e.target.value);
                        }}
                      />
                      {/* <p className="limitBalance my-2">
                        Available Amount 500000.3215
                      </p> */}
                      <button>
                        <span className="ml-3 text-muted">
                          {details?.coin_type}
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="">
                    <div className="pt-5">
                      <h5>Terms and Conditions</h5>
                      <div
                        dangerouslySetInnerHTML={{
                          // __html: clean(details.description),
                          __html: details?.terms_condition,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="form-group mt-2">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="agreeCheck"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      <label className="form-check-label" htmlFor="agreeCheck">
                        I agree to the terms and conditions
                      </label>
                    </div>
                  </div>
                  <div className="mt-3 d-flex justify-content-center">
                    <button
                      className="primary-btn-outline w-100 "
                      type="button"
                      disabled={isChecked ? false : true}
                      onClick={() => {
                        InvesmentSubmitAction(
                          uid,
                          autoRenew,
                          amount,
                          setbuttonLoading,
                          router
                        );
                      }}
                    >
                      {buttonLoading ? "Please wait" : "Procced"}
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
export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  await SSRAuthCheck(ctx, "/staking");

  return {
    props: {},
  };
};
export default LockedStaking;
