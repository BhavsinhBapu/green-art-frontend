import React, { Dispatch } from "react";

export const handleSearch = (
  e: React.ChangeEvent<HTMLInputElement>,
  setSearch: Dispatch<any>
) => {
  e.preventDefault();
  setSearch(e.target.value);
};
