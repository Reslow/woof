import React from "react";
import LoginForm from "../components/LoginAndRegister/LoginForm";

export default function Login() {
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
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}
