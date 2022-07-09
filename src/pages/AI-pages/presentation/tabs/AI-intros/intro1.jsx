import styled from 'styled-components';
export default function Intro1() {
  return (
    <StyledIntroContainer>
      <StyledNameEn>DIAMOND</StyledNameEn>
      <StyledNameKr>다이아몬드</StyledNameKr>
      <StyledDesc className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis neque mollitia vero quos
        vitae ducimus, fuga similique quas doloribus aut.
      </StyledDesc>
    </StyledIntroContainer>
  );
}
const StyledIntroContainer=styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
`;
const StyledNameEn = styled.div`
  font-size: 15vw;
  margin:5px;
  text-align: center;
  color: rgb(119, 119, 119);
`;
const StyledNameKr = styled.div`
  font-size: 15vw;
  margin:5px;
  text-align: center;
  color: white;
`;
const StyledDesc = styled.div`
  margin: 5px auto;
  padding:10px;
  background-color: rgb(40, 40, 40);
  width: 90vw;
  border-radius: 5px;
  text-align: center;
`;
