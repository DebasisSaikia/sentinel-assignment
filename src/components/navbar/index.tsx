import React from "react";
import {
  CenterContainer,
  LeftContainer,
  NavCTA,
  NavbarContainer,
  RightContainer,
} from "./styles";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/routes";

const Navbar = () => {
  return (
    <NavbarContainer>
      <LeftContainer>
        <Link href={ROUTES.home}>
        <Image src="/images/arrow-left-solid.svg" alt="logo" height={35} width={35} />
        </Link>
        <h1>Instance Name</h1>
      </LeftContainer>
      <CenterContainer>
        <div className="text-container">
            <h1>Node Moniker</h1>
            <p>selJ54...dksk43</p>
        </div>
        <div className="button-container">
            <NavCTA>Start</NavCTA>
        </div>
      </CenterContainer>
      <RightContainer>
        <h1>Sentinel</h1>
      </RightContainer>
    </NavbarContainer>
  );
};

export default Navbar;
