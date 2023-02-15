import { CUstomSelect } from "components/common/CUstomSelect";
import { BsQuestionSquareFill } from "react-icons/bs";

export const AddPostThree = ({ setAddSteep }: any) => {
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
            <label> Terms [Optional]</label>
            <div className="P2psearchBox position-relative">
              <textarea placeholder="Terms will be displayed the counterparty"></textarea>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6">
            <label> Auto-reply [Optional]</label>
            <div className="P2psearchBox position-relative">
              <textarea placeholder="Terms will be displayed the counterparty"></textarea>
            </div>
          </div>
          <div className="col-12 mt-4">
            <label className="d-block pb-0 mb-0">Counterparty Conditions</label>
            <span>
              Adding counterparty requirements will reduce the exposure of your
              Ad
            </span>
            <div className="row">
              <div className="col-md-6 col-lg-3 mt-3">
                <div className="adFromCheckBox">
                  <input type="radio" name="optradio" />
                  <p>Floating</p>
                  <span className="badge badge-secondary px-3">0</span>
                  <p>Day[s] ago</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mt-3">
                <div className="adFromCheckBox">
                  <input type="radio" name="optradio" />
                  <p>Holdings more than</p>
                  <span className="badge badge-secondary px-3">0.01</span>
                  <p>
                    <b>BTC</b>
                  </p>
                </div>
              </div>
            </div>
            <label className="mt-4">Available Region[s]</label>
            <div className="col-md-3 p-0">
              <CUstomSelect
                options={options}
                isSearchable={false}
                placeholder="All Region[s]"
              />
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
        <p></p>
        <div>
          <button onClick={() => setAddSteep("steepTwo")} className=" py-2">
            Previous
          </button>
          <button
            onClick={() => setAddSteep("steepTwo")}
            className=" py-2 buySellBoxActive ml-2">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};
