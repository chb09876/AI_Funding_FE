import { Route, Routes } from 'react-router-dom';
import BackgroundLayout from './common/BackgroundLayout';
import MenuNav from './common/MenuNav';
import Home from './sample/pages/home/presentational/Home';
import Login from './pages/login/container/Login';
import KakaoAuth from './pages/login/container/KakaoAuth';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import useCookie from './hooks/useCookie';

export default function App() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const [hasRefreshCookie] = useCookie('hasRefresh', '');

  useEffect(() => {
    if (hasRefreshCookie === 'true') {
      console.log('I have Refresh Token!');
    }
  }, [hasRefreshCookie]);

  return (
    <BackgroundLayout className="App">
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/second" element={'AI page'} />
            <Route path="/third" element={'Account page'} />
            <Route path="/fourth" element={'Community page'} />
            <Route path="/fifth" element={'Settings page'} />
            <Route path="*" element={'404'} />
          </>
        ) : (
          <>
            <Route path="/oauth/*" element={<KakaoAuth />} />
            <Route path="*" element={<Login />} />
          </>
        )}
      </Routes>
      {isLoggedIn && <MenuNav />}
    </BackgroundLayout>
  );
}
