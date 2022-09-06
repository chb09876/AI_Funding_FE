import styled from 'styled-components';
import { useState } from 'react';


export default function P2() {
    const [select,setSelect]=useState(3);
    
    const draw=()=>{
    if(select===0){
        console.log("zero");
        return(
            <>
                <Titles>버전</Titles>
                <Texts>1.0V
                </Texts>
            </>
        );
    }
    if(select===1){
        console.log("one");
        return(
            <>
                <Titles>배포일</Titles>
                <Texts>2022/09/05</Texts>
            </>
        )
    }
    if(select===2){
        console.log("two");
        return(
            <>
                <Titles>업데이트 날자</Titles>
                <Texts>2022/09/01</Texts>
            </>
        )
    }
}

    return (
    <>
        <OptionTab>
            <OptionName onClick={()=>setSelect(0)}>버전</OptionName>
        </OptionTab>
        <OptionTab>
            <OptionName onClick={()=>setSelect(1)}>배포일</OptionName>
        </OptionTab>
        <OptionTab>
            <OptionName onClick={()=>setSelect(2)}>업데이트 날자</OptionName>
        </OptionTab>
      <div>{draw()}</div>
    </>
    );
}


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