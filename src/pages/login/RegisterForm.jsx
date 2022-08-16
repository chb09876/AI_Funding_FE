import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { useInputWithValidation } from '../../hooks/useInput';
import { signIn } from '../../modules/login';
import { emailValidator, nicknameValidator } from '../../utils/validator';

export default function RegisterForm() {
  const [email, isEmailValid, onChangeEmail] = useInputWithValidation('', emailValidator);
  const [nickname, isNicknameValid, onChangeNickname] = useInputWithValidation(
    '',
    nicknameValidator
  );
  const [isEmailDuplicated, setIsEmailDuplicated] = useState(false);
  const [isNicknameDuplicated, setIsNicknameDuplicated] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

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
      <InputWrapper>
        <Input
          type="text"
          name="nickname"
          maxLength="12"
          onChange={(event) => {
            event.preventDefault();
            onChangeNickname(event);
            setIsNicknameDuplicated(false);
          }}
          value={nickname}
        />
        <CheckDuplicateButton
          onClick={(event) => {
            event.preventDefault();
            axios
              .post(`${process.env.REACT_APP_API}/api/auth/duplicate/nickname`, null, {
                params: {
                  value: nickname,
                },
              })
              .then((res) => {
                if (res.data.isExist === true) {
                  setIsNicknameDuplicated(true);
                } else {
                  setIsNicknameDuplicated(false);
                  alert('중복된 닉네임입니다');
                }
              });
          }}
        >
          중복확인
        </CheckDuplicateButton>
      </InputWrapper>
      <div>
        <Validation ok={isNicknameValid}>
          {isNicknameValid ? '✔️' : '❌'}
          {'최대 12글자, 한글, 영문, 숫자'}
        </Validation>
        <Validation ok={isNicknameDuplicated}>
          {isNicknameDuplicated ? '✔️' : '❌'}
          {'중복 검사'}
        </Validation>
      </div>
      <InputName>이메일</InputName>
      <InputWrapper>
        <Input
          type="email"
          name="email"
          placeholder="example@email.com"
          onChange={(event) => {
            event.preventDefault();
            onChangeEmail(event);
          }}
          value={email}
        />
        <CheckDuplicateButton
          onClick={(event) => {
            event.preventDefault();
            axios
              .post(`${process.env.REACT_APP_API}/api/auth/duplicate/email`, null, {
                params: {
                  value: email,
                },
              })
              .then((res) => {
                if (res.data.isExist === true) {
                  setIsEmailDuplicated(true);
                } else {
                  setIsEmailDuplicated(false);
                  alert('중복된 이메일입니다.');
                }
              });
          }}
        >
          중복확인
        </CheckDuplicateButton>
      </InputWrapper>
      <div>
        <Validation ok={isEmailValid}>
          {isEmailValid ? '✔️' : '❌'}
          {'이메일 형식'}
        </Validation>
        <Validation ok={isEmailDuplicated}>
          {isEmailDuplicated ? '✔️' : '❌'}
          {'중복 검사'}
        </Validation>
      </div>
      <Submit
        type="submit"
        name="sign-up"
        onClick={onClickSubmit}
        disabled={!isEmailValid || !isNicknameValid || !isEmailDuplicated || !isNicknameDuplicated}
      >
        계속하기
      </Submit>
    </Container>
  );
}

const CheckDuplicateButton = styled.button`
  background-color: aliceblue;
  border-radius: 10px;
  border: none;
  font-family: 'Spoqa Han Sans Neo', '궁서';
`;

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
  font-size: 20px;
  border-radius: 15px;
  border: 0;
  color: black;
  padding-left: 10px;

  flex-grow: 1;

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

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Validation = styled.span`
  color: ${({ ok }) => (ok ? 'green' : 'red')};
  margin-left: 10px;
  font-size: 12px;
`;
