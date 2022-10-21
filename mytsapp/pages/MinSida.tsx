import React from "react";
import ProfileTemp from "../components/Profile/ProfileTemp";
import Panel from "../components/Panel/Panel";
export default function MinSida() {
  return (
    <>
      <div className=" w-screen h-full flex ">
        <div className="bg-gray-500 w-1/4  shadow p-6">
          <Panel />
        </div>
        <div className="bg-green-500 w-3/4 ">
          <ProfileTemp />
        </div>
      </div>
    </>
  );
}
