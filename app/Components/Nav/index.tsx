"use client";
import React from "react";
import { NavContainer, NavContent, Logo } from "./styles";
// Logo //
import logo from "../../../public/logo.png";

const Nav = () => {
  return (
    <NavContainer>
      <NavContent>
        <Logo src={logo.src} alt="Logo" />
      </NavContent>
    </NavContainer>
  );
};

export default Nav;
