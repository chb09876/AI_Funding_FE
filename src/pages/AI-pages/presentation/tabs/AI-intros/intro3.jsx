import styled from 'styled-components';
import Ameth from './svgs/AmethIcon.svg';
import Amethfeather1 from './svgs/Amethfeather1.svg';
import Amethfeather2 from './svgs/Amethfeather2.svg';
import Amethgraph from './svgs/Amethgraph.svg';

export default function Intro3() {
  return (
    <StyledIntroContainer className="intro1-container">
      <StyledModelName className="model-name">
        <StyledIcon>
          <img src={Ameth} width="100%" />
        </StyledIcon>
        <StyledFeather1>
          <img src={Amethfeather1} />
        </StyledFeather1>
        <StyledNameEn>GARNET</StyledNameEn>
        <StyledNameKr>가넷</StyledNameKr>
      </StyledModelName>
      <StyledModelDesc className="model-desc">
        <StyledFeather2>
          <img src={Amethfeather2} />
        </StyledFeather2>
        레버리지를 활용한 공격적인 투자 모델입니다.
        <StyledGraph className="Graph">
          <img src={Amethgraph} width="100%" />
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
  color: rgb(65, 48, 93);
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
const StyledGraph = styled.div`
  background: black;
  margin: auto;
  display: flex;
  justify-content: center;
  width: 80vw;
  margin-top: 50px;
`;
