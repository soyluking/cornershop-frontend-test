import axios from 'axios';

export const createInstance = config => axios.create(config);
