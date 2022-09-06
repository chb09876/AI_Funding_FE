import styled from 'styled-components';
import { useState } from 'react';


export default function Logout() {
    return (
    <>
        <LogOut>로그아웃</LogOut>
    </>
    );
}

const LogOut = styled.div`
  width: 100%;
  text-align: center;
  height: 100%;
  line-height: 45px;
  font-size: 18px;
  color: rgb(152, 128, 101);
  border-bottom: 2px solid rgb(152, 128, 101);
`;

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