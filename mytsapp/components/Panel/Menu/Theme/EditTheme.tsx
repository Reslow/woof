import React from "react";

import TextColor from "./TextColor";
import BackgroundColor from "./BackgroundColor";
import SelectFont from "./SelectFont";
export default function EditTheme() {
  return (
    <>
      <h1>Edit Theme</h1>
      <BackgroundColor />
      <TextColor />
      <SelectFont />
      <button
        type="button"
        className="flex mb-6  mt-6 ml-auto mr-auto self-center justify-center rounded-md border border-transparent bg-indigo-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        save
      </button>
    </>
  );
}
