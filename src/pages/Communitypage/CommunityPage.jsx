import styled from 'styled-components';
import {useState} from 'react';

export default function CommunityPage(){
    const [SelectedTab, SelectTab] = useState(0);
    const [SelectedClass,SelectClass]=useState("공지");
    const [Title,SetTitle] = useState("커뮤니티");

    const TabZero = () =>{
      SelectTab(0)
      SelectClass("공지");
      SetTitle("공지");
    }
    const TabOne = () =>{
      SelectTab(1)
      SelectClass("주식");
      SetTitle("주식");
    }
    const TabTwo = () =>{
      SelectTab(2)
      SelectClass("잡담");
    }
    const TabThree = () =>{
      SelectTab(3)
      SelectClass("내가 쓴 글");
    }
    const TabFour = () =>{
      SelectTab(4)
      SelectClass("스크랩");
    }


    //게시물 목록 출력 함수
    const PrintBoardList = () =>{
      const result = [];
      for (let i=0; i< 2;i++){
        result.push(<BoardTab>
          <DisplayFlex>
          <BoardTitle>글제목</BoardTitle>
          </DisplayFlex>
          <BoardBottomTab>
          <BoardDate>작성 날짜</BoardDate><Like>♡ 좋아요수</Like><Comment>💬 댓글수</Comment>
          </BoardBottomTab>
          </BoardTab>);
      }

      return result;
    }

    return(
      <StyledCommunityPage className="community_page">
      <StyledTabs>
     <StyledTab>
      <StyledTitle>
      {Title}
      </StyledTitle>
      </StyledTab>
      </StyledTabs>
      <DisplayFlex>
          <StyledTabButton
        className={SelectedTab === 0 ? 'selected' : 'notselected'}
        onClick={TabZero}
      >
        공지
      </StyledTabButton>
      <DivisionTab>
        |
      </DivisionTab>
          <StyledTabButton
        className={SelectedTab === 1 ? 'selected' : 'notselected'}
        onClick={TabOne}
      >
        주식
      </StyledTabButton>
      <DivisionTab>
        |
      </DivisionTab>
      <StyledTabButton
        className={SelectedTab === 2 ? 'selected' : 'notselected'}
        onClick={TabTwo}
      >
        잡담
      </StyledTabButton>
      <DivisionTab>
        |
      </DivisionTab>
      <StyledTabButton
        className={SelectedTab === 3 ? 'selected' : 'notselected'}
        onClick={TabThree}
      >
        내가 쓴 글
      </StyledTabButton>
      <DivisionTab>
        |
      </DivisionTab>
      <StyledTabButton
        className={SelectedTab === 4 ? 'selected' : 'notselected'}
        onClick={TabFour}
      >
        스크랩
      </StyledTabButton>
      </DisplayFlex>
      <HotBoardTab>
        <DisplayFlex>
      <HotTitile>HOT</HotTitile><HotTitleContent>인기 {SelectedClass} 게시글 제목</HotTitleContent>
      </DisplayFlex>
      <BottomTab>
      <BoardDate>작성 날짜</BoardDate><Like>♡ 좋아요수</Like><Comment>💬 댓글수</Comment>
      </BottomTab>
      </HotBoardTab>
      <div>{PrintBoardList()}</div>
</StyledCommunityPage>
    );
}

const StyledCommunityPage = styled.div`
  height: 100%;
`;
const StyledTabs = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background: rgb(32, 32, 32);
`;

const StyledTab = styled.div`
  margin-top: 10px;
  width: 100%;
`;

const DivisionTab = styled.div`
line-height: 45px;
color: rgb(119, 119, 119);
font-size: 14px;
`;

//우측정렬, 좌측정렬 위한 스타일 태그
const DisplayFlex = styled.div`
    display:flex;
`;

const StyledTitle = styled.div`
  width: 100%;
  text-align: center;
  height: 100%;
  line-height: 45px;
  font-size: 18px;
  color: rgb(152, 128, 101);
  border-bottom: 2px solid rgb(152, 128, 101);
`;

const StyledTabButton = styled.div`
  line-height: 45px;
  font-size: 14px;
  margin-left:14px;
  margin-right:14px;
  ${(props) => {
    if (props.className === 'selected') {
      return `color: rgb(152, 128, 101);
      `;
    } else if (props.className === 'notselected') {
      return `color: rgb(119, 119, 119);
      
      `;
    }  else {
      return `color: rgb(119, 119, 119);
      `;
    }
  }};
`;

//인기게시글 레이아웃
const HotBoardTab = styled.div`
  width:96%;
  height:80px;
  margin-left:2%;
  padding:10px;
  border-right: 1px solid rgb(152, 128, 101);
  border-left: 1px solid rgb(152, 128, 101);
  border-top: 1px solid rgb(152, 128, 101);
  border-radius:5px 5px 5px 5px;
  border-bottom: 1px solid rgb(152, 128, 101);
`;

//HOT
const HotTitile=styled.div`
  color:#ED6A60;
  margin-right:5px;
  font-size:17px;
`;

//인기 게시글 제목
const HotTitleContent=styled.div`
  color:white;
  font-size:17px;
`;

//인기게시글, 게시글내용 좋아요,댓글 레이아웃
const BottomTab = styled.div`
margin-top:20px;
display:flex;
width:100%;
font-size:15px;
`;

//날짜
const BoardDate =styled.div`
  color: rgb(119, 119, 119);
`;

//좋아요
const Like =styled.div`
  color:#ED6A60;
  margin-left:auto;  
`; //margin-left:auto; 로 우측정렬

//말풍선
const Comment = styled.div`
  color:#61C454;
  margin-left:5px;
`;

//게시글, 댓글 레이아웃
const BoardTab = styled.div`
  width:96%;
  margin-left:2%;
  padding:10px;
  border-bottom: 1px solid rgb(152, 128, 101);
  border-top: 1px solid rgb(32, 32,32,1);
  margin-top:10px;
`;

//게시글 제목
const BoardTitle=styled.div`
  color:white;
  font-size:22px;
`;

//게시글 좋아요,댓글 레이아웃
const BoardBottomTab = styled.div`
margin-top:13px;
display:flex;
width:100%;
font-size:15px;
`;

//스크롤
const ScrollTab = styled.div`
  overflow:scroll;
`;