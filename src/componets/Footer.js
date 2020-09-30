import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const styles = {
  footer: { background: "#1b1818", color: "white", padding: "10px" },
  infoHalf: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  titleSocial: {
    fontSize: "x-large",
    borderBottom: "3px solid peachpuff",
    padding: "0 70px 0 0",
  },
  titleAddress: {
    fontSize: "x-large",
    borderBottom: "3px solid peachpuff",
    padding: "0 120px 0 0",
  },
  titleForm: {
    fontSize: "x-large",
    borderBottom: "3px solid peachpuff",
    padding: "0 10px 0 0",
    width: "62%",
  },
  socialIcons: {
    padding: "0 15px 0 15px",
  },
  socialIconsDiv: {
    marginLeft: "30px",
    width: "100%",
  },
  addressDiv: {
    marginLeft: "30px",
    width: "100%",
  },
};

function Footer(props) {
  return (
    <div style={styles.footer}>
      <Container>
        <Row>
          <Col md={{ span: 6, order: "last" }}>
            <div>
              <p style={styles.titleForm}>Send Us Your Feedback</p>
            </div>
            <Form className="pb-2">
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" />
                  </Col>
                  <Col>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Phone No.</Form.Label>
                <Form.Control type="text" placeholder="Phone No." />
              </Form.Group>
              <Form.Group>
                <Form.Label>Feedback </Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary" block>
                Send Feedback
              </Button>
            </Form>
          </Col>
          <Col style={styles.infoHalf} md={{ span: 6, order: "first" }}>
            <Row className="pt-md-0 pb-md-0 pt-5 pb-5">
              <div>
                <p style={styles.titleSocial}>Social Media </p>
              </div>
              <div style={styles.socialIconsDiv} className="pt-2">
                <i
                  className="fa fa-facebook fa-lg socialIcon"
                  style={styles.socialIcons}
                ></i>
                <i
                  className="fa fa-youtube fa-lg socialIcon"
                  style={styles.socialIcons}
                ></i>
                <i
                  className="fa fa-instagram fa-lg socialIcon"
                  style={styles.socialIcons}
                ></i>
                <i
                  className="fa fa-envelope fa-lg socialIcon"
                  style={styles.socialIcons}
                ></i>
                <i
                  className="fa fa-whatsapp fa-lg socialIcon"
                  style={styles.socialIcons}
                ></i>
              </div>
            </Row>
            <Row style={{ paddingBottom: "50px" }}>
              <div>
                <p style={styles.titleAddress}>Address </p>
              </div>
              <div className="pt-1" style={styles.addressDiv}>
                <p style={{ textAlign: "left" }}>
                  12, Aboli, Wing III,
                  <br />
                  2nd Floor,
                  <br />
                  Virar(E), Palghar-401 305
                  <br />
                </p>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
