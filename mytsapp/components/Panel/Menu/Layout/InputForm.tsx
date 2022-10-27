import { text } from "node:stream/consumers";
import React, { useEffect, useState } from "react";

export default function InputForm({ section, setSectionData }) {
  console.log(section, "section");
  const [title, setTitle] = useState<string>("");
  const [textA, setTextArea] = useState<string>("");
  const [altText, setAltText] = useState<string>("");
  const [altText2, setAltText2] = useState<string>("");
  const [imageText, setImageText] = useState<string>("");
  const [imageText2, setImageText2] = useState<string>("");
  const [image2, setImage2] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [align, setAlign] = useState<string>("");

  const section_1 = {
    id: section.id,
    name: section.name,
    title: title,
    text: textA,
  };

  const section_2 = {
    id: section.id,
    name: section.name,
    url: image,
    alt: altText,
    imageText: imageText,
  };

  const section_3 = {
    id: section.id,
    name: section.name,
    url: image,
    alt: altText,
    imageText: imageText,
    align: align,
    title: title,
    text: textA,
  };

  const section_4 = {
    id: section.id,
    name: section.name,
    url: image,
    alt: altText,
    imageText: imageText,
    url_2: image,
    alt_2: altText,
    imageText_2: imageText,
  };

  function handleAdd() {
    if (section.id === 1) {
      setSectionData(section_1);
    } else if (section.id === 2) {
      setSectionData(section_1);
    } else if (section.id === 3) {
      setSectionData(section_3);
    } else setSectionData(section_4);
  }
  return (
    <>
      {section.name === "Text" && (
        <>
          <input
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />

          <textarea
            id="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="text"
            onChange={(e) => {
              setTextArea(e.target.value);
            }}
            required
          />
        </>
      )}

      {section.name === "Image" && (
        <>
          <input
            type="text"
            id="image_text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="imageText"
            required
            onChange={(e) => setImageText(e.target.value)}
          />
          <input
            type="text"
            id="alt_text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="altText"
            required
            onChange={(e) => setAltText(e.target.value)}
          />
          <input
            className="block mb-5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="small_size"
            type="file"
            onChange={(e) => setImage(e.target.value)}
          />
        </>
      )}

      {section.name === "ImageAndText" && (
        <>
          {/* image And Text*/}

          <input
            type="text"
            id="alttext"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="altText"
            required
            onChange={(e) => setAltText(e.target.value)}
          />
          <input
            className="block mb-5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="small_size"
            type="file"
            onChange={(e) => setImage(e.target.value)}
          />

          <input
            type="text"
            id="imageText"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="imageText"
            required
            onChange={(e) => setImageText(e.target.value)}
          />
          {/* left/right align  */}
          <div className="flex items-center mb-4">
            <input
              id="default-radio-1"
              type="radio"
              value="left"
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={(e) => setAlign(e.target.value)}
            />
            <label
              htmlFor="default-radio-1"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Text to the Left
            </label>
          </div>
          <div className="flex items-center">
            <input
              checked={false}
              id="default-radio-2"
              type="radio"
              value="right"
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={(e) => setAlign(e.target.value)}
            />
            <label
              htmlFor="default-radio-2"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Text to the right
            </label>
          </div>

          <input
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            id="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="text"
            onChange={(e) => setTextArea(e.target.value)}
            required
          />
        </>
      )}

      {/* double  */}
      {section.name === "double" && (
        <>
          <input
            type="text"
            id="imageText"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="imageText"
            required
            onChange={(e) => setImageText(e.target.value)}
          />

          <input
            type="text"
            id="alt"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="altText"
            onChange={(e) => setAltText(e.target.value)}
            required
          />

          <input
            className="block mb-5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="small_size"
            type="file"
            onChange={(e) => setImage(e.target.value)}
          />

          <input
            type="text"
            id="imageText_2"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="imageText"
            onChange={(e) => setImageText2(e.target.value)}
            required
          />

          <input
            type="text"
            id="alt_2"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="altText"
            onChange={(e) => setAltText2(e.target.value)}
            required
          />

          <input
            className="block mb-5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="small_size"
            type="file"
            onChange={(e) => setImage2(e.target.value)}
          />
        </>
      )}

      <button onClick={handleAdd}>add</button>
    </>
  );
}
