import axios from "axios";
const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "2b9c8bf9-f831-4fd3-8f36-c126acd84ce1"
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(result => {
        return result.data;
      });
  }
};
