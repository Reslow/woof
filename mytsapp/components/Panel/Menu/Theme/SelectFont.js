import Select from "../Select";

export default function SelectFont() {
  const fonts = [
    { id: 1, name: "Arial (sans-serif)" },
    { id: 2, name: "Verdana (sans-serif)" },
    { id: 3, name: "Tahoma (sans-serif)" },
    { id: 4, name: "Trebuchet MS (sans-serif)" },
    { id: 5, name: "Times New Roman (serif)" },
    { id: 6, name: "Georgia (serif)" },
    { id: 7, name: "CarolGaramond (serif)" },
    { id: 8, name: "Mason Heaney" },
    { id: 9, name: "Claudie Smitham" },
    { id: 10, name: "Emil Schaefer" },
  ];
  return (
    <>
      <h1>Select Font</h1>
      <Select items={fonts} />
    </>
  );
}
