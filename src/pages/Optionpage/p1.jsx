import styled from 'styled-components';
import { useState } from 'react';


export default function P1() {
  const [select,setSelect]=useState(3);
  
  const draw=()=>{
    if(select==0){
        console.log("zero");
        return(
            <>
                <Titles>계좌 이름 변경</Titles>
                <InputBox>입력</InputBox>
                <Texts>
                    <div>
                        <button>변경</button>
                    </div>
                </Texts>
            </>
        );
    }
    if(select==1){
        console.log("one");
        return(
            <>
                <Titles>계좌 삭제</Titles>
                <Texts>정말 계좌를 삭제 하시겠습니까?
                    <div>
                        <button>삭제</button>
                    </div>
                </Texts>
            </>
        )
    }
}
    return (
    <>
        <OptionTab>
            <OptionName onClick={()=>setSelect(0)}>계좌 이름 변경</OptionName>
        </OptionTab>
        <OptionTab>
            <OptionName onClick={()=>setSelect(1)}>계좌 삭제</OptionName>
        </OptionTab>
        
      <div>{draw()}</div>
    </>
    );
}

const InputBox = styled.div`
  padding :10px;
  width :98%;
  height :100%;
  color : white;
  background : gray;
  border-radius: 20px;
  display : flex;
  align-items:center;
  
  margin:2%;
  margin-left:10px;
`;


const Titles = styled.div`
  width: 100%;
  text-align: center;
  height: 100%;
  line-height: 45px;
  font-size: 18px;
  color: rgb(152, 128, 101);
  border-bottom: 2px solid rgb(152, 128, 101);
`;


const Texts = styled.div`
  width:96%;
  text-align: center;
  color: white;
  margin-left:2%;
  padding:10px;
  border-bottom: 1px solid rgb(152, 128, 101);
  border-top: 1px solid rgb(32, 32,32,1);
  margin-top:10px;
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