import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  //baseURL: 'http://localhost:3000',
});

export const usersAPI = {
  getUsers: () => {
    return instance.get(`/api/users`)
      .then(response => response.data);
  },
  deleteUser: (id) => {
    return instance.delete(`/api/users/${id}`)
      .then(response => response.data);
  }
}

export const authAPI = {
  login: (login,password) => {
    return instance.post('/api/login',{login,password});
  },
  logout: () => {
    return instance.delete('/api/login');
  },
  getMyAuth: () => {
    return instance.get('/api/login');
  }
}