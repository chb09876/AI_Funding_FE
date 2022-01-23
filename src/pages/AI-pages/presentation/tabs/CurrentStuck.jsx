import React, { useState } from "react";
import StuckInfo from "../components/StuckInfo";
import styled, { keyframes } from "styled-components";

const InfoAnimation = keyframes`
    0%{
        opacity: 0;
        transform: translateX(30px);
    }
    100%{
        opacity: 1;
        transform: translateX(0px);
        
    }
    `;
export default function CurrentStuck() {
  const [DetailInfo, ShowDetail] = useState("none");

  return (
    <StyledScrollArea className="container">
      <div onClick={() => ShowDetail("카카오")}>
        <StuckInfo
          StuckName="카카오"
          CurrentPrice="112,500"
          PriceFluc="1,500"
          RateFluc="-1.32%"
          Fluc="down"
        />
      </div>
      <div onClick={() => ShowDetail("삼성전자")}>
        <StuckInfo
          StuckName="삼성전자"
          CurrentPrice="80,200"
          PriceFluc="7,000"
          RateFluc="+9.28%"
          Fluc="up"
        />
      </div>
      <div onClick={() => ShowDetail("광운대")}>
        <StuckInfo
          StuckName="광운대"
          CurrentPrice="40,200"
          PriceFluc="0"
          RateFluc="=0.00%"
          Fluc="none"
        />
      </div>
      <div onClick={() => ShowDetail("카카오")}>
        <StuckInfo
          StuckName="카카오"
          CurrentPrice="112,500"
          PriceFluc="1,500"
          RateFluc="-1.32%"
          Fluc="down"
        />
      </div>
      <div onClick={() => ShowDetail("삼성전자")}>
        <StuckInfo
          StuckName="삼성전자"
          CurrentPrice="80,200"
          PriceFluc="7,000"
          RateFluc="+9.28%"
          Fluc="up"
        />
      </div>
      <div onClick={() => ShowDetail("광운대")}>
        <StuckInfo
          StuckName="광운대"
          CurrentPrice="40,200"
          PriceFluc="0"
          RateFluc="=0.00%"
          Fluc="none"
        />
      </div>
      <div onClick={() => ShowDetail("카카오")}>
        <StuckInfo
          StuckName="카카오"
          CurrentPrice="112,500"
          PriceFluc="1,500"
          RateFluc="-1.32%"
          Fluc="down"
        />
      </div>
      <div onClick={() => ShowDetail("삼성전자")}>
        <StuckInfo
          StuckName="삼성전자"
          CurrentPrice="80,200"
          PriceFluc="7,000"
          RateFluc="+9.28%"
          Fluc="up"
        />
      </div>
      <div onClick={() => ShowDetail("광운대")}>
        <StuckInfo
          StuckName="광운대"
          CurrentPrice="40,200"
          PriceFluc="0"
          RateFluc="=0.00%"
          Fluc="none"
        />
      </div>
      <StyledDetailInfo
        className={DetailInfo === "none" ? "CloseInfo" : "OpenInfo"}
      >
        <StyledBackButton onClick={() => ShowDetail("none")}>
          ◀ 이전
        </StyledBackButton>
        <StyledStackGraph>{DetailInfo}</StyledStackGraph>
      </StyledDetailInfo>
    </StyledScrollArea>
  );
}

const StyledDetailInfo = styled.div`
  position: fixed;
  top: 57px;
  background-color: rgb(32, 32, 32);
  height: 85vh;
  width: 100%;
  color: white;
  animation: ${InfoAnimation} 0.6s ease-in-out;
  ${(props) => {
    return props.className === "CloseInfo"
      ? `display: none;`
      : `display: block;
      `;
  }};
`;

const StyledBackButton = styled.div`
  color: rgb(152, 128, 101);
  padding: 10px;
  width: 20vw;
`;
const StyledStackGraph = styled.div`
  border: 1px solid rgb(152, 128, 101);
  border-radius: 10px;
  height: 75vh;
  width: 90vw;
  margin: auto;
  padding: 10px;
`;

const StyledScrollArea = styled.div`
  overflow: scroll;
  height: 85vh;
`;
