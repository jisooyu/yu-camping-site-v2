import axios from 'axios';
const API_URL = '/api/camps/';

const createCamp = async (campData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, campData, config);
  return response.data;
};

const campService = {
  createCamp,
};

export default campService;
