import axios from 'axios';
import { BACKEND_URL } from './constants';

function getFormData(object) {
    const formData = new FormData();
    Object.keys(object).forEach(key => formData.append(key, object[key]));
    return formData;
}

const format_url = (endpt) => {
    return `${BACKEND_URL}${endpt}`;
}


/// Sends a get request to the endpoint.
const get = (url) => {
    return axios.get(format_url(url));
}

/// Sends a post request to endpoint with params (object type).
const post = (url, params) => {
    const link = format_url(url);
    return axios.post(link, getFormData(params));
}


export {
    get,
    post
}