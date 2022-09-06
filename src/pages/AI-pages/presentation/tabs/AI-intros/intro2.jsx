import styled from 'styled-components';
import Garnet from './svgs/GarnetIcon.svg';
import Garnetfeather1 from './svgs/Garnetfeather1.svg';
import Garnetfeather2 from './svgs/Garnetfeather2.svg';
import Garnetfeather3 from './svgs/Garnetfeather3.svg';
import Garnetgraph from './svgs/Garnetgraph.svg';

export default function Intro2() {
  return (
    <StyledIntroContainer className="intro1-container">
      <StyledModelName className="model-name">
        <StyledIcon>
          <img src={Garnet} width="100%" />
        </StyledIcon>
        <StyledFeather1>
          <img src={Garnetfeather1} />
        </StyledFeather1>
        <StyledNameEn>GARNET</StyledNameEn>
        <StyledNameKr>가넷</StyledNameKr>
      </StyledModelName>
      <StyledModelDesc className="model-desc">
        <StyledFeather2>
          <img src={Garnetfeather2} />
        </StyledFeather2>
        <StyledFeather3>
          <img src={Garnetfeather3} />
        </StyledFeather3>
        거래 빈도 높은 적극적인 투자 모델입니다.
        <StyledGraph className="Graph">
          <img src={Garnetgraph} width="100%" />
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
  color: rgb(167, 98, 98);
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
