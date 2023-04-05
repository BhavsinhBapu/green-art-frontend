import React, { useState } from "react";
import Select from "react-select";

export const CUstomSelect = ({
  options,
  isSearchable,
  placeholder,
  handleFunction,
  defaultValue,
  isMulti = false,
}: any) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
    handleFunction(selectedOption);
  };

  return (
    <>
      <Select
        options={options}
        classNamePrefix={"custom-select"}
        isSearchable={isSearchable}
        placeholder={placeholder}
        isMulti={isMulti}
        value={selectedOption}
        onChange={handleChange}
      />
    </>
  );
};
