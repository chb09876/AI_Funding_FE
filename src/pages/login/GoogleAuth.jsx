import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../modules/login';

export default function GoogleAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const code = new URLSearchParams(window.location.search).get('code');
      if (code === null) {
        throw Error('query parameter:code is not exist.');
      }
      axios
        .post(`${process.env.REACT_APP_API}/api/auth/sign-in`, {
          code,
          loginType: 'GOOGLE',
        })
        .then((res) => {
          const {
            data: { accessToken, UID, isExistUser },
          } = res;
          dispatch(signIn(accessToken, UID));
          if (isExistUser === true) {
            navigate('/', { replace: true });
          } else if (isExistUser === false) {
            navigate('/sign-up', { replace: true, UID, loginType: 'GOOGLE' });
          }
        })
        .catch((error) => {
          console.log(error);
          navigate('/', { replace: true });
        });
    } catch (err) {
      console.log(err);
    }
  }, [dispatch, navigate]);

  return <div style={{ margin: '50%', color: 'white' }}>{'로그인 중입니다...'}</div>;
}
