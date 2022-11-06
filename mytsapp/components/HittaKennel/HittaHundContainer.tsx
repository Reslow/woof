import GridWithCards from "./GridWithCards";
import ResultOfKennels from "./ResultOfKennels";
import hunddata from "../../assets/hundData.json";
import { useState, useEffect } from "react";

export default function HittaHundContainer() {
  const [selected, setSelected] = useState("");
  const [selectedDogs, setSelectedDogs] = useState("");
  const [breads, setBreads] = useState([]);
  const [listOfKennels, setListOfKennels] = useState([]);
  const [displayGroup, setDisplayGroup] = useState(false);
  const [displayBread, setDisplayBread] = useState(false);
  const [displayResult, setDisplayResult] = useState(false);

  useEffect(() => {
    const dogsofSelectedGroup = hunddata.filter(
      (grupp) => grupp.namn === selected
    );
    if (dogsofSelectedGroup.length > 0) {
      setBreads(dogsofSelectedGroup);
    } else return;
  }, [selected, setSelected]);

  useEffect(() => {
    if (breads.length > 0) {
      const raser = breads[0].raser;
      const kennelsOfBread = raser.filter((ras) => ras.namn === selectedDogs);
      setListOfKennels(kennelsOfBread);
    }
  }, [selectedDogs, setSelected]);

  useEffect(() => {
    if (displayBread) {
      setDisplayGroup(false);
      setDisplayResult(false);
    }
  }, [displayBread]);

  useEffect(() => {
    if (displayGroup) {
      setDisplayBread(false);
      setDisplayResult(false);
    }
  }, [displayGroup]);

  useEffect(() => {
    if (displayResult) {
      console.log("displayResilt");
      setDisplayBread(false);
    }
  }, [displayResult]);

  return (
    <>
      <button onClick={() => setDisplayGroup(true)}>börja</button>
      <fieldset className="mr-auto ml-auto flex justify-center h-50%">
        <div className="space-x-4 flex flex-row ">
          <div className="flex flex-col items-center">
            <label className="ml-3 block text-sm font-medium text-gray-700">
              Välj hundgrupp
            </label>
            <input
              name="hitta-kennel"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
          </div>
          <div className="flex flex-col  items-center">
            <label className="ml-3 block text-sm font-medium text-gray-700">
              Välj hundras
            </label>
            <input
              name="hitta-kennel"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
          </div>
          <div className="flex flex-col items-center">
            <label className="ml-3 block text-sm font-medium text-gray-700">
              resultat
            </label>
            <input
              name="hitta-kennel"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
          </div>
        </div>
      </fieldset>
      <div style={{ visibility: displayGroup ? "visible" : "hidden" }}>
        <h1> hundgrupp</h1>
        <GridWithCards
          hundData={hunddata}
          setSelected={setSelected}
          setDisplay={setDisplayBread}
        />
      </div>
      {breads[0] && (
        <div style={{ visibility: displayBread ? "visible" : "hidden" }}>
          <h2>välj Ras bland gruppen: {selected}</h2>
          <GridWithCards
            hundData={breads[0].raser}
            setSelected={setSelectedDogs}
            setDisplay={setDisplayResult}
          />
        </div>
      )}
      {listOfKennels[0] && (
        <div style={{ visibility: displayResult ? "visible" : "hidden" }}>
          <h2>resultat</h2>
          <ResultOfKennels listOfKennels={listOfKennels[0].kennlar} />
        </div>
      )}
    </>
  );
}
