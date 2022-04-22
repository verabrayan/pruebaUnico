import axios from "axios";
import { URL } from "../config";

const instance = axios.create({
  baseURL: URL,
});

const get = async (url) => {
  return await instance.get(url);
};

const post = async (url, data) => {
  return await instance.post(url, data);
};

export default instance;
export { get, post };
