import { MdOutlineSearch } from "react-icons/md";

export const Search = () => {
  return (
    <div className="row mb-4 mb-md-0">
      <div className="col-md-5 ml-auto">
        <div className="searchBox">
          <input type="text" />
          <button>
            <MdOutlineSearch />
          </button>
          <div className="suggestions p-2 rounded">
            <p className="px-2">dfsfs</p>
            <p className="px-2">dfsfs</p>
            <p className="px-2">dfsfs</p>
            <p className="px-2">dfsfs</p>
            <p className="px-2">dfsfs</p>
          </div>
        </div>
      </div>
    </div>
  );
};
