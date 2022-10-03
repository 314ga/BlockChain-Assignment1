import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Toast from "react-bootstrap/Toast";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import {
  checkBalance,
  createAddress,
  sendToAddress,
  listUnspent,
  // listAddresses,
} from "./bitcoinop";
const Bitcoin = () => {
  const amountRef = useRef(null);
  const addressRef = useRef(null);
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);
  const commentRef = useRef(null);
  const orgCommentRef = useRef(null);
  const [balance, setBalance] = useState(0);
  const [message, setMessage] = useState("");
  const [unspent, setUnspent] = useState([]);
  //const [addresses, setAddresses] = useState([]);
  const [address, setAddress] = useState("");
  useEffect(() => {
    handleCheckBalance();
    handleListUnspent();
  }, []);

  async function handleCheckBalance() {
    checkBalance()
      .then((response) => {
        setBalance(response.data.result);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  async function handleCreateAddress() {
    setAddress("");
    createAddress()
      .then((response) => {
        setAddress(response.data.result);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  async function handleSendToAddress() {
    setShowA(true);
    if (
      amountRef.current.value !== null &&
      amountRef.current.value !== "" &&
      addressRef.current.value !== null &&
      addressRef.current.value !== ""
    ) {
      sendToAddress(
        addressRef.current.value,
        amountRef.current.value,
        commentRef.current.value,
        orgCommentRef.current.value
      )
        .then((response) => {
          if (response.status == 200) {
            addressRef.current.value = "";
            amountRef.current.value = "";
            commentRef.current.value = "";
            orgCommentRef.current.value = "";
            setMessage("Successfully sent");
            setShowA(true);
          }
        })
        .catch((error) => {
          console.log(error.response);
        });
      console.log(amountRef.current.value);
      console.log(addressRef.current.value);
    }
  }
  async function handleListUnspent() {
    listUnspent()
      .then((response) => {
        setUnspent(response.data.result);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  return (
    <>
      <Card style={{ width: "100vw" }}>
        <Card.Body>
          <Card.Title>Current Balance</Card.Title>
          <Card.Title>{balance}</Card.Title>
          <Card.Text>Make sure to run bitcoin core in -regtest mode</Card.Text>
          <Button variant="success" onClick={() => handleCheckBalance()}>
            Refresh Balance
          </Button>{" "}
        </Card.Body>
      </Card>
      <div style={{ height: "40vh", overflow: "scroll" }}>
        <h2>List of unspent</h2>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Address</th>
              <th>Amount</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {unspent.map((element, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{element.address}</td>
                  <td>{element.amount}</td>
                  <td>{element.txid}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <Button variant="success" onClick={() => handleListUnspent()}>
        Refresh Unspent
      </Button>{" "}
      <div className="mt-4" style={{ width: "100vw" }}>
        <Card style={{ width: "100vw" }}>
          <Card.Body>
            <Card.Title>Generate address</Card.Title>
            <Card.Text>{address}</Card.Text>
            <Button variant="success" onClick={() => handleCreateAddress()}>
              Create Address
            </Button>{" "}
          </Card.Body>
        </Card>
      </div>
      <div className="mt-4" style={{ width: "100vw" }}>
        <h2>Send To Address</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Enter address to sent bitcoin to</Form.Label>
            <Form.Control type="text" placeholder="Address" ref={addressRef} />
          </Form.Group>
          <Form.Group controlId="formBasicAmount">
            <Form.Label>Enter amount to send</Form.Label>
            <Form.Control type="number" placeholder="Amount" ref={amountRef} />
          </Form.Group>
          <Form.Group controlId="formBasicAmount">
            <Form.Label>Comment</Form.Label>
            <Form.Control type="text" placeholder="Comment" ref={commentRef} />
          </Form.Group>
          <Form.Group controlId="formBasicAmount">
            <Form.Label>Organization comment</Form.Label>
            <Form.Control
              type="text"
              placeholder="Comment"
              ref={orgCommentRef}
            />
          </Form.Group>
        </Form>
        <Button variant="success" onClick={() => handleSendToAddress()}>
          Send To Address
        </Button>{" "}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          zIndex: 9999,
          float: "right",
        }}
      >
        <Toast show={showA} onClose={toggleShowA} bg="success">
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Success</strong>
            <small>notification</small>
          </Toast.Header>
          <Toast.Body></Toast.Body>
        </Toast>
      </div>
    </>
  );
};
export default Bitcoin;
