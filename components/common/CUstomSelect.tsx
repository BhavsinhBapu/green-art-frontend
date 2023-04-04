import React from "react";
import Select from "react-select";

export const CUstomSelect = ({
  options,
  isSearchable,
  placeholder,
  handleFunction,
}: any) => {
  return (
    <>
      <Select
        options={options}
        classNamePrefix={"custom-select"}
        isSearchable={isSearchable}
        placeholder={placeholder}
        onChange={handleFunction}
      />
    </>
  );
};
