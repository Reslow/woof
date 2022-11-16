import React from "react";

export default function SelectGroup({
  hundData,
  setSelectedGroup,
  setDisplay,
}) {
  console.log(hundData, "inside grid");
  return (
    <>
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-5 xl:gap-x-8 m-32 "
      >
        {hundData.map((hundData_item, i) => (
          <li key={i} className="relative">
            <div
              onClick={() => {
                setSelectedGroup(hundData_item.groupId);
                setDisplay(true);
              }}
            >
              <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                <img
                  src={hundData_item.url}
                  alt="grupp"
                  className="pointer-events-none object-cover group-hover:opacity-75"
                />
                <h2>{hundData_item.groupId}</h2>
                <h2>{hundData_item.name}</h2>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
