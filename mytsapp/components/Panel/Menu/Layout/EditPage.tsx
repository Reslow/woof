import { prepareServerlessUrl } from "next/dist/server/base-server";
import React, { useEffect } from "react";
import { useState } from "react";
import Select from "../Select";
import sections from "../../../../assets/sections.json";
import { Sections, Section } from "../../../../types/sections";
import InputForm from "./InputForm";
import { ex1, ex2, ex3 } from "../../../../assets/ExampleSections";

export default function EditPage() {
  const pages: Array<{ name: string; id?: number; sectionList: Sections }> = [
    { name: "Home", sectionList: ex1 },
    { name: "Gallery", sectionList: ex3 },
    { name: "Ads", sectionList: ex2 },
  ];

  const [profilePages, setProfilePages] = useState(pages);
  const [title, setTitle] = useState(pages[0].name);
  const [errorMsg, setErrorMsg] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  const [selected, setSelected] = useState(sections[0]);
  const [pageSections, setPageSections] = useState<Sections>([
    {
      id: 2,
      name: "Image",
      url: "url",
      alt: "alt",
      imageText: "imagetext",
    },
    {
      id: 2,
      name: "Image",
      url: "url",
      alt: "alt",
      imageText: "imagetext",
    },
    {
      id: 2,
      name: "Image",
      url: "url",
      alt: "alt",
      imageText: "imagetext",
    },
  ]);
  const [sectionData, setSectionData] = useState<Section>(null);
  const [editPage, setEditPage] = useState(null);

  function addOnClickHandler() {
    if (title.length > 0) {
      const titleDoesNotExist = profilePages.filter(
        (page) => page.name === title
      );
      if (titleDoesNotExist.length > 0) {
        setErrorMsg("You need to se a unique title to page");
      } else {
        setProfilePages((prev) => [
          ...prev,
          { name: title, sectionList: pageSections },
        ]);
      }
    } else setErrorMsg("please add a title");
  }

  useEffect(() => {
    if (sectionData !== null) {
      setPageSections((prev) => [...prev, sectionData]);
    } else return;
  }, [sectionData]);

  function deleteOnClickHandler(e) {
    const doesPageWithIdExistInList = profilePages.filter(
      (page) => page.name !== e.target.value
    );
    setProfilePages((prev) => [...doesPageWithIdExistInList]);
  }

  function deleteSectionHandler(e) {
    console.log(pageSections);
    const doesPageWithIdExistInList = pageSections.filter(
      (page) => page.name !== e.target.value
    );
    setPageSections([...doesPageWithIdExistInList]);
  }

  function addSectionHandler() {
    setPageSections((prev) => [...prev, selected]);
  }

  return (
    <>
      <h1>add pages to your prafile (max 7)</h1>
      <input
        type="text"
        id="changePageTitle"
        value={title}
        onFocus={() => {
          setTitle("");
          setErrorMsg("");
        }}
        onChange={(e) => setTitle(e.target.value)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Doe"
        required
      />

      {errorMsg && errorMsg}
      <div>
        <h2>PAGES</h2>
        <ul>
          {profilePages.map((page, i) => {
            return (
              <div key={i}>
                <li>
                  {page.name}
                  <button
                    className="px-3 mx-2 py2 bg-orange-400 rounded text-white"
                    value={page.name}
                    onClick={() => {
                      setShowEdit(!showEdit);
                      setEditPage(page.name);
                    }}
                  >
                    {showEdit ? "stäng" : "edit"}
                  </button>
                  <button
                    className="px-1 mx-2  bg-red-600 rounded text-white"
                    value={page.name}
                    onClick={deleteOnClickHandler}
                  >
                    x
                  </button>
                </li>

                <div className="bg-blue-200">
                  {showEdit && page.name === editPage && (
                    <>
                      <h2>Edit</h2>
                      <>
                        <Select
                          items={sections}
                          selected={selected}
                          setSelected={setSelected}
                        />
                        <button
                          type="button"
                          className="flex  mb-2 ml-auto mr-auto self-center justify-center rounded-md border border-transparent bg-indigo-400 px-2 py-1 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          onClick={addSectionHandler}
                        >
                          +
                        </button>
                      </>

                      <ul>
                        {pageSections.map((section, i) => {
                          console.log(section);
                          return (
                            <li key={i}>
                              <div>
                                <h1>{section ? section.name : "no name"}</h1>
                                <InputForm
                                  section={selected}
                                  setSectionData={setSectionData}
                                />
                              </div>
                              <button
                                className="px-1 mx-2  bg-red-600 rounded text-white"
                                value={section ? section.name : "error"}
                                onClick={deleteSectionHandler}
                              >
                                x
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}
