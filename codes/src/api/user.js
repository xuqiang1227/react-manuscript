import axios from 'axios';

export const fetchUserApi = (userId) => {
  return axios.get('/users.json').then(users => { return users.data[userId] });
}