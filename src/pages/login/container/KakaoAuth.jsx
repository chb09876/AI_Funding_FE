import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../../modules/login';

export default function KakaoAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    try {
      const data = new URLSearchParams(window.location.search);
      console.log(data.get('code'));
      // fetch auth code to back: use axios.post()
      dispatch(signIn());
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }, [navigate, dispatch]);

  return (
    <div
      style={{
        margin: '50%',
        color: 'white',
      }}
    >
      {'Loading...'}
    </div>
  );
}
