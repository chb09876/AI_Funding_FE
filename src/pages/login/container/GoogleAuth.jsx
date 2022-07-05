import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../../modules/login';
import { setItem } from '../../../utils/cookies';

export default function GoogleAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const code = new URLSearchParams(window.location.search).get('code');
      if (code === null) {
        throw Error('query parameter:code is not exist.');
      }
      // fetch auth code to back: use axios.post()
      axios
        .post(`${process.env.REACT_APP_API}/auth/callback`, {
          code,
          loginType: 'GOOGLE',
        })
        .then((response) => {
          if (response.data.isExistUser === true) {
            // success login
            const { accessToken, UID } = response.data;
            dispatch(signIn(accessToken, UID));
            setItem('has_refresh', 'true', 90);
            navigate('/', { replace: true });
          } else if (response.data.isExistUser === false) {
            navigate('/sign-up', { replace: true });
          }
        })
        .catch((error) => {
          // network communication error
          console.log('newtwork error!', error);
          navigate('/', { replace: true });
        });
    } catch (error) {
      console.log('unexpected error!', error);
      navigate('/', { replace: true });
    }
  }, [dispatch, navigate]);

  return <div style={{ margin: '50%', color: 'white' }}>{'로그인 중입니다...'}</div>;
}
