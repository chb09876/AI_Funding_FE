import styled from 'styled-components';
import Aquamarine from './svgs/AquaIcon.svg';
import Aquafeather1 from './svgs/Aquafeather1.svg';
import Aquafeather2 from './svgs/Aquafeather2.svg';
import Aquafeather3 from './svgs/Aquafeather3.svg';
import Aquagraph from './svgs/Aquagraph.svg';

export default function Intro1() {
  return (
    <StyledIntroContainer className="intro1-container">
      <StyledModelName className="model-name">
        <StyledIcon>
          <img src={Aquamarine} width="100%" />
        </StyledIcon>
        <StyledFeather1>
          <img src={Aquafeather1} />
        </StyledFeather1>
        <StyledNameEn>AQUA</StyledNameEn>
        <StyledNameKr>아쿠아마린</StyledNameKr>
      </StyledModelName>
      <StyledModelDesc className="model-desc">
        <StyledFeather2>
          <img src={Aquafeather2} />
        </StyledFeather2>
        <StyledFeather3>
          <img src={Aquafeather3} />
        </StyledFeather3>
        장기적 관점의 안정적인 투자 모델입니다.
        <StyledGraph className="Graph">
          <img src={Aquagraph} width="100%" />
        </StyledGraph>
      </StyledModelDesc>
    </StyledIntroContainer>
  );
}
const StyledIntroContainer = styled.div`
  margin: 10px auto;
  overflow-y:auto;
  overflow-x:hidden;
`;
const StyledModelName = styled.div`
  position: relative;
  margin-top: 30px;
  margin-bottom: 30px;
`;
const StyledNameEn = styled.div`
  position: relative;
  font-size: 15vw;
  margin: 25px 5px;
  text-align: center;
  z-index: 1;
  color: rgb(38, 106, 132);
`;
const StyledIcon = styled.div`
  position: absolute;
  width: 25vw;
  top: 7vw;
  left: 50%;
  transform: translate(-50%);
  z-index: 2;
`;
const StyledNameKr = styled.div`
  position: relative;
  font-size: 15vw;
  margin: 5px;
  margin-top: 8vw;
  text-align: center;
  color: white;
  z-index: 3;
`;
const StyledModelDesc = styled.div`
  font-size: 5vw;
  position: relative;
  margin: auto;
  padding: 10px;
  text-align: center;
`;
const StyledFeather1 = styled.div`
  position: absolute;
  top: 10vh;
  right: 10px;
  z-index: 2;
`;
const StyledFeather2 = styled.div`
  position: absolute;
  top: 5vh;
  left: -5px;
  z-index: 2;
`;
const StyledFeather3 = styled.div`
  position: absolute;
  top: 25vh;
  right: -5px;
  z-index: 2;
`;
const StyledGraph = styled.div`
  background: black;
  margin: auto;
  display: flex;
  justify-content: center;
  width: 80vw;
  margin-top: 50px;
`;
