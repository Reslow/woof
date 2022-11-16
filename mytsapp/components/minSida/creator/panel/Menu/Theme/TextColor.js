import React from "react";

import { CirclePicker } from "react-color";
export default function TextColor({ setTextColor }) {
  return (
    <>
      <h1>Select Textcolor</h1>
      <CirclePicker onChange={(e) => setTextColor(e.hex)} />
    </>
  );
}
