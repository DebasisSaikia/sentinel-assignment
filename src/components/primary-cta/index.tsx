import Link from "next/link";
import React from "react";
import { PrimaryCTAcontainer } from "./styles";
import { ROUTES } from "@/routes";

const PrimaryCTA = () => {
  return (
    <Link
      href={{
        pathname: ROUTES.dashboard,
        query: { dasboard_id: Math.random(), token: new Date().getTime() },
      }}
    >
      <PrimaryCTAcontainer>View Dashboard</PrimaryCTAcontainer>
    </Link>
  );
};

export default PrimaryCTA;
