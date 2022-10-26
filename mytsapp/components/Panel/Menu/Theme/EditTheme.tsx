import React, { useEffect, useState } from "react";

import TextColor from "./TextColor";
import BackgroundColor from "./BackgroundColor";
import SelectFont from "./SelectFont";
export default function EditTheme() {
  const [selectedFont, setSelectedFont] = useState<{
    name: string;
  }>();
  const [textColor, setTextColor] = useState<{
    color: string;
  }>();
  const [bgColor, setBgColor] = useState<{
    color: string;
  }>();
  return (
    <>
      <h1>Edit Theme</h1>
      <BackgroundColor setBgColor={setBgColor} />
      <>
        Bakgrundsfärg:
        <div style={{ backgroundColor: `${bgColor}` }}>color</div>
      </>

      <TextColor setTextColor={setTextColor} />
      <>
        Textfärg:
        <div style={{ backgroundColor: `${textColor}` }}>färg</div>
      </>

      <SelectFont setSelectedFont={setSelectedFont} />
      <>Typsnitt: {selectedFont && selectedFont.name}</>
      <button
        type="button"
        className="flex mb-6  mt-6 ml-auto mr-auto self-center justify-center rounded-md border border-transparent bg-indigo-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        save
      </button>
    </>
  );
}
