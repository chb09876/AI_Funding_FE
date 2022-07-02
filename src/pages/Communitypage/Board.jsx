import styled from 'styled-components';

export default function Board(){
    return (
      <StyledLogContainer>
        <StyledTab>
          <PreviousButton>
        <GoldText>◀ 이전</GoldText>
        </PreviousButton>
        </StyledTab>
 <StyledTab>
  <BoardContentTab>
        <DisplayFlex>
        <GoldText>😀</GoldText>&nbsp;<WhiteText>이름</WhiteText>
        </DisplayFlex>
        <DisplayFlex>
          <ContentTab>
        <WhiteText>
          내용
          </WhiteText>
          </ContentTab>
        </DisplayFlex>
        <BottomTab>
        <Like>♡ 좋아요수</Like><Comment>💬 댓글수</Comment>
        </BottomTab>
      </BoardContentTab>
</StyledTab>
 <StyledTab>
       <BoardTab>
          <DisplayFlex>
            <GoldText>😀</GoldText>&nbsp;<WhiteText>이름</WhiteText>
          </DisplayFlex>
            <WhiteText>내용</WhiteText>
          <CommentBottomTab>
            <BoardDate>작성 날짜</BoardDate><Like>♡ 좋아요수</Like>
          </CommentBottomTab>
        </BoardTab>
      </StyledTab>
      </StyledLogContainer>
    );
};

//퍼센트 대신 vh를 이용하여 할당 예로 높이가 900px 면 1vh는 9px라고 한다.
const StyledLogContainer = styled.div`
  height: 90vh;
`;

const StyledTab = styled.div`
  margin-top: 10px;
  width: 100%;
`;

//우측정렬, 좌측정렬 위한 스타일 태그
const DisplayFlex = styled.div`
    display:flex;
`;

//댓글 작성날짜,좋아요 레이아웃
const CommentBottomTab = styled.div`
margin-top:7px;
display:flex;
width:100%;
font-size:12px;
`;

//게시글 내용 레이아웃
const BoardContentTab = styled.div`
  width:96%;
  height:320px;
  margin-left:2%;
  padding:10px;
  border-right: 1px solid rgb(152, 128, 101);
  border-left: 1px solid rgb(152, 128, 101);
  border-top: 1px solid rgb(152, 128, 101);
  border-radius:5px 5px 5px 5px;
  border-bottom: 1px solid rgb(152, 128, 101);
`;

//게시글 내용 스크롤 탭
const ContentTab = styled.div`
  height:240px;
  overflow:scroll;
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