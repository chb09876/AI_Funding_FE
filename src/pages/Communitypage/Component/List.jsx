import styled from 'styled-components';
import { useState } from 'react';

/*

게시글 컴포넌트

글제목, 작성날짜, 좋아요 수, 댓글 수

*/

export default function List(props){  

  return(
    <BoardTab>
          <DisplayFlex>
          <BoardTitle>{props.SelectedClass}글제목</BoardTitle>
          </DisplayFlex>
          <BoardBottomTab>
          <BoardDate>작성 날짜</BoardDate><Like >♡ 좋아요수</Like><Comment>💬 댓글수</Comment>
          </BoardBottomTab>
          </BoardTab>);
}

//우측정렬, 좌측정렬 위한 스타일 태그
const DisplayFlex = styled.div`
    display:flex;
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

//게시글 좋아요,댓글 레이아웃
const BoardBottomTab = styled.div`
margin-top:13px;
display:flex;
width:100%;
font-size:15px;
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

//날짜
const BoardDate =styled.div`
  color: rgb(119, 119, 119);
`;
