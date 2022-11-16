import React, { useEffect, useState } from "react";
import TextColor from "./TextColor";
import BackgroundColor from "./BackgroundColor";
import SelectFont from "./SelectFont";
export default function EditTheme({ setTheme }) {
  const [selectedFont, setSelectedFont] = useState();
  const [textColor, setTextColor] = useState();
  const [bgColor, setBgColor] = useState();

  useEffect(() => {
    const theme = {
      textColor: textColor,
      bgColor: bgColor,
      font: selectedFont,
    };
    setTheme(theme);
  }, [bgColor, textColor, selectedFont]);
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
    </>
  );
}
