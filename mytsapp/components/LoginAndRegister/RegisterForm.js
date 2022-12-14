import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
import { register } from "../../store/authSlice";
import { update } from "../../store/profileSlice";
export default function RegisterForm({ identity }) {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [breed, setBreed] = useState(null);
  const [location, setLocation] = useState(null);
  const [passbreed, setPassBreed] = useState("");
  const [passLo, setPassLo] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (identity === "kennel") {
      if (breed && location) {
        setPassBreed(breed);
        setPassLo(location);
      }
    } else return;
  }, [breed]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3005/api/signup",
        {
          type: identity,
          username: username,
          email: email,
          password: password,
          option_breed: passbreed,
          option_location: passLo,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        dispatch(register(res.data));
        dispatch(update(res.data.profile));
        if (res.data.role === "CREATOR_USER") {
          router.push("/Account");
        } else {
          router.push("/Hittakennel");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <form
      className="space-y-6"
      action="#"
      onSubmit={(e) => handleSubmit(e)}
      method="POST"
    >
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700"
        >
          Kennel
        </label>
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700"
        >
          username
        </label>

        <div className="mt-1">
          <input
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete=""
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <div className="mt-1">
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      {identity === "kennel" && (
        <>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              v??lj ort
            </label>
            <select
              id="loaction"
              name="location"
              onChange={(e) => setLocation(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option value="">V??lj</option>
              <option>Burl??v</option>
              <option>Esl??v</option>
              <option>Helsingborg</option>
              <option>H??ssleholm</option>
              <option>H????r</option>
              <option>Lund</option>
              <option>Klippan</option>
              <option>Lomma</option>
              <option>Malm??</option>
              <option>Kristianstad</option>
              <option>Simrishamn</option>
              <option>Sj??bo</option>
              <option>Vellinge</option>2<option>Ystad</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              v??lj Hundras
            </label>
            <select
              id="breed"
              name="breed"
              onChange={(e) => setBreed(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option>Australisk terrier</option>
              <option>Basenji</option>
              <option>Beagle</option>
              <option>Border collie</option>
              <option>Borzoi</option>
              <option>Boxer</option>
              <option>Bullterrier</option>
              <option>cane corso</option>
              <option>Chihuahua</option>
              <option>Dalmatiner</option>
              <option>Engelsk Setter</option>
              <option>Flatcoated Retriver</option>
              <option>Golden retriver</option>
              <option>Komondor</option>
              <option>Malteser</option>
              <option>Pointer</option>
              <option>papillon</option>
              <option>Samojedhund</option>
              <option>Shetland sheepdog</option>
              <option>Shiba</option>
              <option>Spione</option>
              <option>Tax</option>
            </select>
          </div>
        </>
      )}

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Registrera konto
        </button>
      </div>
    </form>
  );
}
