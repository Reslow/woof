import React from "react";

import EditPage from "./Layout/EditPage";
import EditProfilePages from "./Layout/EditProfilePages";
import EditProfileTopMenu from "./EditProfileTopMenu";
import StartMenuButtons from "../StartMenuButtons";
import EditTheme from "./Theme/EditTheme";

export default function Menu() {
  return (
    <div>
      <div>
        <h2>Profile/pages</h2>
        <button
          type="button"
          className="flex mb-6  mt-6 ml-auto mr-auto self-center justify-center rounded-md border border-transparent bg-indigo-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Back
        </button>
      </div>
      <div className="flex flex-col bg-gray-700 p-4 rounded h-1/3 justify-between">
        {/* <StartMenuButtons /> */}
        {/* <EditProfileTopMenu /> */}
        {/* <EditProfilePages /> */}
        {/* <EditPage /> */}
        <EditTheme />
      </div>
    </div>
  );
}
