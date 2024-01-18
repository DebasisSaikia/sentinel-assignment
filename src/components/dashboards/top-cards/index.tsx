import React from "react";
import { CardWrapper, TopCardContainer } from "./styles";
import { topBarData } from "@/data/topbarData";

const Cards = () => {
  return (
    <div className="top-card">
      {topBarData?.map((item, index) => {
        return (
          <CardWrapper key={index}>
            <div className="text-value-container">
              <h3>{item.name}</h3>
              <p
                className={
                  String(item.value)?.includes("+") ? "positive" : "negative"
                }
              >
                {item.value}
              </p>
            </div>
            <p>{item.time}</p>
          </CardWrapper>
        );
      })}
    </div>
  );
};

const TopCards = () => {
  return (
    <TopCardContainer>
      <h1>Session History</h1>
      <Cards />
    </TopCardContainer>
  );
};

export default TopCards;
