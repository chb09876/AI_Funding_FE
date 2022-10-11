import styled from 'styled-components';
import { useState } from 'react';


export default function P0() {
    const [select,setSelect]=useState(3);

    const draw=()=>{
        if(select==0){
            console.log("zero");
            return(
                <>
                    <Titles>로그아웃</Titles>
                    <Texts>정말 로그아웃 하시겠습니까?
                        <div>
                            <button>로그아웃</button>
                        </div>
                    </Texts>
                </>
            );
        }
        if(select==1){
            console.log("one");
            return(
                <>
                    <Titles>회원탈퇴</Titles>
                    <Texts>정말 회원탈퇴 하시겠습니까?
                        <div>
                            <button>회원탈퇴</button>
                        </div>
                    </Texts>
                </>
            )
        }
    }



    return (
    <>
        <OptionTab>
            <OptionName onClick={()=>setSelect(0)}>로그아웃</OptionName>
        </OptionTab>
        <OptionTab>
            <OptionName onClick={()=>setSelect(1)}>회원 탈퇴</OptionName>
        </OptionTab>
      <div>{draw()}</div>
    </>
    );
}


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

const Titles = styled.div`
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