const items = [
  { id: 1, txt: "tips 1" },
  { id: 2, txt: "tips 2" },
  { id: 3, txt: "tips 3" },
  { id: 4, txt: "tips 4" },
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
              <span className="block text-center text-lg font-semibold text-indigo-600">
                Introducing
              </span>
              <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                JavaScript for Beginners
              </span>
            </h1>
            <p className="mt-8 text-xl leading-8 text-gray-500">
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
              {items.map((item) => (
                <li key={item.id} className="py-4 ">
                  {item.txt}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-gray-50 sm:rounded-lg w-1/3 ml-auto mr-auto mt-20 text-center">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Need more bandwidth?
            </h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus praesentium tenetur pariatur.
              </p>
            </div>
            <div className="mt-5">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
              >
                Contact sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
