const express = require("express");
const router = express.Router();
var request = require("request");
const dotenv = require("dotenv");
dotenv.config();
const USER = process.env.RPC_USER;
const PASS = process.env.RPC_PASSWORD;
const headers = {
  "content-type": "text/plain;",
  "Access-Control-Allow-Origin": "*",
};
module.exports = router;

////////////////////////////////////////////////////////CALLS//////////////////////////////
router.get("/test", (req, res) => {
  res.json({
    msg: "backend works",
  });
});
/**{
    "result": 2649.99999436,
    "error": null,
    "id": "curltext"
} */
router.get("/checkBalance", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getbalance","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:4444/`,
    method: "POST",
    headers: headers,
    body: dataString,
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

/**{
    "result": "bcrt1qevy6n3n0gvmwstfymn2q23wlzskpc8dvcrdmwu",
    "error": null,
    "id": "curltext"
} */
router.get("/createAddress", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getnewaddress","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:4444/`,
    method: "POST",
    headers: headers,
    body: dataString,
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});

/**{
    "address": "bcrt1q777hftxrl047ylr5e3520m30gph4glrmnvw227",
    "value": "0.1",
    "comment": "comment test",
    "organizationcomment": "comment org"
} */
router.get("/sendToAddress", (req, res) => {
  //var keys = Object.keys(req.body);
  //console.log(req.body.address);
  var dataString =
    `{"jsonrpc":"1.0","id":"curltext","method":"sendtoaddress","params":["` +
    req.body.address +
    `",` +
    req.body.value +
    `, "` +
    req.body.comment +
    `", "` +
    req.body.organizationcomment +
    `"]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:4444/`,
    method: "POST",
    headers: headers,
    body: dataString,
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});
/**{
    "result": [
        {
            "txid": "6e24a33569fc8a8ba3cb2948fc2b5d12d6ddee43293a737224beeeeba912fd06",
            "vout": 0,
            "address": "bcrt1q777hftxrl047ylr5e3520m30gph4glrmnvw227",
            "label": "",
            "scriptPubKey": "0014f7bd74acc3fbebe27c74cc68a7ee2f406f547c7b",
            "amount": 50,
            "confirmations": 104,
            "spendable": true,
            "solvable": true,
            "desc": "wpkh([eebdd6be/0'/0'/0']0334eaa99576262de6454334a452834c159bd61dea8722059b1c39631f03bdba64)#vx50j2s8",
            "safe": true
        },
        .
        .
        .
        .
         */
router.get("/listUnspent", (req, res) => {
  var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"listunspent","params":[]}`;
  var options = {
    url: `http://${USER}:${PASS}@127.0.0.1:4444/`,
    method: "POST",
    headers: headers,
    body: dataString,
  };

  callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body);
      res.send(data);
    }
  };
  request(options, callback);
});
