import React, { useState, MouseEvent } from "react";
import EditPage from "./Layout/EditPage";
import EditTheme from "./Theme/EditTheme";
export default function EditProfileTopMenu() {
  const [toggleLayout, setToggleLayout] = useState(false);
  const [toggleTheme, setToggleTheme] = useState(false);

  return (
    <>
      <>
        <h2>Redigera profil</h2>

        <button
          type="button"
          className="flex mb-6  mt-6 ml-auto mr-auto self-center justify-center rounded-md border border-transparent bg-indigo-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={(e: MouseEvent<HTMLInputElement>) =>
            setToggleLayout(!toggleLayout)
          }
        >
          {toggleLayout ? "close edit" : "edit layout"}
        </button>
        {toggleLayout && <EditPage />}
        <button
          type="button"
          className="flex  mb-6 ml-auto mr-auto self-center justify-center rounded-md border border-transparent bg-indigo-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={(e: MouseEvent<HTMLInputElement>) =>
            setToggleTheme(!toggleTheme)
          }
        >
          {toggleTheme ? "close edit" : "edit theme"}
        </button>
        {toggleTheme && <EditTheme />}
      </>
    </>
  );
}
