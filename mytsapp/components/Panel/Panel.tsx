import React from "react";

import Menu from "./Menu/Menu";
import UserGreetingAndLogoutSection from "./UserGreetingAndLogoutSection";
export default function Panel() {
  return (
    <>
      <UserGreetingAndLogoutSection />
      <Menu />
    </>
  );
}
