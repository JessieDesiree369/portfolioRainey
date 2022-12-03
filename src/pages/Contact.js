import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styling/custom.scss";

function Contact() {
  return (
    <div className="form">
      <h1>Email Me!</h1>
      <form action="https://formspree.io/f/mdojrvyq" method="POST">
        <Container fluid="">
          <Row>
            <Col className="w-75">
              <div className="text-start">
                <label for="">Your Name:</label>
                <input
                  type="name"
                  name="name"
                  className="d-flex justify-content-start  form-control name"
                ></input>
              </div>
              <div className="text-start">
                <label for="">Your Email address:</label>
                <input
                  type="email"
                  name="email"
                  className="d-flex justify-content-start form-control email"
                ></input>
              </div>
              <div className="text-start">
                <label for="exampleFormControlTextarea1">Your Message:</label>
                <textarea
                  name="message"
                  className="d-flex justify-content-center form-control"
                  rows="3"
                ></textarea>
              </div>
              <Button className="send" type="submit">
                Send
              </Button>
            </Col>
          </Row>
        </Container>
      </form>
    </div>
  );
}

export default Contact;
