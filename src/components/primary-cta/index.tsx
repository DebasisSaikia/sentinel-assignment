import Link from "next/link";
import React from "react";
import { PrimaryCTAcontainer } from "./styles";

const PrimaryCTA = () => {
  return (
    <Link href={"/"}>
      <PrimaryCTAcontainer>View Dashboard</PrimaryCTAcontainer>
    </Link>
  );
};

export default PrimaryCTA;
