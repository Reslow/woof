import React from "react";
import Admin from "./admin";
export default function Layout({ adminData }) {
  const userList = adminData?.users;
  const creator = userList?.filter((data) => data.rolename === "CREATER_USER");
  const visitor = userList?.filter((data) => data.rolename === "VISITER_USER");

  console.log(visitor);
  return (
    <>
      <div className=" w-screen h-full flex flex-col justify-between text-center">
        <h1 className="font-lg">Admin</h1>
        <h2>Hantera användare</h2>
        <h3>antal användare: {userList?.length - 1} </h3>
        <div className="flex flex-row bg-slate-300 justify-evenly">
          <ul>
            <h3>Kennlar</h3>
            {creator
              ? creator?.map((user) => {
                  return (
                    <li key={user.userId}>
                      {user.username}, {user.email}, {user.role}
                    </li>
                  );
                })
              : "Inga kennlar reggade ännu"}
          </ul>

          <ul>
            <h3>Besökare</h3>
            {visitor
              ? visitor?.map((user) => {
                  return (
                    <li key={user.userId}>
                      {user.username}, {user.email}, {user.rolename}
                    </li>
                  );
                })
              : "Inga besökare reggade ännu"}
          </ul>
        </div>
      </div>
    </>
  );
}
