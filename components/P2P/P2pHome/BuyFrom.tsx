import { TfiHandPointRight } from "react-icons/tfi";

export const BuyFrom = ({ setBuyFrom }: any) => {
  return (
    <div className="col-12">
      <div className="shadow p-4 rounded">
        <div className="row">
          <div className="col-md-6">
            <div className="tableImg d-flex align-items-center">
              <img
                src="https://api-tradex.nftarttoken.xyz/images/avatars/yellow-hat.png"
                alt=""
              />
              {/* <h4 className="tableImg">
                      <b>F</b>
                    </h4> */}
              <h5>Chirik34</h5>
              <p className="px-3">479 orders</p>
              <p>100.00% completion</p>
            </div>
            <div className="row pt-4">
              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <p>Price</p>
                  <h6 className="pl-3 text-warning">323.0 BDT</h6>
                </div>
                <div className="d-flex align-items-center">
                  <p>Payment Time Limit</p>
                  <h6 className="pl-3">32 Minutes</h6>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="d-flex align-items-center">
                  <p>Available</p>
                  <h6 className="pl-3">23.440 USDT</h6>
                </div>
                <div className="d-flex align-items-center">
                  <p>Seller's Payment method</p>
                  <span className="badge badge-light ml-3 text-warning">
                    Nagad
                  </span>
                </div>
              </div>
              <div className="col-12">
                <div className="pt-5">
                  <h5>Terms and Conditions</h5>
                  <div className="d-flex align-items-center p2pTerms pt-3">
                    <TfiHandPointRight />
                    <p>
                      Include popular icons in your React projects easily with
                      react-icons.
                    </p>
                  </div>
                  <div className="d-flex align-items-center p2pTerms pt-3">
                    <TfiHandPointRight />
                    <p>
                      Include popular icons in your React projects easily with
                      react-icons.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <label>I want to pay</label>
            <div className="P2psearchBox position-relative">
              <input type="text" placeholder="233.0555 - 24.24240" />
              <button>
                All <span className="ml-3 text-muted">BDT</span>
              </button>
            </div>
            <label className="pt-3">I will receive</label>
            <div className="P2psearchBox position-relative">
              <input type="text" placeholder="0.00" />
              <button>
                <span className="ml-3 text-muted">USDT</span>
              </button>
            </div>
            <div className="mt-3 d-flex justify-content-center">
              <button
                onClick={() => setBuyFrom(false)}
                className="tableButton buyCancelButton">
                Cancel
              </button>
              <button className="tableButton ml-3">Buy USDT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
