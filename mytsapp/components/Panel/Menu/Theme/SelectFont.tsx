import React, { useEffect, useState } from "react";

import Select from "../Select";

export default function SelectFont({ setSelectedFont }) {
  const [selected, setSelected] = useState<{ name: string }>({
    name: "Arial (sans-serif)",
  });
  useEffect(() => {
    setSelectedFont(selected);
  }, [setSelected]);
  const fonts = [
    { name: "Arial (sans-serif)" },
    { name: "Verdana (sans-serif)" },
    { name: "Tahoma (sans-serif)" },
    { name: "Trebuchet MS (sans-serif)" },
    { name: "Times New Roman (serif)" },
    { name: "Georgia (serif)" },
    { name: "CarolGaramond (serif)" },
    { name: "Mason Heaney" },
    { name: "Claudie Smitham" },
    { name: "Emil Schaefer" },
  ];
  return (
    <>
      <h1>Select Font</h1>
      <Select items={fonts} selected={selected} setSelected={setSelected} />
    </>
  );
}
