import styled from "styled-components";
import C from "./C";
import D from "./D";

export default function I({}) {
  return (
    <StyledI>
      <StyledA>강연구님의 첫 계좌입니다.</StyledA>
      <StyledC></StyledC>
      <StyledB>투자일로부터 + 00일</StyledB>
      <StyledD money={100000}></StyledD>
      <StyledF1>▲ 0.00%</StyledF1>
      <StyledG1>
        누적 수익률<br></br>▲ 0.00%
      </StyledG1>
      <StyledF2>▲ 0.00%</StyledF2>
      <StyledG2>
        누적 수익률<br></br>▲ 0.00%
      </StyledG2>
    </StyledI>
  );
}

const StyledI = styled.div`
  flex-grow: 8;
  border: solid 1px #b8a88e;
  border-radius: 10px;
  margin: 8px;
  background-color: #202020;
  position: relative;
`;

const StyledA = styled.p`
  border: solid 1px red;
  position: absolute;
  top: 3vh;
  left: 3vw;
  margin: 0;
`;

const StyledB = styled.p`
  border: solid 1px red;
  position: absolute;
  top: 7vh;
  left: 7vw;
  margin: 0;
`;

const StyledC = styled(C)`
  border: solid 1px red;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 1.4vh;
  right: 3vw;
`;

const StyledD = styled(D)`
  border: solid 1px red;
  position: absolute;
  top: 20vh;
  margin: 0 auto;
  text-align: center;
  font-size: 45px;
  left: 0;
  right: 0;
  width: fit-content;
`;
// F, G는 하나로 묶어 정렬하는게 이쁨
const StyledF1 = styled.p`
  border: solid 1px red;
  position: absolute;
  top: 35vh;
  left: 15.8vw;
`;

const StyledG1 = styled.p`
  border: solid 1px red;
  position: absolute;
  top: 39vh;
  left: 15vw;
  text-align: center;
`;

const StyledF2 = styled.p`
  border: solid 1px red;
  position: absolute;
  top: 35vh;
  right: 15.8vw;
`;

const StyledG2 = styled.p`
  border: solid 1px red;
  position: absolute;
  top: 39vh;
  right: 15vw;
  text-align: center;
`;
