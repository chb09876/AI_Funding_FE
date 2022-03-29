import styled from "styled-components";

export default function DetailLogs() {
  return (
    <StyledLogContainer>
    <StyledLog>
      <StyledDateLog>
       2022-00-07
       <br/>
       2022-00-08
       <br/>
       2022-00-09
       <br/>
       2022-00-10
       <br/>
       2022-00-11
       <br/>
       2022-00-12
       <br/>
       2022-00-13
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
    </StyledLog>
    </StyledLogContainer>
  );
}

// 기록 날짜
const StyledDateLog = styled.div`
  float: left;
  font-size: 1.2rem;
  padding-left: 20px;
  width: 50%;
  color: gray;
`;

// 기록 이익 
const StyledProfitLog = styled.div`
  font-size: 1.2rem;
  padding-right: 20px;
  width: 50%;
  color: white;
  float: right;
  text-align: right;
`;

const StyledLog = styled.div``;

const StyledLogContainer = styled.div`
  margin-top: 10px;
  padding-bottom: 10px;
  width: 100%;
`;