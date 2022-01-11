import styled from "styled-components";

export default function J() {
  return (
    <StyledJ>
      <StyledH></StyledH>
      <StyledE>25% 포스테엥</StyledE>
      <StyledD>000000원</StyledD>
      <StyledG1>
        누적 수익률<br></br>▲ 0.00%
      </StyledG1>
      <StyledG2>
        누적 수익률<br></br>▲ 0.00%
      </StyledG2>
    </StyledJ>
  );
}

const StyledJ = styled.div`
  position: relative;
  flex-grow: 5;
`;

const StyledE = styled.p`
  border: solid 1px red;
  position: absolute;
  left: 0;
  right: 0;
  top: 8vh;
  margin: 0 auto;
  width: fit-content;
`;

const StyledH = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 5vh;
  width: 90vw;
  height: 2vh;
  margin: 0 auto;
  border: solid 1px red;
`;

const StyledD = styled.p`
  border: solid 1px red;
  position: absolute;
  left: 0;
  right: 0;
  top: 12vh;
  margin: 0 auto;
  font-size: 35px;
  width: fit-content;
`;

const StyledG1 = styled.p`
  border: solid 1px red;
  position: absolute;
  top: 20vh;
  left: 15vw;
  text-align: center;
`;

const StyledG2 = styled.p`
  border: solid 1px red;
  position: absolute;
  top: 20vh;
  right: 15vw;
  text-align: center;
`;
