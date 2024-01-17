import Link from "next/link";
import React from "react";
import { PrimaryCTAcontainer } from "./styles";
import { ROUTES } from "@/routes";

const PrimaryCTA = () => {
  return (
    <Link href={ROUTES.dashboard}>
      <PrimaryCTAcontainer>View Dashboard</PrimaryCTAcontainer>
    </Link>
  );
};

export default PrimaryCTA;
