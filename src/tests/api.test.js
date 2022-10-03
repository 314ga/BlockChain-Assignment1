import {
  checkBalance,
  createAddress,
  sendToAddress,
  listAddresses,
  listUnspent,
} from "../bitcoinop.js";

test("check balance test", () => {
  return checkBalance().then((response) => {
    expect(response.data.error).toBe(null);
    expect(response.data.result).toBe(2649.99997885);
  });
});
test("create address test", () => {
  return createAddress().then((response) => {
    expect(response.data.error).toBe(null);
  });
});
test("send to address no params test", () => {
  return sendToAddress(
    "bcrt1q777hftxrl047ylr5e3520m30gph4glrmnvw227",
    1,
    "",
    ""
  ).then((response) => {
    expect(response.status).toBe(200);
  });
});
test("List unspent test", () => {
  return listUnspent().then((response) => {
    expect(response.data.error).toBe(null);
    expect(response.data.result[0].address).toContain(
      "bcrt1q777hftxrl047ylr5e3520m30gph4glrmnvw227"
    );
  });
});
