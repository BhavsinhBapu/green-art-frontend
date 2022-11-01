import { Breadcrumb } from "components/Breadcrumb";
import { SingleLaunchPad } from "components/launchpad/SingleLaunchPad";
import React from "react";

export default function singleLaunchPadPage() {
  return (
    <>
      <Breadcrumb leftButton={true} leftUrl="/launchpad" />
      <SingleLaunchPad />
    </>
  );
}
