import React from 'react';
import styled from 'styled-components';

const s = {
  Container: styled.div`
    width: 90%;
    margin: 0 auto;
  `,
  TypeArea: styled.div`
    width: 500px;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  TypeText: styled.div`
    width: 200px;
    height: 30px;
    text-align: center;
    font-weight: 700;
    font-size: 25px;
    cursor: pointer;
    &:hover {
      font-size: 30px;
      color: ${(props) => props.theme.mainColor};
    }
  `,
  TableArea: styled.div`
    width: 100%;
    border-radius: 10px;
    border-left: 4px solid rgba(0, 0, 0, 0.2);
    border-right: 4px solid rgba(0, 0, 0, 0.2);
    box-shadow: inset -5px 0 5px -5px #333, inset 5px 0 5px -5px #333;
    padding: 10px 0 10px 0;
  `,
  Table: styled.table`
    width: 90%;
    margin: 0 auto;
  `,
  Thead: styled.thead``,
  Tbody: styled.tbody`
    text-align: center;
  `,
  Tr: styled.tr`
    width: 100%;
    height: 40px;
    cursor: pointer;
  `,
  Td: styled.td`
    vertical-align: middle;
    border-bottom: 1px solid ${(props) => props.theme.btnOff};
  `,
  Th: styled.th`
    font-weight: 700;
    color: ${(props) => props.theme.mainColor};
    vertical-align: middle;
  `,
  pageArea: styled.div`
    width: 500px;
    height: 40px;
    border: 1px solid red;
    margin: 20px auto;
  `,
};

const ReportList = () => {
  return (
    <s.Container>
      <s.TypeArea>
        <s.TypeText>접수 내역</s.TypeText>
        <s.TypeText>완료 내역</s.TypeText>
      </s.TypeArea>
      <s.TableArea>
        <s.Table>
          <s.Thead>
            <s.Tr>
              <s.Th style={{ width: '10%' }}>문의 번호</s.Th>
              <s.Th style={{ width: '40%' }}>제목</s.Th>
              <s.Th style={{ width: '15%' }}>작성자</s.Th>
              <s.Th style={{ width: '10%' }}>날 짜</s.Th>
            </s.Tr>
          </s.Thead>
          <s.Tbody>
            <s.Tr>
              <s.Td>1</s.Td>
              <s.Td>대전 유성구 학하북로 75-21</s.Td>
              <s.Td>안전모 미착용</s.Td>
              <s.Td>24.09.01</s.Td>
            </s.Tr>
            <s.Tr>
              <s.Td>1</s.Td>
              <s.Td>대전 유성구 학하북로 75-21</s.Td>
              <s.Td>안전모 미착용</s.Td>
              <s.Td>24.09.01</s.Td>
            </s.Tr>
            <s.Tr>
              <s.Td>1</s.Td>
              <s.Td>대전 유성구 학하북로 75-21</s.Td>
              <s.Td>안전모 미착용</s.Td>
              <s.Td>24.09.01</s.Td>
            </s.Tr>
            <s.Tr>
              <s.Td>1</s.Td>
              <s.Td>대전 유성구 학하북로 75-21</s.Td>
              <s.Td>안전모 미착용</s.Td>
              <s.Td>24.09.01</s.Td>
            </s.Tr>
            <s.Tr>
              <s.Td>1</s.Td>
              <s.Td>대전 유성구 학하북로 75-21</s.Td>
              <s.Td>안전모 미착용</s.Td>
              <s.Td>24.09.01</s.Td>
            </s.Tr>
            <s.Tr>
              <s.Td>1</s.Td>
              <s.Td>대전 유성구 학하북로 75-21</s.Td>
              <s.Td>안전모 미착용</s.Td>
              <s.Td>24.09.01</s.Td>
            </s.Tr>
            <s.Tr>
              <s.Td>1</s.Td>
              <s.Td>대전 유성구 학하북로 75-21</s.Td>
              <s.Td>안전모 미착용</s.Td>
              <s.Td>24.09.01</s.Td>
            </s.Tr>
            <s.Tr>
              <s.Td>1</s.Td>
              <s.Td>대전 유성구 학하북로 75-21</s.Td>
              <s.Td>안전모 미착용</s.Td>
              <s.Td>24.09.01</s.Td>
            </s.Tr>
            <s.Tr>
              <s.Td>1</s.Td>
              <s.Td>대전 유성구 학하북로 75-21</s.Td>
              <s.Td>안전모 미착용</s.Td>
              <s.Td>24.09.01</s.Td>
            </s.Tr>
            <s.Tr>
              <s.Td>1</s.Td>
              <s.Td>대전 유성구 학하북로 75-21</s.Td>
              <s.Td>안전모 미착용</s.Td>
              <s.Td>24.09.01</s.Td>
            </s.Tr>
          </s.Tbody>
        </s.Table>
      </s.TableArea>
      <s.pageArea></s.pageArea>
    </s.Container>
  );
};

export default ReportList;