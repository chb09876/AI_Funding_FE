import { Route, Routes } from 'react-router-dom';
import BackgroundLayout from './common/BackgroundLayout';
import MenuNav from './common/MenuNav';
import Home from './sample/pages/home/presentational/Home';
import Login from './pages/login/container/Login';
import KakaoAuth from './pages/login/container/KakaoAuth';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from './modules/login';

export default function App() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const dispatch = useDispatch();

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
            <Route
              path="/"
              element={
                <>
                  <Login />
                  <button
                    onClick={() => {
                      // 개발용 로그인 스킵 버튼.
                      // set isLoggedIn True
                      dispatch(signIn());
                    }}
                  >
                    Skip
                  </button>
                </>
              }
            />
            <Route path="/oauth/*" element={<KakaoAuth />} />
            <Route path="*" element={'404'} />
          </>
        )}
      </Routes>
      {isLoggedIn && <MenuNav />}
    </BackgroundLayout>
  );
}