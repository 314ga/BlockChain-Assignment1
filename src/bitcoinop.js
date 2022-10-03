import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:3456/api/",
});
export const test = async () => {
  return api.get("test");
};
export const checkBalance = async () => {
  return api.get("checkBalance");
};
export const createAddress = async () => {
  return api.get("createAddress");
};
export const sendToAddress = async () => {
  return api.get("sendToAddress");
};
export const listUnspent = async () => {
  return api.get("listUnspent");
};
