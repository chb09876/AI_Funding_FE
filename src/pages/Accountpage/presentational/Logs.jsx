import React, { useState } from 'react';
import styled from "styled-components";
import DetailLogs from "./DetailLogs";

export default function Logs(props) {
  const [setOpen, setClosed] = useState(false);
  return (
    <StyledLogContainer>
    <StyledLog>
      <StyledDateLog>
       2022-00-00
       <br/>
       2022-00-01
       <br/>
       2022-00-02
       <br/>
       2022-00-03
       <br/>
       2022-00-04
       <br/>
       2022-00-05
       <br/>
       2022-00-06
      </StyledDateLog>
      <StyledProfitLog>
       + 000000원
       <br/>
       + 000000원
       <br/>
       + 000000원
       <br/>
       + 000000원
       <br/>
       + 000000원
       <br/>
       + 000000원
       <br/>
       + 000000원
      </StyledProfitLog>
      {setOpen === true ? <DetailLogs/> : ""} 

    <StyledDetails>
    <summary>
      <StyledMoreLog
        onClick = {() => {
        setClosed(!setOpen)
        }}>
      {setOpen === true ? "닫기" : "더보기"} 
      </StyledMoreLog>
    </summary>
    
    </StyledDetails>
    </StyledLog>
    </StyledLogContainer>
  );
}

const StyledDetails = styled.details`
  & > summary {
    color: white;
    padding-top: 10px;
    padding-bottom: 10px;
    list-style: none;
  }
`;

// 기록 날짜
const StyledDateLog = styled.div`
  float: left;
  border-top: 1px solid #b8a88e;
  font-size: 1.2rem;
  padding-left: 20px;
  padding-top: 20px;
  width: 50%;
  color: gray;
`;

// 기록 이익 
const StyledProfitLog = styled.div`
  border-top: 1px solid #b8a88e;
  font-size: 1.2rem;
  padding-right: 20px;
  padding-top:20px;
  width: 50%;
  color: white;
  float: right;
  text-align: right;
`;

const StyledLog = styled.div`
  color: white;
  margin: auto;
  font-size: 16px;
`;
const StyledLogContainer = styled.div`
  margin-top: 10px;
  padding-bottom: 10px;
  width: 100%;
`;

const StyledMoreLog = styled.div`
  text-align: center;
  color: gray;
`;

