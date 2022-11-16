import React, { useState } from "react";

// import EditPage from "./Layout/EditPage";
import EditProfileTopMenu from "./EditProfileTopMenu";
import StartMenuButtons from "../StartMenuButtons";
// import EditTheme from "./Theme/EditTheme";
// import CreateAd from "./CreateAd";

export default function Menu() {
  const [toggleProfile, setToggleProfile] = useState(false);
  const [toggleAds, setToggleAds] = useState(false);
  const [toggleAccount, setToggleAccount] = useState(false);

  // return <h1>menu</h1>;

  return (
    <div>
      <div className="flex flex-col bg-gray-700 p-4 rounded h-1/3 justify-between">
        <StartMenuButtons
          toggleProfile={toggleProfile}
          setToggleProfile={setToggleProfile}
          toggleAds={toggleAds}
          setToggleAds={setToggleAds}
          toggleAccount={toggleAccount}
          setToggleAccount={setToggleAccount}
        />
        {toggleProfile && (
          <>
            <button
              type="button"
              value={"redigera_profil"}
              className="flex mb-2  mt-2 ml-auto mr-auto self-center justify-center rounded-md border border-transparent bg-indigo-400 px-2 py-1 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => {
                setToggleProfile(false);
              }}
            >
              stäng
            </button>
            <EditProfileTopMenu />
          </>
        )}
        {toggleAds && (
          <div>
            <button
              type="button"
              value={"skapa_annons"}
              className="flex mb-2  mt-2 ml-auto mr-auto self-center justify-center rounded-md border border-transparent bg-indigo-400 px-2 py-1 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => {
                setToggleAds(false);
              }}
            >
              stäng
            </button>
            {/* <CreateAd /> */}
          </div>
        )}
      </div>
    </div>
  );
}
