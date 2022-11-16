import ResultOfKennels from "./ResultOfKennels";
import { useState, useEffect } from "react";
import SelectGroup from "./SelectGroup";
import SelectBreed from "./SelectBreed";

export default function HittaHundContainer({
  kennelList,
  breedList,
  groupList,
}) {
  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedBreed, setSelectedBreed] = useState("");

  const [breads, setBreads] = useState([]);
  const [listOfKennels, setListOfKennels] = useState([]);
  const [displayGroup, setDisplayGroup] = useState(false);
  const [displayBread, setDisplayBread] = useState(false);
  const [displayResult, setDisplayResult] = useState(false);

  useEffect(() => {
    const breeds = breedList.filter((item) => item.groupId === selectedGroup);
    setBreads(breeds);
  }, [selectedGroup]);

  useEffect(() => {
    const kennelsThatMatches = kennelList.filter(
      (item) => item.breadname === selectedBreed
    );
    setListOfKennels(kennelsThatMatches);
    console.log("check", kennelsThatMatches);
  }, [selectedBreed]);

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
      setDisplayBread(false);
      setDisplayGroup(false);
    }
  }, [displayResult]);

  return (
    <>
      <button onClick={() => setDisplayGroup(true)}>börja</button>
      <div className="flex flex-col align-top">
        <div style={{ visibility: displayGroup ? "block" : "none" }}>
          <h1> hundgrupp</h1>
          <SelectGroup
            hundData={groupList}
            setSelectedGroup={setSelectedGroup}
            setDisplay={setDisplayBread}
          />
        </div>

        {breads[0] && (
          <div style={{ visibility: displayBread ? "block" : "none" }}>
            <h2>välj Ras bland gruppen: {selectedGroup}</h2>
            <SelectBreed
              hundData={breedList}
              setSelectedBreed={setSelectedBreed}
              setDisplay={setDisplayResult}
            />
          </div>
        )}
        {listOfKennels[0] && (
          <div style={{ visibility: displayResult ? "block" : "none" }}>
            <h2>resultat</h2>
            <ResultOfKennels listOfKennels={listOfKennels} />
          </div>
        )}
      </div>
    </>
  );
}
