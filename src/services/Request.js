import apiClient from "./Http";

export default {
  async post_data(url, payload, params) {
    let completeUrl = `${url}`;

    if (params) {
      Object.keys(params).forEach((key) => {
        completeUrl = completeUrl + `?&${key}=${params[key]}`;
      });
    }
    try {
      const response = await apiClient.post(completeUrl, payload);
      return response;
    } catch (error) {
      console.log("Error is", error);
    }
  },

  async login(url, payload) {
    try {
      const response = await apiClient.post(url, payload);

      if (response.data.success == true) {
        localStorage.setItem("token", response.data.data.token);
      }

      return response;
    } catch (error) {
      console.log("Error is", error);
    }
  },

  async logout(url) {
    try {
      const response = await apiClient.post(url);
      return response;
    } catch (error) {
      console.log("Error is", error);
    }
  },

  async get_data(url, params) {
    let completeUrl = `${url}`;

    if (params) {
      Object.keys(params).forEach((key) => {
        completeUrl = completeUrl + `&${key}=${params[key]}`;
      });
    }
    try {
      const response = await apiClient.get(completeUrl);
      return response;
    } catch (error) {
      console.log("error", error);
    }
  },
};
