import LaunchPad from "components/launchpad/LaunchPad";
import { SingleHero } from "components/launchpad/SingleHero";
import React from "react";

export default function viewAll() {
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
