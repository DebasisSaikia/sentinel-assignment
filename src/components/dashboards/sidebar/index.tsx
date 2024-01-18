import React from "react";
import { CardContainer, SidebarContainer, TextWithIcon } from "./styles";
import { sideBarData } from "@/data/sidebarData";
import Image from "next/image";

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

const ContentCard = () => {
  return (
    <>
      {sideBarData?.map((item, index) => {
        return (
          <CardContainer
            key={index}
            className={item.active ? "active-border" : ""}
          >
            <TextWithIcon>
              <div className="image-container">
                <Image
                  src={item.image}
                  alt={item.title}
                  height={25}
                  width={25}
                />
              </div>
              <h3>{item.title}</h3>
            </TextWithIcon>
            <Image
              src="/images/arrow-point-to-right.png"
              className="arrow-img"
              alt="arrow"
              height={25}
              width={25}
            />
          </CardContainer>
        );
      })}
    </>
  );
};

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <SidebarHeading
        className="ip-address"
        title="IP Address "
        value="127.478.134.11"
      />
      <SidebarHeading className="country" title="Country " value="India" />
      <ContentCard />
    </SidebarContainer>
  );
};

export default Sidebar;
