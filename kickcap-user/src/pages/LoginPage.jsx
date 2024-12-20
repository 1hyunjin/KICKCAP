import React, { useEffect } from 'react';
import styled from 'styled-components';
import LoginButton from './../components/LoginButton';

import CharacterLogo from './../asset/img/svg/Character.svg';
import Logo from './../asset/img/svg/Logo.svg';
import kakao from './../asset/img/login/kakao.png';
import naver from './../asset/img/login/naver.png';
import google from './../asset/img/login/google.png';
import { useNavigate } from 'react-router';

const s = {
  Container: styled.div`
    height: 100vh;
    background-color: ${(props) => props.theme.bgColor};
  `,
  MainArea: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    text-align: center;
    position: relative;
  `,
  CharacterLogoImg: styled.img`
    width: 80%;
    max-width: 320px;
    height: auto;
    position: relative;
    z-index: 1;
  `,
  LogoImg: styled.img`
    width: 64%;
    max-width: 256px;
    position: relative;
    z-index: 2;
    margin-top: -4vh;
    margin-bottom: 1.8rem;
  `,
  ButtonArea: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    max-width: 333px;
  `,
};

const LoginPage = () => {
  const handleClickKaKao = () => {
    window.location.href = process.env.REACT_APP_BASE_URL + '/oauth2/authorization/kakao';
  };

  const handleClickNaver = () => {
    window.location.href = process.env.REACT_APP_BASE_URL + '/oauth2/authorization/naver';
  };

  // const handleClickGoogle = () => {
  //   window.location.href = process.env.REACT_APP_BASE_URL + '/oauth2/authorization/google';
  // };

  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('fcmToken')) {
      navigate('/');
    }
  }, []);

  return (
    <s.Container>
      <s.MainArea>
        <s.CharacterLogoImg src={CharacterLogo} />
        <s.LogoImg src={Logo} />
        <s.ButtonArea>
          <LoginButton
            title="카카오 로그인"
            imgSrc={kakao}
            color="#000000"
            bgcolor="#FDE500"
            onClick={handleClickKaKao}
          />
          <LoginButton
            title="네이버 로그인"
            imgSrc={naver}
            color="#FFFFFF"
            bgcolor="#03C75A"
            onClick={handleClickNaver}
          />
          {/* <LoginButton
            title="구글 로그인"
            imgSrc={google}
            color="#000000"
            bgcolor="#FFFFFF"
            onClick={handleClickGoogle}
          /> */}
        </s.ButtonArea>
      </s.MainArea>
    </s.Container>
  );
};

export default LoginPage;
