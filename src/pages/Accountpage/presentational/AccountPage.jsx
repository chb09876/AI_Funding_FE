import styled from 'styled-components';
import { useState } from 'react';
import CheckProfit from './CheckProfit';
import CompareProfit from './CompareProfit';

export default function AccountPage() {
  const [SelectedTab, SelectTab] = useState(0);
  return (
    <StyledAccountPage className="account_page">
      <StyledTabs className="tabs">
        <StyledTabButton
          className={SelectedTab === 0 ? 'selected' : 'notselected'}
          onClick={() => SelectTab(0)}
        >
          수익 확인
        </StyledTabButton>
        <StyledTabButton
          className={SelectedTab === 1 ? 'selected' : 'notselected'}
          onClick={() => SelectTab(1)}
        >
          수익 비교
        </StyledTabButton>
      </StyledTabs>
      <StyledContent className="contents" SelectedTab={SelectedTab}>
        {SelectedTab === 0 ? <CheckProfit /> : <CompareProfit />}
      </StyledContent>
    </StyledAccountPage>
  );
}

const StyledAccountPage = styled.div`
  height: 92%;
`;
const StyledTabs = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  background: rgb(32, 32, 32);
  margin-top: 10px;
`;

const StyledTabButton = styled.div`
  width: 100%;
  text-align: center;
  height: 100%;
  line-height: 45px;
  font-size: 18px;
  ${(props) => {
    if (props.className === 'selected') {
      return `color: rgb(152, 128, 101);
      font-weight:bold;
      
      border-right: 2px solid rgb(152, 128, 101);
      border-left: 2px solid rgb(152, 128, 101);
      border-top: 2px solid rgb(152, 128, 101);
      border-radius:15px 15px 0px 0px;
      `;
    } else if (props.className === 'notselected') {
      return `color: rgb(119, 119, 119);
      border-bottom: 2px solid rgb(152, 128, 101);
      
      `;
    } else {
      return `color: rgb(119, 119, 119);
      border-bottom: 2px solid rgb(152, 128, 101);
      `;
    }
  }};
`;

const StyledContent = styled.div`
  ${(props) => {
    return props.SelectedTab ? 'height: 100%' : '';
  }}
`;
