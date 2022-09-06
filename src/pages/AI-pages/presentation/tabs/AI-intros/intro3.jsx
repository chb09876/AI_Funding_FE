import styled from 'styled-components';
import Ameth from './svgs/AmethIcon.svg';
import Amethfeather1 from './svgs/Amethfeather1.svg';
import Amethfeather2 from './svgs/Amethfeather2.svg';
import Amethgraph from './svgs/Amethgraph.svg';

export default function Intro3() {
  return (
    <StyledIntroContainer>
      <StyledSpec>
        <StyledTitle>
          <StyledIcon>
            <img src={Ameth} width="100%" />
          </StyledIcon>
          <StyledFeather1>
            <img src={Amethfeather1} />
          </StyledFeather1>
          <StyledNameEn>AMETHYST</StyledNameEn>
          <StyledNameKr>자수정</StyledNameKr>
        </StyledTitle>
        <StyledDesc className="desc">
          <StyledFeather2>
            <img src={Amethfeather2} />
          </StyledFeather2>
          레버리지를 활용한 공격적인 투자 모델입니다.
          <StyledGraph className="Graph">
            <img src={Amethgraph} width="100%" />
          </StyledGraph>
        </StyledDesc>
      </StyledSpec>
    </StyledIntroContainer>
  );
}
const StyledIntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StyledNameEn = styled.div`
  position: relative;
  font-size: 15vw;
  margin: 25px 5px;
  text-align: center;
  z-index: 1;
  color: rgb(65, 48, 93);
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
const StyledDesc = styled.div`
  position: relative;
  margin: auto;
  padding: 10px;
  height: 80vw;
  width: 90vw;
  border-radius: 5px;
  text-align: center;
`;
const StyledTitle = styled.div`
  position: relative;
`;
const StyledIcon = styled.div`
  position: absolute;
  width: 25vw;
  top: 5vw;
  left: 50%;
  transform: translate(-50%);
  z-index: 2;
`;
const StyledFeather1 = styled.div`
  position: absolute;
  top: 25vw;
  right: 10px;
  z-index: 2;
`;
const StyledFeather2 = styled.div`
  position: absolute;
  top: 35vw;
  left: 00px;
  z-index: 2;
`;
const StyledSpec = styled.div`
  overflow: hidden;
  width: 95vw;
  background: black;
  border-radius: 10px;
  margin: 10px auto;
`;

const StyledGraph = styled.div`
  overflow: hidden;
  width: 95vw;
  background: black;
  margin: auto;
  display: flex;
  justify-content: center;
  width: 80vw;
  margin-top: 10px;
`;
