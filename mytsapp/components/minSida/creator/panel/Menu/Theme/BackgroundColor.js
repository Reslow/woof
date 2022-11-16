import React from "react";

import { CirclePicker } from "react-color";
export default function BackgroundColor({ setBgColor }) {
  return (
    <>
      <h1>Select background color</h1>
      <CirclePicker onChange={(e) => setBgColor(e.hex)} />
    </>
  );
}
