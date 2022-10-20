import Select from "../Select";

export default function EditPage() {
  const pages = [
    { id: 1, name: "page1" },
    { id: 2, name: "page2" },
    { id: 2, name: "page3" },
  ];
  return (
    <>
      Select section to add to page
      <Select items={pages} />
      <button
        type="button"
        className="flex  mb-6 ml-auto mr-auto self-center justify-center rounded-md border border-transparent bg-indigo-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Add
      </button>
      <div></div>
    </>
  );
}
