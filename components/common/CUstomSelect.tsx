import React from "react";
import Select from "react-select";

export const CUstomSelect = ({ options, isSearchable, placeholder }: any) => {
  return (
    <>
      <Select
        options={options}
        classNamePrefix={"custom-select"}
        isSearchable={isSearchable}
        placeholder={placeholder}
        onChange={(e) => {
          console.log(e, "eeeeeeeeeeeeee");
        }}
      />
    </>
  );
};
