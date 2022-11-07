import LaunchPad from "components/launchpad/LaunchPad";
import { SingleHero } from "components/launchpad/SingleHero";
import React, { useEffect, useState } from "react";
import { getLaunchpadListAction } from "state/actions/launchpad";

export default function viewAll() {
  const [launchpadList, setLaunchpadList] = useState([]);

  useEffect(() => {
    getLaunchpadListAction(setLaunchpadList);
  }, []);

  console.log(launchpadList);
  return (
    <div>
      <SingleHero />
      <div className="container">
        <LaunchPad />
        <LaunchPad />
        <LaunchPad />
        <LaunchPad />
      </div>
    </div>
  );
}
