import React from 'react';
import styled from 'styled-components';

import ObjectionDetailForm from './../../components/Objection/ObjectionDetailForm';

import Header from './../../components/Header';
import Footer from './../../components/Footer';

const s = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background-color: ${(props) => props.theme.bgColor};
  `,
  MainArea: styled.div`
    flex: 1;
    width: 90%;
    height: 80%;
    padding-top: 5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};

const ObjectionDetailPage = () => {
  const objectionDetail = {
    idx: 0,
    crackDownIdx: 0,
    name: 'user',
    type: 1,
    date: '2024-08-03 오후 12:12:12',
    title: '다시 검토해주세요.',
    content: '이 단속 내역은 다시 검토해주세요.',
    responseContent:
      '안녕하세요. 대전 유성경찰서 입니다.\n문의해주신 내역은 담당 부서에서 확인 결과,\n언제나 국민을 위해 최선을 다하는 경찰이 되겠습니다.\n감사합니다.',
    responseDate: '2024. 09. 04',
  };

  return (
    <s.Container>
      <Header title="나의 이의 내역" />
      <s.MainArea>
        <ObjectionDetailForm objectionDetail={objectionDetail} />
      </s.MainArea>
      <Footer />
    </s.Container>
  );
};

export default ObjectionDetailPage;