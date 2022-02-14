import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useCookie from '../../../hooks/useCookie';
import { signIn } from '../../../modules/login';

export default function KakaoAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [, setHasRefresh] = useCookie('hasRefresh', 'false');
  useEffect(() => {
    try {
      const data = new URLSearchParams(window.location.search);
      console.log(data.get('code'));
      // fetch auth code to back: use axios.get()
      setHasRefresh('true');
      dispatch(signIn());
      navigate('/', { replace: true });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <div style={{ margin: '50%', color: 'white' }}>{'Loading...'}</div>;
}
