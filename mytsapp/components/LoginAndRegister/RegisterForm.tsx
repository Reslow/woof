import React, { useState, useEffect } from "react";
import axios from "axios";
export default function RegisterForm({ identity }) {
  const [username, setUsername] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [credentials, setCredentials] = useState({});

  const k_creator_credentials = {
    type: "creator",
    username: username,
    email: email,
    password: password,
  };

  const b_visitor_credentials = {
    type: "visitor",
    username: username,
    email: email,
    password: password,
  };

  useEffect(() => {
    if (identity === "kennel") {
      setCredentials(k_creator_credentials);
    } else setCredentials(b_visitor_credentials);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3005/api/user", {
        credentials,
      })
      .then((res) => {
        console.log(res, "RES");
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

      <div className="flex flex-row">
        <div>
          <div>
            <label
              htmlFor="fname"
              className="block text-sm font-medium text-gray-700"
            >
              Förnamn
            </label>
            <div className="mt-1 ">
              <input
                id="fname"
                name="fname"
                type="text"
                value={fName}
                onChange={(e) => setFName(e.target.value)}
                required
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <label
              htmlFor="lname"
              className="block text-sm font-medium text-gray-700"
            >
              Efternamn
            </label>
            <div className="mt-1">
              <input
                id="lname"
                name="lname"
                type="text"
                value={lName}
                onChange={(e) => setLName(e.target.value)}
                required
                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
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
