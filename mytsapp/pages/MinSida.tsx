import React from "react";
import ProfileTemp from "../components/Profile/ProfileTemp";
import Panel from "../components/Panel/Panel";
import { useState } from "react";
export default function MinSida() {
  const [pages, setPages] = useState([]);
  return (
    <>
      <div className=" w-screen h-full flex ">
        <div className="bg-gray-500 w-1/4  shadow p-6">
          <Panel />
        </div>
        <div className="bg-green-500 w-3/4 ">
          <ProfileTemp pages={pages} setPages={setPages} />
        </div>
      </div>
    </>
  );
}
