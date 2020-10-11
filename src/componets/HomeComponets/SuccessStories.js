import React, { useEffect, useState } from "react";
import "../../assets/css/SuccessStories.css";
import axios from "axios";

//React-Bootstrap stuff
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function SuccessStories() {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    axios
      .get("/achievements")
      .then((res) => {
        setAchievements(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const achievementsMarkup = achievements.map((achievement) => (
    <Col xl={6} style={{ padding: "50px 10px" }}>
      <Card className="achievementCard">
        <Card.Img
          variant="top"
          src={achievement.imageUrl}
          style={{ width: "100%", height: "300px", objectFit: "contained" }}
          className="cardImage"
        />
        <Card.Body>
          <Card.Title>{achievement.studentName}</Card.Title>
          <Card.Text>{achievement.body}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <div>
      {/* <div className="header">
        <h1 className="text-center">STUDENTS ACHIVEMENTS</h1>
      </div> */}
      <div className="cards">
        <h1>Student Achivements</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <Row style={{ justifyContent: "center" }}>{achievementsMarkup}</Row>
          </div>
          <Link to="/achivements">
            <button type="button" class="btn btn-primary">
              See More..
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SuccessStories;
