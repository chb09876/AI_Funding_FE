import React from 'react';
import styled from "styled-components";
import Profit from './Profit';

export default function MyAccount(props) {
	return (
    <div>
      <MyAccountStyle>
        <InfoRowStyle>
          <InfoStyle>{props.name || "default"}&nbsp;</InfoStyle>님의&nbsp;&nbsp;
          <InfoStyle>{props.accountName || "default"}</InfoStyle>
          &nbsp;계좌입니다.
        </InfoRowStyle>

        <div>투자 시작일로부터 + {props.startDay || "00"}일</div>
				<CupStyle></CupStyle>

        <MoneyRowStyle>
          <MoneyStyle>{props.money || "1,000,000"}</MoneyStyle>원
        </MoneyRowStyle>

        <ProfitColumnStyle>
          <Profit name="금일 수익률" value="1.56" border="true"></Profit>
          <Profit name="금일 수익금" value="1000" border="true"></Profit>
        </ProfitColumnStyle>

        <ProfitColumnStyle>
          <Profit name="누적 수익률" value="-1.56"></Profit>
          <div>/</div>
          <Profit name="누적 수익금" value="-1000"></Profit>
        </ProfitColumnStyle>
      </MyAccountStyle>
    </div>
  );
}

const MyAccountStyle = styled.div`
	flex-grow: 1;
	border: 1px solid #b8a88e;
	border-radius: 10px;
	padding: 1vh 1vh 2vh 1vh;
	background-color: #000000;
`;

const InfoRowStyle = styled.div`
	display: flex;
	align-items: center;
	font-size: 16px;
	font-weight: regular;
`

const InfoStyle = styled.div`
	font-size: 21px;
`

const MoneyRowStyle = styled.div`
	display: flex;
	justify-content:center;
	align-items: center;
	margin: 20vw;
	font-size: 32px;
	font-weight: regular;
`;

const MoneyStyle = styled.div`
	font-size: 42px;
	font-weight: bold;
`;

const ProfitColumnStyle = styled.div`
	margin: 10vw;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const CupStyle = styled.div`
	position: absolute;
	top: 15px;
	right: 15px;
	border: 1px solid #b8a88e;
	border-radius: 50px;
	width: 40px;
	height: 40px;
`;