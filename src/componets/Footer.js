import React, { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import laCrescendo from "../assets/images/pianoRecitals1.jpg";

const styles = {
  footer: { background: "white", color: "#222222", padding: "10px" },
  socialIcons: {
    margin: "5px 15px 0 20px",
  },
  footerForm: {
    background: "#1b1818",
    padding: "20px",
    fontSize: "20px",
    borderRadius: "10px",
    color: "white",
  },
  logoStyling: {
    width: "100px",
    margin: "auto",
  },
  copyright: {
    background: "#222222",
    color: "white",
    margin: "8px 0 0 0",
  },
};

function Footer() {
  return (
    <Fragment>
      <div className="bgImage">
        <div>
          <div className="header">
            <h1 className="text-center">Contact us</h1>
          </div>
          <br></br>
          <Container className="d-flex justify-content-center mb-4">
            <Form
              className="footerForm"
              style={styles.footerForm}
              method="POST"
              action="https://asia-south1-la-crescendo-academy.cloudfunctions.net/api/formdata"
            >
              <Row>
                <Col sm={6}>
                  <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      name="fname"
                      type="text"
                      placeholder="First Name"
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      name="lname"
                      type="text"
                      placeholder="Last Name"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Phone No.</Form.Label>
                <Form.Control
                  name="phone"
                  type="text"
                  placeholder="Phone No."
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Feedback</Form.Label>
                <Form.Control
                  name="feedback"
                  as="textarea"
                  placeholder="Feedback"
                  rows={3}
                />
              </Form.Group>

              <Button variant="primary" type="submit" block>
                Send FeedBack
              </Button>
            </Form>
          </Container>
        </div>
        <div style={styles.footer}>
          <Container>
            <Row>
              <img src={laCrescendo} style={styles.logoStyling} alt="Logo" />
            </Row>
            <Row>
              <Col>
                <div className="text-center pt-3">
                  <i
                    className="fa fa-facebook fa-2x socialIcon"
                    style={styles.socialIcons}
                  ></i>
                  <i
                    className="fa fa-youtube fa-2x socialIcon"
                    style={styles.socialIcons}
                  ></i>
                  <i
                    className="fa fa-instagram fa-2x socialIcon"
                    style={styles.socialIcons}
                  ></i>
                  <i
                    className="fa fa-envelope fa-2x socialIcon"
                    style={styles.socialIcons}
                  ></i>
                  <i
                    className="fa fa-whatsapp fa-2x socialIcon"
                    style={styles.socialIcons}
                  ></i>
                </div>
              </Col>
            </Row>
          </Container>
          <Row style={styles.copyright}>
            <Col className="text-center">
              <p>©Copyright 2020 La Crescendo All Rights Reserved.</p>
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  );
}

export default Footer;
// 2020  All Rights Reserved.
