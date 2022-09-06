import styled from 'styled-components';
import { useState } from 'react';
import './../../common/FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import P0 from './p0';
import P1 from './p1';
import P2 from './p2';


export default function OptionPage() {

  const [SelectTopOption, setSelectTopOption]=useState(1)
  const [RightTopOption, setRightTopOption]=useState(2)
  const [LeftTopOption, setLeftTopOption]=useState(0)
  const [SelectTopOptionName,setSelectTopOptionName] = useState('첫번째')
  const [SelectTopOptionIcon, setSelectTopOptionIcon]=useState('fa-solid fa-house')
  const [A, setA]=useState(1)
  const [TestList,setTestList]=useState([0,1,2])


  const Options = [
    {
      id : 0,
      name : '계정',
      icon : 'fa-solid fa-house'
    },
    {
      id : 1,
      name : '계좌',
      icon : 'fa-solid fa-comments'
    },
    {
      id : 2,
      name : '앱정보',
      icon : 'fa-solid fa-gear'
    }
  ];
  const List = [0,1,2];

  // const TopFirstOption = () =>{
  //   setSelectTopOption(0)
  //   setSelectTopOptionName("첫번째");
  //   setSelectTopOptionIcon('fa-solid fa-house')
  // }
  // const TopSecondOption = () =>{
  //   setSelectTopOption(1)
  //   setSelectTopOptionName("두번째");
  //   setSelectTopOptionIcon('fa-solid fa-comments')
  // }
  // const TopThirdOption = () =>{
  //   setSelectTopOption(2)
  //   setSelectTopOptionName("세번째");
  //   setSelectTopOptionIcon('fa-solid fa-gear')
  // }

  // const Swap=(a)=>{
  //   const cur = SelectTopOption;
  //   const next = a.id;

  // }

  //옵션 목록 출력 함수
  const PrintList = () => {
    const result = [];
    if(A==0){
      return (<P0></P0>);
    }
    else if(A==1){

      return (<P1></P1>);
    }
    else if(A==2){

      return (<P2></P2>);
    }
    else{
      console.log("choice ERR!")
      return;
    }
    for (let i = 0; i < 6; i++) {
      result.push(
      <OptionTab>
        <OptionName>옵션{i}</OptionName>
      </OptionTab>);
    }

    return result;
  }

  const ClickRight=()=>{
    console.log('right');
    const temp=[0,1,2];
    for (let i =0;i<3;i++){
      temp[i] = (TestList[i]+1)%3
      List[i] = (List[i]+1)%3;
    }
    setTestList(temp);
    setA((A+1)%3);
  }
  const ClickLeft=()=>{
    console.log('left');
    const temp=[0,1,2];
    for (let i =0;i<3;i++){
      temp[i] = (TestList[i]+2)%3
      List[i] = (List[i]+2)%3;
    }
    setTestList(temp);
    setA((A+2)%3);
  }
  return (

    <StyledCommunityPage className="option_page">
      <SearchArea>
      </SearchArea>
 

      <TopButtenArea>
        <TopButtenBox className='notselected'><TopButten className='notselected'
            onClick={ClickLeft}>
          <StyledIcon
            icon={Options[TestList[0]].icon}
            className='notselected'
          >
          </StyledIcon>
        </TopButten>{Options[TestList[0]].name}</TopButtenBox>

        <TopButtenBox className='selected'><TopButten className='selected'>
          <StyledIcon
            icon={Options[TestList[1]].icon}
            className='selected'
          >
          </StyledIcon>
        </TopButten>{Options[TestList[1]].name}</TopButtenBox>

        <TopButtenBox className='notselected'><TopButten className='notselected'
            onClick={ClickRight}>
          <StyledIcon
            icon={Options[TestList[2]].icon}
            className='notselected'
          >
          </StyledIcon>
        </TopButten>{Options[TestList[2]].name}</TopButtenBox>
      </TopButtenArea>

      
      <div>{PrintList()}</div>
    </StyledCommunityPage>
  ); 
}
//검색창 위치
const SearchArea = styled.div`
  width: 100%;
  height: 80px;
  line-height: 45px;
  #background : yellow;
  padding :10px;
`;

//검색창
const SearchBox = styled.div`
  padding :10px;
  width :100%;
  height :100%;
  color : white;
  background : gray;
  border-radius: 20px;
  display : flex;
  align-items:center;
`;

//상단 마름모 아이콘
const StyledIcon = styled(FontAwesomeIcon)`
  transform: rotate(-45deg);
  ${(props) => {
    return props.className === 'selected'
      ? `color: white;
      font-size : 50px;`
      : `color: rgb(119, 119, 119)`;
  }};
`;

//상단 마름모 아이콘 위치
const TopButtenArea = styled.div`
  width : 100%;
  height : 28%;
  #background : white;
  display : flex;
  align-items:center;
  justify-content: space-around;
  
  border-bottom: 5px solid rgb(152, 128, 101);
`;

//상단 마름모 아이콘 박스
const TopButtenBox = styled.div`

  margin-left:14px;
  margin-right:14px;
  flex-grow:0;
  align-items:center;
  text-align : center;
  ${(props) => {
    if (props.className === 'selected') {
      return `
        color: white;
        font-size : large;
      `;
    } else if (props.className === 'notselected') {
      return `
        color: rgb(119, 119, 119);
      `;
    }
  }};
`;

//상단 마름모 아이콘 하나
const TopButten = styled.div`
  text-align: left;
  width : 150px;
  height:150px;
  background: rgb(0,0,0);
  transform: rotate(45deg);
  flex-grow:0;
  border-radius: 10%;
  display : flex;
  justify-content: center;
  
  align-items: center;
  ${(props) => {
    if (props.className === 'selected') {
      return `
        width : 150px;
        height: 150px;
        border: 10px solid rgb(152, 128, 101);
        margin-bottom:30px;
      `;
    } else if (props.className === 'notselected') {
      return `
        width : 100px;
        height: 100px;
        border: 7px solid rgb(119, 119, 119);
        margin-bottom:20px;
      `;
    } else {
      return `
        width : 100px;
        height: 100px;
        border: 7px solid red;
        background:red;
        margin-bottom:20px;
      `;
    }
  }};
`;


const StyledCommunityPage = styled.div`
  height: 100%;
`;

//게시글, 댓글 레이아웃
const OptionTab = styled.div`
  width:96%;
  margin-left:2%;
  padding:10px;
  border-bottom: 1px solid rgb(152, 128, 101);
  border-top: 1px solid rgb(32, 32,32,1);
  margin-top:10px;
`;

//게시글 제목
const OptionName = styled.div`
  color:white;
  font-size:22px;
`;

//스크롤
const ScrollTab = styled.div`
  overflow:scroll;
`;