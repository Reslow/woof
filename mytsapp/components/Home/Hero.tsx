import React from "react";

export default function Hero() {
  return (
    <div className="bg-white">
      <main>
        <div>
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="/Images/unsplash/anoir-chafik-2_3c4dIFYFU-unsplash.jpg"
                    alt="image of dogs, by anoir-chafik"
                    title="image from unsplash by anoir-chafik https://unsplash.com/@anoirchafik"
                  />
                  <div className="absolute inset-0 bg-green-900 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">Hitta Kennel</span>
                  </h1>
                  <p className="mx-auto mt-6 max-w-lg text-center text-xl text-green-200 sm:max-w-3xl">
                    På jakt efter din bästa vän? Hitta rätt kennel för dig, Alla
                    kennlar här är med i skk, så du kan känna dig trygg i valet
                    av kennel.
                  </p>
                  <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                    <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                      <a
                        href="#"
                        className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-green-700 shadow-sm hover:bg-indigo-50 sm:px-8"
                      >
                        gå med
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-center rounded-md border border-transparent bg-green-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
                      >
                        Logga in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
