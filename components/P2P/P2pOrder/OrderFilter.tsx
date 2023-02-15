import { CUstomSelect } from "components/common/CUstomSelect";
import { FiDownload } from "react-icons/fi";
import { TbFileTime } from "react-icons/tb";

export const OrderFilter = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-2 col-md-3 col-6 mt-4">
          <label>Coins:</label>
          <CUstomSelect
            options={options}
            isSearchable={false}
            placeholder="All Coins"
          />
        </div>
        <div className="col-lg-2 col-md-3 col-6 mt-4">
          <label>Order Type:</label>
          <CUstomSelect
            options={options}
            isSearchable={false}
            placeholder="Buy/Sell"
          />
        </div>
        <div className="col-lg-2 col-md-3 col-6 mt-4">
          <label>Status:</label>
          <CUstomSelect
            options={options}
            isSearchable={false}
            placeholder="All Status"
          />
        </div>
        <div className="col-lg-2 col-md-3 col-6 mt-4">
          <label>From:</label>
          <input className="dateFilterInput" type="date" name="to_date" />
        </div>
        <div className="col-lg-2 col-md-3 col-6 mt-4">
          <label>To:</label>
          <input className="dateFilterInput" type="date" name="to_date" />
        </div>
        <div className="col-lg-2 col-md-3 col-6 d-flex justify-content-end">
          <button className="border-0 mt-5 text-warning orderFilterNoButton">
            Reset filter
          </button>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <div className="orderDownTimeButton d-flex justify-content-end">
            <button className="mr-3">
              <TbFileTime />
            </button>
            <button>
              <FiDownload />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
