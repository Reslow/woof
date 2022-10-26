import { prepareServerlessUrl } from "next/dist/server/base-server";
import React, { useEffect } from "react";
import { useState } from "react";
import Select from "../Select";
import sections from "../../../../assets/sections.json";
import { Sections } from "../../../../types/sections";

export default function EditPage() {
  const pages: Array<{ name: string; id?: number }> = [
    { name: "Home" },
    { name: "Gallery" },
    { name: "Ads" },
  ];

  const [profilePages, setProfilePages] = useState(pages);
  const [title, setTitle] = useState(pages[0].name);
  const [errorMsg, setErrorMsg] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  const [selected, setSelected] = useState(sections[0]);
  const [pageSections, setPageSections] = useState<Sections>([
    {
      id: 2,
      name: "image",
      url: "url",
      alt: "alt",
      imageText: "imagetext",
    },
  ]);
  const [editPage, setEditPage] = useState(null);

  function addOnClickHandler() {
    if (title.length > 0) {
      const titleDoesNotExist = profilePages.filter(
        (page) => page.name === title
      );
      if (titleDoesNotExist.length > 0) {
        setErrorMsg("You need to se a unique title to page");
      } else {
        setProfilePages((prev) => [...prev, { name: title }]);
      }
    } else setErrorMsg("please add a title");
  }

  function deleteOnClickHandler(e) {
    const doesPageWithIdExistInList = profilePages.filter(
      (page) => page.name !== e.target.value
    );
    setProfilePages((prev) => [...doesPageWithIdExistInList]);
  }

  function deleteSectionHandler(e) {
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

      <button
        type="button"
        className="flex  mb-6 ml-auto mr-auto self-center justify-center rounded-md border border-transparent bg-indigo-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={addOnClickHandler}
      >
        Add
      </button>
      {errorMsg && errorMsg}
      <div>
        <h2>PAGES</h2>
        <ul>
          {profilePages.map((page, i) => {
            return (
              <>
                <li key={i}>
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
                        {pageSections.map((section) => {
                          return (
                            <li>
                              {section.name}
                              <button
                                className="px-1 mx-2  bg-red-600 rounded text-white"
                                value={section.name}
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
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}
