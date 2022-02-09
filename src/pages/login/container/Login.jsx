import styled from 'styled-components';
import GoogleLoginButton from '../presentational/GoogleLoginButton';
import KakaoLoginButton from '../presentational/KakaoLoginButton';
import Logo from '../presentational/Logo';
import { authorizeKakao, initializeKakao } from './kakao';

export default function Login() {
  return (
    <LoginPageLayout>
      <Logo></Logo>
      <LayoutedKakao
        login={() => {
          initializeKakao();
          authorizeKakao();
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
