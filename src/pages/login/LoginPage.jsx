import styled from 'styled-components';
import google_img from '../../image/google_login.png';
import kakao_img from '../../image/kakao_login_large_narrow.svg';
import logo_img from '../../image/logo.svg';
import { useDispatch } from 'react-redux';
import { signIn } from '../../modules/login';

export default function Login() {
  const dispatch = useDispatch();

  return (
    <LoginPageLayout>
      <Logo src={logo_img} />
      <KakaoButton href={`${process.env.REACT_APP_API}/api/auth/KAKAO`} />
      <GoogleButton href={`${process.env.REACT_APP_API}/api/auth/GOOGLE`} />
      <button
        onClick={() => {
          // 개발용 로그인 스킵 버튼.
          // set isLoggedIn True
          dispatch(signIn('fakeToken', 'fakeUID'));
        }}
      >
        Skip
      </button>
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

const KakaoButton = styled.a`
  background-image: url(${kakao_img});
  background-size: contain;

  margin-top: 10%;
  width: 216px;
  height: 53px;
  border-radius: 12px;

  // reset user agent
  padding: 0;
  border: none;
`;

const GoogleButton = styled.a`
  background-image: url(${google_img});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: white;

  width: 216px;
  height: 53px;
  border-radius: 12px;
  margin-top: 7%;

  // reset user agent
  padding: 0;
  border: none;
`;

const Logo = styled.img`
  width: 200px;
  height: 200px;
`;
