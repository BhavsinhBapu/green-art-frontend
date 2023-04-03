import { CUstomSelect } from "components/common/CUstomSelect";
import { BsQuestionSquareFill } from "react-icons/bs";

export const AddPostTwo = ({ setAddStep }: any) => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className="col-12 mt-4">
      <div className="buySellAddBox px-4 py-5 rounded">
        <div className="row">
          <div className="col-md-6">
            <label> Total Amount:</label>
            <div className="P2psearchBox position-relative">
              <input type="text" placeholder="0.00" />
              <button>
                <span className="ml-3 text-muted">USDT</span>
              </button>
            </div>
          </div>

          <div className="col-12 mt-4">
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <label> Order Limit:</label>
                <div className="P2psearchBox position-relative">
                  <input type="text" placeholder="0.00" />
                  <button>
                    <span className="ml-3 text-muted">USDT</span>
                  </button>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <label></label>
                <div className="P2psearchBox position-relative mt-2">
                  <input type="text" placeholder="0.00" />
                  <button>
                    <span className="ml-3 text-muted">USDT</span>
                  </button>
                </div>
              </div>
              <div className="col-12 mt-4">
                <label className="d-block pb-0 mb-0">Payment Method</label>
                <span>Select up to 5 payment methods</span>
                <div className="col-md-4 p-0">
                  <CUstomSelect
                    options={options}
                    isSearchable={false}
                    placeholder="Add"
                  />
                </div>
              </div>
              <div className="col-12 mt-4">
                <label>Payment Time Limit</label>
                <div className="col-md-3 p-0">
                  <CUstomSelect
                    options={options}
                    isSearchable={false}
                    placeholder="15 min"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 adFromHelp">
        <a href="">
          <BsQuestionSquareFill className="shadow" />
          Help & Guide
        </a>
      </div>
      <div className="addPostNextButton mt-3">
        <p className="d-flex align-items-center">
          Reserved Fee <h6> -- USDT</h6>
        </p>
        <div>
          <button onClick={() => setAddStep("stepOne")} className=" py-2">
            Previous
          </button>
          <button
            onClick={() => setAddStep("stepThree")}
            className=" py-2 buySellBoxActive ml-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
