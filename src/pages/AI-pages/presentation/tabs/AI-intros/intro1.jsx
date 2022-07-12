import styled from 'styled-components';
import { ReactComponent as Aquamarin} from './svgs/aquamarin.svg'

export default function Intro1() {
  return (
    <StyledIntroContainer>
      <StyledSpec1>
        <StyledNameEn>DIAMOND</StyledNameEn>
        <StyledNameKr>다이아몬드</StyledNameKr>
        <StyledDesc className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis neque mollitia vero quos
          vitae ducimus, fuga similique quas doloribus aut.
        </StyledDesc>
      </StyledSpec1>
      <StyledSpec2>
        <StyledGraphSpec>
          <Aquamarin />
        </StyledGraphSpec>
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
  font-size: 15vw;
  margin: 5px;
  text-align: center;
  color: rgb(119, 119, 119);
`;
const StyledNameKr = styled.div`
  font-size: 15vw;
  margin: 5px;
  text-align: center;
  color: white;
`;
const StyledDesc = styled.div`
  margin: 5px auto;
  padding: 10px;
  background-color: rgb(40, 40, 40);
  width: 90vw;
  border-radius: 5px;
  text-align: center;
`;
const StyledGraphSpec = styled.div``;
const StyledSpec1 = styled.div`
  overflow: hidden;
  width: 95vw;
  background: black;
  border-radius: 5px;
  margin: 10px auto;
`;
const StyledSpec2 = styled.div`
  overflow: hidden;
  width: 95vw;
  background: black;
  border-radius: 5px;
  margin: 10px auto;
`;
