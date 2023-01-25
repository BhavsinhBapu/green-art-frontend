import Link from "next/link";
import { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";

export const Search = ({ searchFunction, linkName }: any) => {
  const [results, setResults] = useState([]);
  const [show, setshow] = useState(false);
  const onSearch = async (e: any) => {
    if (!e.target.value) {
      setResults([]);
      return;
    }
    const response = await searchFunction(e.target.value);
    setResults(response?.data);
  };
  return (
    <div className="row mb-4 mb-md-0">
      <div className="col-md-5 ml-auto">
        <div className="searchBox">
          <input
            type="text"
            onChange={onSearch}
            onFocus={() => {
              setshow(true);
            }}
            onBlur={() => {
              setshow(false);
            }}
          />
          <button>
            <MdOutlineSearch />
          </button>
          {results.length > 0 && show === true && (
            <div className="suggestions p-2 rounded">
              {results.map((result: any) => (
                <>
                  <Link href={`/${linkName}/` + result.post_id}>
                    <p className="p-2">{result?.title}</p>
                  </Link>
                </>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
