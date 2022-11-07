import React, { useEffect, useState } from "react";
import { launchpadDynamicFromAction } from "state/actions/launchpad";

const apply = () => {
  const [launchpadForm, setLaunchpadForm] = useState();
  useEffect(() => {
    launchpadDynamicFromAction();
  }, []);
  return <div>apply</div>;
};

export default apply;
