import React from "react";

export default function StartMenuButtons({
  toggleProfile,
  setToggleProfile,
  toggleAds,
  setToggleAds,
  toggleAccount,
  setToggleAccount,
}) {
  return (
    <>
      <button
        type="button"
        value={"redigera_profil"}
        className="flex mb-2  mt-2 ml-auto mr-auto self-center justify-center rounded-md border border-transparent bg-indigo-400 px-2 py-1 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={() => {
          setToggleProfile(!toggleProfile);
        }}
      >
        Redigera profil
      </button>
      <button
        type="button"
        name={"skapa_annons"}
        className="flex mb-2  mt-2 ml-auto mr-auto self-center justify-center rounded-md border border-transparent bg-indigo-400 px-2 py-1 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={() => {
          setToggleAds(!toggleAds);
        }}
      >
        Skapa annons
      </button>
      <button
        type="button"
        value="hantera_konto"
        className="flex mb-2  mt-2 ml-auto mr-auto self-center justify-center rounded-md border border-transparent bg-indigo-400 px-2 py-1 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={() => {
          setToggleAccount(!toggleAccount);
        }}
      >
        Hantera konto
      </button>
    </>
  );
}
