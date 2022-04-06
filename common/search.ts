import React, { Dispatch } from "react";
import _ from "lodash";

export const sortByPropertyAndDirection = async (
  arrayObject: any,
  property: string,
  direction: string,
  setArray: Dispatch<any>
) => {
  console.log(property, direction);
  const bool = direction === "desc" ? true : false;
  const sorted = _.orderBy(arrayObject, [property], [bool]);
  console.log(sorted);
  setArray(sorted);
};
