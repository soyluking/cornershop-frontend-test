import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/v1/counter',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
