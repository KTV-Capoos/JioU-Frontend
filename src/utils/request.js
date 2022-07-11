import axios from "axios";
import { BACKEND_URL } from "./constants";

// Make sure axios sends cookies.
axios.defaults.withCredentials = true;
axios.defaults.baseURL = BACKEND_URL;

function getFormData(object) {
  const formData = new FormData();
  Object.keys(object).forEach((key) => formData.append(key, object[key]));
  return formData;
}

/// Sends a get request to the endpoint.
const get = (url) => {
  return axios.get(url);
};

/// Sends a post request to endpoint with params (object type).
const post = (url, params) => {
  return axios.post(url, getFormData(params));
};

export { get, post };
