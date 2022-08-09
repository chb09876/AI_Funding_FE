import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';
import styled from 'styled-components';
import { signIn } from '../../modules/login';

export default function RegisterForm() {
  const [email, setEmail] = useState({
    value: '',
    validation: { ok: false, msg: '이메일을 작성해주세요!' },
  });

  const [nickname, setNickname] = useState({
    value: '',
    validation: { ok: false, msg: '닉네임을 작성해주세요!' },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const onChangeNickname = (event) => {
    event.preventDefault();
    setNickname({
      value: event.target.value,
      validation: {
        ok: false,
        msg: event.target.value === '' ? '닉네임을 작성해주세요!' : '작성중...',
      },
    });
  };

  const onChangeEmail = (event) => {
    event.preventDefault();
    setEmail({
      value: event.target.value,
      validation: {
        ok: false,
        msg: event.target.value === '' ? '이메일을 작성해주세요!' : '작성중...',
      },
    });
  };

  const onBlurInputNickname = (event) => {
    event.preventDefault();
    onBlurInput(
      nickname,
      setNickname,
      `${process.env.REACT_APP_API}/api/auth/duplicate/nickname`,
      validateNickname
    );
  };

  const onBlurInputEmail = (event) => {
    event.preventDefault();
    onBlurInput(
      email,
      setEmail,
      `${process.env.REACT_APP_API}/api/auth/duplicate/email`,
      validateEmail
    );
  };

  const onClickSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API}/api/auth/sign-up`, {
        nickname: nickname.value,
        email: email.value,
        UID: location.state.UID,
        loginType: location.state.loginType,
      })
      .then((res) => {
        const {
          data: { accessToken, UID, isExistUser },
        } = res;
        dispatch(signIn(accessToken, UID));
        if (isExistUser === true) {
          navigate('/', { replace: true });
        } else if (isExistUser === false) {
          navigate('/sign-up', { replace: true });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Container>
      <Title>회원가입</Title>
      <InputName>닉네임</InputName>
      <Input
        type="text"
        name="nickname"
        maxLength="12"
        onChange={onChangeNickname}
        onBlur={onBlurInputNickname}
        value={nickname.value}
      />
      <Validation ok={nickname.validation.ok}>
        {nickname.validation.ok ? '✔️' : '❌'}
        {nickname.validation.msg}
      </Validation>
      <InputName>이메일</InputName>
      <Input
        type="email"
        name="email"
        placeholder="example@email.com"
        onChange={onChangeEmail}
        onBlur={onBlurInputEmail}
        value={email.value}
      />
      <Validation ok={email.validation.ok}>
        {email.validation.ok ? '✔️' : '❌'}
        {email.validation.msg}
      </Validation>
      <Submit
        type="submit"
        name="sign-up"
        onClick={onClickSubmit}
        disabled={!(email.validation.ok && nickname.validation.ok)}
      >
        계속하기
      </Submit>
    </Container>
  );
}

const onBlurInput = (dest, setState, checkUrl, validate) => {
  if (dest.value === '') {
    setState((prev) => {
      return {
        ...prev,
        validation: { ok: false, msg: prev.validation.msg },
      };
    });
  } else if (validate(dest.value) === true) {
    axios
      .post(checkUrl, {
        value: dest.value,
      })
      .then((res) => {
        if (res.data.isExist === true) {
          setState((prev) => {
            return {
              ...prev,
              validation: { ok: false, msg: '이미 누군가가 사용하고 있어요 :(.' },
            };
          });
        } else if (res.data.isExist === false) {
          setState((prev) => {
            return {
              ...prev,
              validation: { ok: true, msg: '사용 가능합니다! :).' },
            };
          });
        }
      })
      .catch((error) => {
        console.error(error);
        setState((prev) => {
          return {
            ...prev,
            validation: { ok: false, msg: '통신 오류!' },
          };
        });
      });
  } else {
    setState((prev) => {
      return { ...prev, validation: { ok: false, msg: '형식에 맞지 않습니다.' } };
    });
  }
};

const validateEmail = (email) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

const validateNickname = (nickname) => {
  if (nickname.length > 12) {
    return false;
  }
  return /^[a-zA-Z0-9가-힣]*$/.test(nickname);
};

const Submit = styled.button`
  font-size: 20px;
  color: white;
  margin: auto 10px 20px;
  background-color: rgb(184, 168, 142);
  font-family: 'Spoqa Han Sans Neo', '궁서';
  &:disabled,
  &[disabled] {
    opacity: 0.4;
  }
  border-radius: 15px;
  border: none;
`;

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  /* padding-top: 5vh; */
`;

const Input = styled.input`
  background-color: grey;
  margin: 0 10px 0 10px;
  font-family: 'Spoqa Han Sans Neo', '궁서';
  font-size: 25px;
  border-radius: 15px;
  border: 0;
  color: black;
  padding-left: 10px;

  &:focus {
    outline: none;
  }
`;

const Title = styled.span`
  color: rgb(184, 168, 142);
  font-size: 25px;
  text-align: center;
  margin-top: 15px;
  padding-bottom: 15px;
  border-bottom: solid 2px rgb(184, 168, 142);
`;

const InputName = styled.span`
  color: white;
  margin-left: 3vw;
  margin-top: 3vh;
  margin-left: 20px;
`;

const Validation = styled.span`
  color: ${({ ok }) => (ok ? 'green' : 'red')};
  margin-left: 10px;
  font-size: 14px;
`;
