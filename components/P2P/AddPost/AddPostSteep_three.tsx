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
              <textarea placeholder=""></textarea>
            </div>
          </div>

          <div className="col-12 mt-4"></div>
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
          <button onClick={() => setAddSteep("steepOne")} className=" py-2">
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
