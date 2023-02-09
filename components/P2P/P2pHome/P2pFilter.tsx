import { CUstomSelect } from "components/common/CUstomSelect";
import { HiRefresh } from "react-icons/hi";

export const P2pFilter = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <label>Amount</label>
          <div className="P2psearchBox position-relative">
            <input type="text" placeholder="Enter amount EUR" />
            <button>Search</button>
          </div>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-md-2 mt-3">
              <div className="form-group p2pSelectFilter">
                <label> Fiat:</label>
                <CUstomSelect options={options} />
              </div>
            </div>
            <div className="col-md-2 mt-3">
              <div className="form-group p2pSelectFilter">
                <label> Payment:</label>
                <CUstomSelect options={options} />
              </div>
            </div>
            <div className="col-md-3 mt-3">
              <div className="form-group p2pSelectFilter">
                <label>Available Region(s):</label>
                <CUstomSelect options={options} />
              </div>
            </div>
            <div className="col-md-5 mt-3 mt-md-5 filterButton">
              <button data-toggle="dropdown" aria-expanded="false">
                <HiRefresh className="mr-2" />
                Refresh
              </button>
              <div className="dropdown-menu mt-1">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </div>
              <label></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
