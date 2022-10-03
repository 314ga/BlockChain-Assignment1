import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import {
  checkBalance,
  createAddress,
  sendToAddress,
  listUnspent,
} from "./bitcoinop";
const Bitcoin = () => {
  const [resetClicked, setResetClicked] = useState(false);
  const [email, setEmail] = useState("");

  async function handleCheckBalance() {
    checkBalance()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  async function handleCreateAddress() {
    createAddress()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  async function handleSendToAddress() {
    sendToAddress()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  async function handleListUnspent() {
    listUnspent()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  return (
    <>
      <Button variant="success" onClick={() => handleCheckBalance()}>
        Check Balance
      </Button>{" "}
      <Button variant="success" onClick={() => handleCreateAddress()}>
        Create Address
      </Button>{" "}
      <Button variant="success" onClick={() => handleSendToAddress()}>
        Sned To Address
      </Button>{" "}
      <Button variant="success" onClick={() => handleListUnspent()}>
        List unspent
      </Button>{" "}
    </>
  );
};
export default Bitcoin;
