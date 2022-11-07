import LaunchPad from "components/launchpad/LaunchPad";
import { SingleHero } from "components/launchpad/SingleHero";
import React, { useEffect, useState } from "react";
import { getLaunchpadListAction } from "state/actions/launchpad";

export default function viewAll() {
  const [launchpadList, setLaunchpadList]: any = useState([]);

  useEffect(() => {
    getLaunchpadListAction(setLaunchpadList);
  }, []);

  return (
    <div>
      <SingleHero />
      <div className="container">
        {launchpadList?.data?.map((item: any, index: number) => (
          <LaunchPad data={item} />
        ))}
      </div>
    </div>
  );
}
