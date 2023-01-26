import Link from "next/link";
import { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";

export const Search = ({ searchFunction, linkName }: any) => {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);

  const onChange = async (event: any) => {
    setValue(event.target.value);
    const response = await searchFunction(event.target.value);
    setResults(response.data);
  };

  const onSearch = (searchTerm: any) => {
    setValue(searchTerm);
  };

  return (
    <div className="row my-4 my-md-0">
      <div className="col-12">
        <div className="searchBox">
          <input type="text" value={value} onChange={onChange} />
          <button onClick={() => onSearch(value)}>
            <MdOutlineSearch />
          </button>
          <div className="suggestions rounded">
            {results
              .filter((item: any) => {
                const searchTerm = value.toLowerCase();
                const fullName = item.title.toLowerCase();

                return (
                  searchTerm &&
                  fullName.startsWith(searchTerm) &&
                  fullName !== searchTerm
                );
              })
              .map((item: any) => (
                <Link key={item.post_id} href={`/${linkName}/` + item.post_id}>
                  <p
                    onClick={() => onSearch(item.title)}
                    className="px-2 py-1"
                    key={item.title}>
                    {item.title}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
