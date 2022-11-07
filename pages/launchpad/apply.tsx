import { FORM_INPUT_TEXT } from "helpers/core-constants";
import React, { useEffect, useState } from "react";
import { launchpadDynamicFromAction } from "state/actions/launchpad";

const Apply = () => {
  const [launchpadForm, setLaunchpadForm] = useState([]);
  useEffect(() => {
    launchpadDynamicFromAction(setLaunchpadForm);
  }, []);
  return (
    <div className="container">
      {JSON.stringify(launchpadForm)}
      <input type="number" className="form-control" id="amount-one" />
      {launchpadForm?.map(
        (item: any) =>
          item.type === FORM_INPUT_TEXT && (
            <input type="number" className="form-control" id="amount-one" />
          )
      )}
    </div>
  );
};

export default Apply;
