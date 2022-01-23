import styled from "styled-components";
import { useState } from "react";
import IntroAi from "./tabs/IntroAi";
import CurrentStuck from "./tabs/CurrentStuck";
import TransHistory from "./tabs/TransHistory";

const obj = {
  0: <IntroAi />,
  1: <CurrentStuck />,
  2: <TransHistory />,
};
export default function AiPages() {
  const [SelectedTab, SelectTab] = useState(0);
  return (
    <StyledAiPages className="ai-page-container">
      <div className="wrapper">
        <StyledTabs className="tabs">
          <StyledTab>
            <StyledTabButton
              className={SelectedTab === 0 ? "selected" : "notselected"}
              onClick={() => SelectTab(0)}
            >
              AI 소개
            </StyledTabButton>
          </StyledTab>
          <StyledTab>
            <StyledTabButton
              className={SelectedTab === 1 ? "selected" : "notselected"}
              onClick={() => SelectTab(1)}
            >
              현재 종목
            </StyledTabButton>
          </StyledTab>
          <StyledTab>
            <StyledTabButton
              className={SelectedTab === 2 ? "selected" : "notselected"}
              onClick={() => SelectTab(2)}
            >
              거래 내역
            </StyledTabButton>
          </StyledTab>
        </StyledTabs>
      </div>
      <div className="contents">{obj[SelectedTab]}</div>
    </StyledAiPages>
  );
}
const StyledAiPages = styled.div`
  height: 95vh;
`;
const StyledTabs = styled.div`
  padding-top: 10px;
  text-align: center;
  display: flex;

  /* 세로길이 설정 */
  height: 100%;
  line-height: 45px;
  background: black;
`;

const StyledTab = styled.div`
  width: 100%;
  margin: auto;
`;
const StyledTabButton = styled.div`
  ${(props) => {
    return props.className === "selected"
      ? `color: rgb(152, 128, 101);
      font-weight:bold;
      margin: auto;
      border-right: 2px solid rgb(152, 128, 101);
      border-left: 2px solid rgb(152, 128, 101);
      border-top: 2px solid rgb(152, 128, 101);
      border-radius:15px 15px 0 0;
      `
      : `color: rgb(119, 119, 119);
      border-bottom: 2px solid rgb(152, 128, 101);
      margin: auto;
      
      `;
  }};
`;

const StyledContent = styled.div``;
