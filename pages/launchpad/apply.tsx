import React, { useEffect, useState } from "react";
import { launchpadDynamicFromAction } from "state/actions/launchpad";

const Apply = () => {
  const [launchpadForm, setLaunchpadForm] = useState();
  useEffect(() => {
    launchpadDynamicFromAction();
  }, []);
  return <div>Apply</div>;
};

export default Apply;
