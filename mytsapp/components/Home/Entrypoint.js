export default function Entrypoint() {
  return (
    <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0"></div>
      <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-4">
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg ">
          <div className="flex-shrink-0"></div>
          <div className="flex flex-1 flex-col justify-between bg-yellow-500 p-6">
            kort
            <div className="flex-1">
              <div className="flex space-x-1 text-sm text-gray-500"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="flex-shrink-0"></div>
          <div className="flex flex-1 flex-col justify-between bg-indigo-500 p-6">
            kort
            <div className="flex-1">
              <div className="flex space-x-1 text-sm text-gray-500"></div>
            </div>
          </div>
        </div>{" "}
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="flex-shrink-0"></div>
          <div className="flex flex-1 flex-col justify-between bg-green-400 p-6">
            kort
            <div className="flex-1">
              <div className="flex space-x-1 text-sm text-gray-500"></div>
            </div>
          </div>
        </div>{" "}
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div className="flex-shrink-0"></div>
          <div className="flex flex-1 flex-col justify-between bg-blue-500 p-6">
            kort
            <div className="flex-1">
              <div className="flex space-x-1 text-sm text-gray-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
