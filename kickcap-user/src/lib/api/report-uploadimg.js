import { imgLocalAxios } from '../../util/axios-setting';

// violationType: 1, 2, 3, 4, 5
export const uploadImg = async (imgFile, violationType) => {
  try {
    const formData = new FormData();
    formData.append('image', imgFile);

    const response = await imgLocalAxios.post(`/image/upload/type${violationType}`, formData);
    return response.data.image;
  } catch (err) {
    console.log(`uploadImg error: ${err}`);
  }
};
