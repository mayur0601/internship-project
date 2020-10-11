import React, { Fragment, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import laCrescendo from "../assets/images/pianoRecitals1.jpg";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

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
  const [validated, setValidated] = useState(false);

  const [inputFirstname, setInputFirstname] = useState("");
  const [inputLastname, setInputLastname] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputMsg, setInputMsg] = useState("");
  const [loading, setLoading] = useState(false);

  //error handling
  const [errorfname, setErrorFname] = useState(false);
  const [errorlname, setErrorLname] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [msgError, setMsgError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log("Entered If");
    } else {
      console.log(form.fname);
    }

    setValidated(true);
  };

  const resetForm = () => {
    setInputFirstname("");
    setInputLastname("");
    setInputEmail("");
    setInputPhone("");
    setInputMsg("");
  };

  const sendFeedback = (e) => {
    e.preventDefault();
    if (inputFirstname === "") {
      setErrorFname(true);
      setSuccess(false);
    } else {
      setErrorFname(false);
      setSuccess(true);
    }
    if (inputLastname === "") {
      setErrorLname(true);
      setSuccess(false);
    } else {
      setErrorLname(false);
      setSuccess(true);
    }
    if (inputEmail === "") {
      setErrorEmail(true);
      setSuccess(false);
    } else {
      setErrorEmail(false);
      setSuccess(true);
    }
    if (inputMsg === "") {
      setMsgError(true);
      setSuccess(false);
    } else {
      setMsgError(false);
      setSuccess(true);
    }
    if (inputPhone === "") {
      setPhoneError(true);
      setSuccess(false);
    } else {
      setPhoneError(false);
      setSuccess(true);
    }

    if (success) {
      const newMail = {
        fname: inputFirstname,
        lname: inputLastname,
        phone: inputPhone,
        email: inputEmail,
        feedback: inputMsg,
      };
      setLoading(true);
      axios
        .post("/formdata", newMail)
        .then((res) => {
          alert("Submitted Successfully");
          resetForm();
          setLoading(false);
          setSuccess(false);
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <Fragment>
      <div className="bgImage">
        <div>
          <div className="header">
            <h1 className="text-center">Contact us</h1>
          </div>
          <br></br>
          <Container
            className="d-flex justify-content-center mb-4"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Form
              className="footerForm"
              style={styles.footerForm}
              action="https://asia-south1-la-crescendo-academy.cloudfunctions.net/api/contactForm"
              method="post"
            >
              <Row>
                <Col sm={6}>
                  <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      name="fname"
                      type="text"
                      placeholder="First Name"
                      value={inputFirstname}
                      onChange={(e) => setInputFirstname(e.target.value)}
                      isInvalid={errorfname}
                    />
                    <Form.Control.Feedback type="invalid">
                      First Name is Required
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      name="lname"
                      type="text"
                      placeholder="Last Name"
                      value={inputLastname}
                      onChange={(e) => setInputLastname(e.target.value)}
                      isInvalid={errorlname}
                    />
                    <Form.Control.Feedback type="invalid">
                      Last Name is Required
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={inputEmail}
                  onChange={(e) => setInputEmail(e.target.value)}
                  isInvalid={errorEmail}
                />
                <Form.Control.Feedback type="invalid">
                  Email is Required
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>Phone No.</Form.Label>
                <Form.Control
                  name="phone"
                  type="text"
                  placeholder="Phone No."
                  value={inputPhone}
                  onChange={(e) => setInputPhone(e.target.value)}
                  isInvalid={phoneError}
                />
                <Form.Control.Feedback type="invalid">
                  Phone Number is Required
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Label>Feedback</Form.Label>
                <Form.Control
                  name="feedback"
                  as="textarea"
                  placeholder="Feedback"
                  rows={3}
                  value={inputMsg}
                  onChange={(e) => setInputMsg(e.target.value)}
                  isInvalid={msgError}
                />
                <Form.Control.Feedback type="invalid">
                  Feedback is Required
                </Form.Control.Feedback>
              </Form.Group>

              <Button
                variant="primary"
                onClick={sendFeedback}
                type="submit"
                block
                disabled={loading}
                style={{ position: "relative" }}
              >
                Send FeedBack{" "}
                {loading && (
                  <Spinner
                    style={{ position: "absolute", left: "50%" }}
                    animation="border"
                  />
                )}
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
                  <a
                    href="https://www.instagram.com/la_crescendo?r=nametag"
                    style={{ color: "black" }}
                  >
                    <i
                      className="fa fa-instagram fa-2x socialIcon"
                      style={styles.socialIcons}
                    ></i>
                  </a>

                  <a
                    href="mailto:laacrescendo@gmail.com?cc=laacrescendo@gmail.com&subject=Enquiry"
                    style={{ color: "black" }}
                  >
                    <i
                      className="fa fa-envelope fa-2x socialIcon"
                      style={styles.socialIcons}
                    ></i>
                  </a>

                  <a
                    href="https://wa.me/<+91 9923229632>"
                    style={{ color: "black" }}
                  >
                    <i
                      className="fa fa-whatsapp fa-2x socialIcon"
                      style={styles.socialIcons}
                    ></i>
                  </a>
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
