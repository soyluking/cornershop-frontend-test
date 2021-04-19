import instance from './axios';

export const getCounters = async () => {
  const response = await instance.get();
  return response?.data;
};

export const createCounter = async title => {
  const response = await instance.post('', { title });
  return response.data;
};

export const deleteCounter = async id => {
  const data = {
    data: { id },
  };
  const response = await instance.delete('', data);
  return response.data;
};

export const incrementCounter = async id => {
  const response = await instance.post('/inc', { id });
  return response.data;
};

export const decrementCounter = async id => {
  const response = await instance.post('/dec', { id });
  return response.data;
};
