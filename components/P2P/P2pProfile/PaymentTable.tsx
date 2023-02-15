import { GoPlus } from "react-icons/go";

export const PaymentTable = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <ul className="d-flex p2pTabList py-3 tableRow">
            <li>
              <a href="">P2P Payment Methods</a>
            </li>
            <li>
              <a className="p2pOrderTabListActive" href="">
                Feedback (0)
              </a>
            </li>
            <li>
              <a href="">Blocked User</a>
            </li>
          </ul>
        </div>
        <div className="col-12">
          <div className="paymentMethodBox p-4 mt-3 rounded shadow-sm">
            <div className="row d-flex align-items-center justify-content-between">
              <div className="col-md-7">
                <h5>P2P Payment Methods</h5>
                <p className="pt-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officiis temporibus inventore architecto magni aperiam hic
                  fuga accusamus numquam laborum placeat?
                </p>
              </div>
              <div className="col-md-5 text-right">
                <button className="orderFilterNoButton border-0 text-warning shadow-sm rounded px-3 ml-0 ml-md-4 mt-4 mt-md-0 ">
                  <GoPlus className="mr-2" /> Add a payment method
                </button>
              </div>
              <div className="col-12 ">
                <div className="paymentMethodSubBox rounded mt-4">
                  <div className="userProfileBg px-3 py-2 mb-3 d-flex align-items-center justify-content-between">
                    <div className="paymentBox d-flex align-items-center border-0">
                      <div></div>bKash
                    </div>
                    <div>
                      <a href="" className="paymentBox border-0">
                        <b>Edit</b>
                      </a>
                      <a href="" className="paymentBox border-0 ml-4">
                        <b>Delete</b>
                      </a>
                    </div>
                  </div>
                  <div className="p-3">
                    <p>bKash Wallet Number</p>
                    <h6>01989-877876</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
