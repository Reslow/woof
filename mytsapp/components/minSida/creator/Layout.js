import React from "react";
import ProfileTemp from "./Profile/ProfileTemp";
import Panel from "./Panel/Panel";
export default function Layout() {
  return (
    <>
      <div className=" w-screen h-full flex ">
        <div id="panel" className="bg-gray-500 w-1/4  shadow p-6">
          <Panel />
        </div>
        <div id="content" classNames="bg-green-500 w-3/4 ">
          <ProfileTemp />
        </div>
      </div>
    </>
  );
}
