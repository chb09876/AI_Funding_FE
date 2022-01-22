import styled from "styled-components";
import GoogleLoginButton from "../presentational/GoogleLoginButton";
import KakaoLoginButton from "../presentational/KakaoLoginButton";
import Logo from "../presentational/Logo";
import { useEffect, useState } from "react";
import { initializeKakao, loginKakaoWithPopup } from "./kakao";

export default function Login() {
  // const [login, setIsLogin] = useState(false);
  // useEffect(() => {
  //   if (!login) console.log("로그인 해주세요");
  //   else console.log("로그인 되었습니다!");
  // }, [login]);
  useEffect(() => {
    initializeKakao();
    // check token
    // if token is not exist or expired, make user to press login button
    // else token is validated, go home page
  }, []);

  return (
    <LoginPageLayout>
      <Logo></Logo>
      <LayoutedKakao
        login={() => {
          loginKakaoWithPopup();
        }}
      ></LayoutedKakao>
      <LayoutedGoogle></LayoutedGoogle>
    </LoginPageLayout>
  );
}

const LoginPageLayout = styled.div`
  // border: 3px yellow solid;
  flex-grow: 1;

  // layout
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LayoutedKakao = styled(KakaoLoginButton)`
  margin-top: 10%;
`;

const LayoutedGoogle = styled(GoogleLoginButton)`
  margin-top: 7%;
`;
