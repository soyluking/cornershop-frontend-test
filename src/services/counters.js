import { createInstance } from './axios';

const instance = createInstance({
  baseURL: '/api/v1/counter',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getCounters = async () => {
  const response = await instance.get();
  return response.data;
};

export const createCounter = async title => {
  const response = await instance.post('', { title });
  return response.data;
};
