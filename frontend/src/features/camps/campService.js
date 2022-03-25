import axios from 'axios';
const API_URL = '/api/camps';

const createCamp = async (campData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, campData, config);
  return response.data;
};

const getCamps = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);
  return response.data;
};

const campService = {
  createCamp,
  getCamps,
};

export default campService;
