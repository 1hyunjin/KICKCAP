import { localAxios } from '../../util/axios-setting';

const local = localAxios();

export const getCrackTotalCount = async (violationType) => {
  // 신고게시판 총 개수
  const response = await local.get(`/crackdowns/count?violationType=${violationType}`);
  return response.data; // 응답의 데이터를 반환
};

export const getCrackList = async (violationType, pageNo) => {
  // 신고목록 조회
  const response = await local.get(`/crackdowns?&violationType=${violationType}&pageNo=${pageNo}`);
  return response.data; // 응답의 데이터를 반환
};

// export const getCrackTotalCount = async (violationType, success, fail) => {
//   // 신고게시판 총 개수
//   await local.get(`/crackdowns/count?violationType=${violationType}`).then(success).catch(fail);
// };

// export const getCrackList = async (violationType, pageNo, success, fail) => {
//   // 신고목록 조회
//   await local.get(`/crackdowns?&violationType=${violationType}&pageNo=${pageNo}`).then(success).catch(fail);
// };

export const getCrackDetail = async (crackdownId, success, fail) => {
  // 목록 상세 조회
  await local.get(`/crackdowns/${crackdownId}`).then(success).catch(fail);
};
