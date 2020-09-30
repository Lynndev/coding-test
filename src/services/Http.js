import axios from "axios";
import store from "../store";

/*
    online backend api resource
   */
const online = " http://itasstest.tbtheunion.webstarterz.com/api/";

const apiClient = axios.create({
  baseURL: online,
});

apiClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  store.commit("Loading/CHANGE_LOADING");
  //Config is the object of AxiosRequestConfig which contains URL, base URL, headers request, body data, response type, timeout, etc.
  return config;
});

apiClient.interceptors.response.use((config) => {
  store.commit("Loading/CHANGE_LOADING");
  return config;
});

export default apiClient;
