import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import BackgroundLayout from './common/BackgroundLayout';
import MenuNav from './common/MenuNav';
import Home from './pages/home/presentational/Home';
import Login from './pages/login/LoginPage';
import KakaoAuth from './pages/login/KakaoAuth';
import GoogleAuth from './pages/login/GoogleAuth';
import { useDispatch, useSelector } from 'react-redux';
import AiPages from './pages/AI-pages/presentation/AiPages';
import AccountPage from './pages/Accountpage/presentational/AccountPage';
import { getItem } from './utils/cookies';
import axios from 'axios';
import { signIn, updateToken } from './modules/login';
import CommunityPage from './pages/Communitypage/CommunityPage';
import RegisterForm from './pages/login/RegisterForm';
import OptionPage from './pages/Optionpage/OptionPage';

export default function App() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      // automatically login logic
      if (isLoggedIn === false) {
        const hasRefresh = getItem('has_refresh');
        if (hasRefresh === 'true') {
          // request new access token with posting refresh token(cookie)
          axios
            .get(`${process.env.REACT_APP_API}/auth/token`, { withCredentials: true })
            .then((response) => {
              const { accessToken, UID } = response.data;
              dispatch(signIn(accessToken, UID));
            })
            .catch((error) => {
              console.error(error);
            });
        }
      }
    } catch (error) {
      console.error(error);
    }
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    try {
      // request access token every 25 minutes
      const interval = setInterval(() => {
        axios
          .post(`${process.env.REACT_APP_API}/auth/token`)
          .then((response) => {
            const { accessToken } = response.data;
            dispatch(updateToken(accessToken));
          })
          .catch((error) => {
            console.log(error);
          });
      }, 25 * 60 * 1000);

      return () => {
        clearInterval(interval);
      };
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  return (
    <BackgroundLayout className="App">
      <Routes>
        {isLoggedIn ? (
          // route after login
          <>
            <Route path="/" element={<Home />} />
            <Route path="/second" element={<AiPages />} />
            <Route path="/third" element={<AccountPage />} />
            <Route path="/fourth/*" element={<CommunityPage />} />
            <Route path="/fifth" element={<OptionPage />} />
            <Route path="*" element={'404'} />
          </>
        ) : (
          // route before login
          <>
            <Route path="/oauth/kakao" element={<KakaoAuth />} />
            <Route path="/oauth/google" element={<GoogleAuth />} />
            <Route path="/sign-up" element={<RegisterForm />} />
            <Route path="*" element={<Login />} />
          </>
        )}
      </Routes>
      {isLoggedIn && <MenuNav />}
    </BackgroundLayout>
  );
}
