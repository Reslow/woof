import React from "react";
const ads = [
  {
    title: "Vi har VALPAR",
    Kennel: "SkånskaGolden",
    description: "En kull på 8 valpar, moder: Asta, Fader: Astor. ",
    ReadyForDelivery: "Nu",
    location: "Eslöv",
    img: "placeholder.png",
    Url: "länk till profil",
  },
  {
    title: "Schäfervalpar",
    Kennel: "SchäferPatrullen",
    description: "En kull på x valpar ",
    ReadyForDelivery: "2022-12-20",
    location: "Kalmar",
    img: "placeholder.png",
    Url: "länk till profil",
  },
  {
    title: "RunLikeTheWind väntas valpar",
    Kennel: "RunLikeTheWind ",
    description: "En kull x tikar och x hanar. ",
    ReadyForDelivery: "2022-12-10",
    location: "Eslöv",
    img: "placeholder.png",
    Url: "länk till profil",
  },
  {
    title: "Sheltie Valpar söker nytt hem",
    Kennel: "RoyalRunners",
    description: "En kull på 3. ",
    ReadyForDelivery: "Nu",
    location: "Stockholm",
    img: "placeholder.png",
    Url: "länk till profil",
  },
];

export default function Entrypoint() {
  return (
    <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <h1 className="text-4xl font-bold">Senaste</h1>
      <div className="mx-auto mt-12 grid max-w-lg gap-10 lg:max-w-none lg:grid-cols-4">
        {ads.map((ad, i) => (
          <div key={i}>
            <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-full  ">
              <img
                className="object-cover w-full h-48"
                src={`/images/Egna/logo/${ad.img}`}
              />
              <div className="absolute top-5 left-0 px-6 py-4 bg-black opacity-20 w-full"></div>

              <h1 className="text-white absolute top-5 left-5 opacity-100 text-lg font-bold ">
                {ad.title}
              </h1>
              <div className="p-2 m-6">
                <h3 className="">Kennel: {ad.Kennel}</h3>
                <p>{ad.description}</p>
                <p>Leveransklara:{ad.ReadyForDelivery}</p>
                <p>Ort:{ad.location}</p>
              </div>
              <button
                type="button"
                className="absolute bottom-0  align-middle   w-full rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-center font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                profil
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
