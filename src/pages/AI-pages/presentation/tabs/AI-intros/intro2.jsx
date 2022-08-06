import styled from 'styled-components';
import Garnet from './svgs/GarnetIcon.svg';
import Garnetfeather1 from './svgs/Garnetfeather1.svg';
import Garnetfeather2 from './svgs/Garnetfeather2.svg';
import Garnetfeather3 from './svgs/Garnetfeather3.svg';
import Garnetgraph from './svgs/Garnetgraph.svg';

export default function Intro2() {
  return (
    <StyledIntroContainer>
      <StyledSpec1>
        <StyledTitle>
          <StyledIcon>
            <img src={Garnet} width="100%"/>
          </StyledIcon>
          <StyledFeather1>
            <img src={Garnetfeather1} />
          </StyledFeather1>
          <StyledNameEn>GARNET</StyledNameEn>
          <StyledNameKr>가넷</StyledNameKr>
        </StyledTitle>
        <StyledDesc className="desc">
          <StyledFeather2>
            <img src={Garnetfeather2} />
          </StyledFeather2>
          <StyledFeather3>
            <img src={Garnetfeather3} />
          </StyledFeather3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis neque mollitia vero quos
          vitae ducimus, fuga similique quas doloribus aut.
        </StyledDesc>
      </StyledSpec1>
      <StyledSpec2>
        <StyledGraph className='Graph'>
          <img src={Garnetgraph} width="100%" />
        </StyledGraph>
      </StyledSpec2>
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
  margin: 5px;
  text-align: center;
  z-index: 1;
  color: rgb(167, 98, 98);
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
  width: 30vw;
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
  top: 25vw;
  left: 00px;
  z-index: 2;
`;
const StyledFeather3 = styled.div`
  position: absolute;
  top: 50vw;
  right: 0px;
  z-index: 2;
`;
const StyledSpec1 = styled.div`
  overflow: hidden;
  width: 95vw;
  background: black;
  border-radius: 10px;
  margin: 10px auto;
`;
const StyledSpec2 = styled.div`
  overflow: hidden;
  width: 95vw;
  background: black;
  border-radius: 10px;
  margin: auto;
  display : flex;
  justify-content:center;
`;
const StyledGraph = styled.div`
  width: 80vw;
  margin-top:10px;
`;
