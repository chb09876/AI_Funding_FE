import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useRef, useCallback } from 'react';
/*

글 작성 페이지

글 쓰는 란 (미완)
완료 버튼 (미완)

*/



export default function Write(props){

    const navigate=useNavigate();

    console.log(props.class)

    const [form, setForm] = useState({
      Title: '',
      Content: '',
      Class:props.class
    });

    const { Title, Content, Class } = form;

    //높이를 입력 텍스트 값에 맞추기 위해서
    const textRef = useRef();
    const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  }, []);

  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존의 값 복사 (spread operator)
      [e.target.name]: e.target.value, // 덮어쓰기
    };
    console.log(nextForm);
    setForm(nextForm);
  };

    const ClickpreviousBtn = () =>{ 
        navigate(-1);
    }

    const ClickOkBtn = () =>{
      console.log(Class,Title,Content,"-->이걸로 보냅니다!")
      navigate(-1);
    }

    return(
        <StyledLogContainer>
        <StyledTabs>
     <StyledTab>
     <StyledTitle>
      <DisplayFlex>
        <PreviousButton onClick = {ClickpreviousBtn}>
          <WhiteText>X</WhiteText>
        </PreviousButton>
          <CenterTitle>글 작성</CenterTitle>
          <OkBtnBack onClick = {ClickOkBtn}>
          <OkBtn>확 인</OkBtn>
        </OkBtnBack>
      </DisplayFlex>
      </StyledTitle>
      </StyledTab>
      </StyledTabs>
        <InputTab>
          <input 
          name="Title"
          type="text"
          placeholder='제목'
          maxLength='20'
          onChange={onChange}
          style={{
            background:"rgb(32, 32, 32)",
            borderRight:"0px",
            borderbottom:"2px solid rgb(204, 204, 204)",
            width:"100%",
            marginleft:"10px",
            padding:"5px",
            color:"rgb(204, 204, 204)",
            fontSize:"30px"
          }}>
            
          </input>
          </InputTab>
          <InputTab>
          <textarea name="Content" placeholder='내용을 입력하세요' maxLength="1200"
           
            onChange={onChange}
            style={{
              width:"100%",
              background:"rgb(32, 32, 32)",
              border:"none",
              padding:"5px",
              marginTop:"10px",
              color:"rgb(204, 204, 204)",
              fontSize:"20px"
            }}
            onInput={handleResizeHeight}
            ref={textRef}
          ></textarea>
          </InputTab>
      </StyledLogContainer>
    );
}

const StyledLogContainer = styled.div`
  height:100%
`;

const StyledTab = styled.div`
  margin-top: 10px;
  width: 100%;
`;

const InputTab= styled.div`
  margin-left:10px;
  margin-right:10px;
`;

//하얀글자 스타일
const WhiteText = styled.div`
  color:white;
  font-size:14px;
`;

//금색글자 스타일
const GoldText =styled.div`
font-size: 14px;
color: rgb(152, 128, 101);
`;

//이전 버튼
const PreviousButton = styled.div`
  margin-left:13px;
`;

const StyledTabs = styled.div`
  width: 100%;
  height: 60px;
  background: rgb(32, 32, 32);
`;

const StyledTitle = styled.div`
  width: 100%;
  text-align: center;
  height: 100%;
  line-height: 45px;
  color: rgb(152, 128, 101);
  border-bottom: 2px solid rgb(152, 128, 101);
`;

//우측정렬, 좌측정렬 위한 스타일 태그
const DisplayFlex = styled.div`
    display:flex;
`;

const CenterTitle=styled.div`
   margin-left:calc((100% - 95px) / 2 );
   font-size: 18px;
`;

const OkBtn =styled.div`
text-size:14px;
color:black;
text-align:center;
margin-top:-13px;
`;

const OkBtnBack=styled.div`
margin-left:auto;
margin-right:13px;
background-color:white;
padding:3px;
height:23px;
border-radius:5px 5px 5px 5px;
margin-top:10px;
`;

const Bottom=styled.div`
height:100%;
`;