const express = require("express");
const bodyParser = require("body-parser");
const rpcMethods = require("./routes/api");
const cors = require("cors")({
  origin: "*",
});
//var proxy = require("express-http-proxy");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors);
app.use("/api", rpcMethods);

const port = process.env.PORT || 3456;

server = app.listen(port, () => console.log(`Server running on port ${port}`));
