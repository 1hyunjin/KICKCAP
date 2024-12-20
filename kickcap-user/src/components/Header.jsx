import React from 'react';
import styled from 'styled-components';
import Text from './Common/Text';
import BackSvg from './../asset/img/svg/back.svg';
import { useNavigate, useLocation } from 'react-router';

const s = {
  HeaderArea: styled.div`
    width: 100%;
    height: 7vh;
    min-height: 50px;
    border-bottom: 1px solid #d3d3d3;
    background-color: ${(props) => props.theme.AreaColor};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  `,
  Img: styled.img`
    position: absolute;
    left: 5%;
    cursor: pointer;
  `,
};

const Header = ({ title }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackClick = () => {
    if (location.pathname === '/main/notification') {
      navigate('/main');
    } else {
      navigate(-1);
    }
  };

  return (
    <s.HeaderArea>
      <s.Img src={BackSvg} onClick={handleBackClick} />
      <Text size={20} bold={'800'}>
        {title}
      </Text>
    </s.HeaderArea>
  );
};

export default Header;
