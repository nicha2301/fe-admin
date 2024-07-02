import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from "react-admin";
import axios from "axios";

interface AuthParams {
  username?: string;
  password?: string;
  status?: number;
}

export const authProvider = (type: string, params: AuthParams) => {
  // khi người dùng cố gắng đăng nhập
  if (type === AUTH_LOGIN) {
    const { username, password } = params;
    if (username && password) {
      return axios.post(`http://localhost:8080/api/user/login`, { username, password })
        .then(response => {
          localStorage.setItem("username", username);
          localStorage.setItem("user", JSON.stringify(response.data));
          return Promise.resolve();
        })
        .catch(error => {
          return Promise.reject();
        });
    }
    return Promise.reject("Missing username or password");
  }

  // khi người dùng cố gắng đăng xuất
  if (type === AUTH_LOGOUT) {
    localStorage.removeItem("username");
    localStorage.removeItem("user");
    return Promise.resolve();
  }

  // khi API trả về lỗi
  if (type === AUTH_ERROR) {
    const { status } = params;
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      localStorage.removeItem("user");
      return Promise.reject();
    }
    return Promise.resolve();
  }

  // khi người dùng điều hướng đến một vị trí mới
  if (type === AUTH_CHECK) {
    return localStorage.getItem("username")
      ? Promise.resolve()
      : Promise.reject();
  }

  return Promise.reject("Unknown Method");
};
