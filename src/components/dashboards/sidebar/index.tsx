import React from "react";
import { SidebarContainer } from "./styles";
import { sideBarData } from "@/data/sidebarData";

const SidebarHeading = ({
  title,
  className,
  value,
}: {
  title: string;
  className: string;
  value: string | number;
}) => {
  return (
    <div className={className}>
      <span>{title} : </span>
      <p>{value}</p>
    </div>
  );
};

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeading
        className="ip-address"
        title="IP Address "
        value="127.478.134.11"
      />
      <SidebarHeading className="country" title="Country " value="India" />
      {sideBarData?.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item?.title}</h1>
          </div>
        );
      })}
    </SidebarContainer>
  );
};

export default Sidebar;
