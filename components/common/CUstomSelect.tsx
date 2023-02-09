import React from "react";
import Select from "react-select";

export const CUstomSelect = ({ options }: any) => {
  return (
    <>
      <Select options={options} classNamePrefix={"custom-select"} />
    </>
  );
};
