import { useEffect, useState } from "react";

export default function CreateAd() {
  const [ad, setAd] = useState(null);
  const [title, setTitle] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [image, setImage] = useState<any>(null);
  const [text, SetText] = useState("");

  useEffect(() => {
    console.log("CHECK", ad);
  }, [setAd]);

  function uploadfile(e: React.ChangeEvent<HTMLInputElement>) {
    const image = URL.createObjectURL(e.target.files[0]);
    setImage(image);
  }

  function createAd() {
    const newObj = {
      title: title,
      deliveryDate: deliveryDate,
      text: text,
      image: image,
    };
    setAd(newObj);
  }
  return (
    <>
      <h1>skapa annons</h1>
      <h2>lägg till en bild</h2>
      <input
        className="block mb-5 w-full text-xs text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="small_size"
        type="file"
        onChange={(e) => uploadfile(e)}
      />
      <img src={image} />
      <input
        type="text"
        id="title"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="rubrik"
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea onChange={(e) => SetText(e.target.value)}></textarea>
      <input
        type="text"
        id="delivery_date"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="leveransklara: 2022-08-05"
        required
        onChange={(e) => setDeliveryDate(e.target.value)}
      />

      <button
        type="button"
        value="hantera_konto"
        className="flex mb-2  mt-2 ml-auto mr-auto self-center justify-center rounded-md border border-transparent bg-indigo-400 px-2 py-1 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={createAd}
      >
        skapa annons
      </button>
    </>
  );
}
