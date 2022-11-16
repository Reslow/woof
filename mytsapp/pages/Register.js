import React, { useEffect } from "react";
import RegisterForm from "../components/LoginAndRegister/RegisterForm";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Register() {
  const [enabled, setEnabled] = useState(false);
  const [identity, setIdentity] = useState("visitor");

  useEffect(() => {
    if (enabled === false) {
      setIdentity("visitor");
    } else {
      setIdentity("kennel");
    }
  }, [enabled]);

  return (
    <>
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Registrera konto som
            <span> {enabled ? "Kennel" : "blivande hundägare"}</span>
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Har du redan ett konto?{" "}
            <a
              href="/Login"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Logga in
            </a>
          </p>

          <button
            onClick={() => setEnabled(!enabled)}
            className={classNames(enabled ? "bg-indigo-600" : "bg-gray-200")}
          >
            {" "}
            {enabled
              ? "jag vill regristrera mig som privat"
              : "jag vill regristrera mig som kennel"}
          </button>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <RegisterForm identity={identity} />
          </div>
        </div>
      </div>
    </>
  );
}
