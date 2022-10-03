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
export const sendToAddress = async (
  address,
  value,
  coment,
  organizationComment
) => {
  const data = {
    address: address,
    value: value,
    comment: coment,
    organizationcomment: organizationComment,
  };
  return api.post("sendToAddress", data);
};
export const listUnspent = async () => {
  return api.get("listUnspent");
};
export const listAddresses = async () => {
  return api.get("listAddresses");
};
