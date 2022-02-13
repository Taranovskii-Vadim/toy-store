import axios from "axios";
export const axiosConfig = axios.create({
  baseURL: "https://epic-store-9c0e7.firebaseio.com",
});
