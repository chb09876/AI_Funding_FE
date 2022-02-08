import { Route, Routes } from 'react-router-dom';
import BackgroundLayout from './common/BackgroundLayout';
import MenuNav from './common/MenuNav';
import Home from './sample/pages/home/presentational/Home';
import Login from './pages/login/container/Login';
import { useState } from 'react';

export default function App() {
  // 해당 state는 임시로 만들어둔 것. 추후 수정 예정.
  // isLoggedIn이 true면 로그인이 된 상태로 로그인 페이지 이외의 페이지에 접속할 수 있습니다.
  // isLoggedIn이 false면 로그인페이지만 접속할 수 있고 나머지는 접속할 수 없습니다.
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
                      setIsLoggedIn(true);
                    }}
                  >
                    Skip
                  </button>
                </>
              }
            />
            <Route path="*" element={'404'} />
          </>
        )}
      </Routes>
      {isLoggedIn && <MenuNav />}
    </BackgroundLayout>
  );
}
