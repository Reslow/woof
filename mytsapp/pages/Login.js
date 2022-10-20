import LoginFormKennel from "../components/LoginAndRegister/Kennel/LoginForm";
import LoginFormPrivate from "../components/LoginAndRegister/Private/LoginForm";
import { useState } from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Login() {
  const [enabled, setEnabled] = useState(false);
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
            Logga in
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Inget konto än?
            <a
              href="/Register"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              registrera här{" "}
            </a>
          </p>
          <Switch.Group as="div" className="flex items-center justify-center">
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={classNames(
                enabled ? "bg-indigo-600" : "bg-gray-200",
                "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 "
              )}
            >
              <span
                aria-hidden="true"
                className={classNames(
                  enabled ? "translate-x-5" : "translate-x-0",
                  "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                )}
              />
            </Switch>
            <Switch.Label as="span" className="ml-3">
              <span className="text-sm font-medium text-gray-900">
                {enabled ? "kennel" : "privat"}
              </span>
            </Switch.Label>
          </Switch.Group>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <LoginFormKennel />
            {/* <LoginFormPrivate /> */}
          </div>
        </div>
      </div>
    </>
  );
}
