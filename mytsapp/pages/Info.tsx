import Link from "next/link";
import React from "react";
const items = [
  {
    id: 1,
    txt: "Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem At arcu",
  },
  {
    id: 2,
    txt: "Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem At arcu",
  },
  {
    id: 3,
    txt: "Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem At arcu",
  },
  {
    id: 4,
    txt: "Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem At arcu",
  },
];
export default function Info() {
  return (
    <>
      {" "}
      <div className="relative overflow-hidden bg-white py-16 container">
        <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
          <div
            className="relative mx-auto h-full max-w-prose text-lg"
            aria-hidden="true"
          ></div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-lg">
            <h1>
              <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                Att tänka på
              </span>
              <span className="block text-center text-lg font-semibold text-indigo-600 pt-2">
                inför hundköpet och val av kennel
              </span>
            </h1>
            <p className="mt-8 text-xl text-center leading-8 text-gray-500">
              Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.
              At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at
              vitae feugiat egestas ac. Diam nulla orci at in viverra
              scelerisque eget. Eleifend egestas fringilla sapien.
            </p>
          </div>
          <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
            <ul
              role="list"
              className="divide-y divide-gray-200 w-1/3  ml-auto mr-auto"
            >
              {items.map((item, i) => (
                <li key={i} className="py-4 ">
                  {i + 1}: {item.txt}
                </li>
              ))}
            </ul>

            <p className="text-center"> Lycka till!</p>
          </div>
        </div>
        <div className="bg-gray-50 sm:rounded-lg w-1/3 ml-auto mr-auto mt-20 text-center">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Redo?
            </h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>Hitta Rätt Kennel för dig!</p>
            </div>
            <div className="mt-5">
              <Link href="/HittaKennel">
                <button
                  type="button"
                  className="relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span>Logga in</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
