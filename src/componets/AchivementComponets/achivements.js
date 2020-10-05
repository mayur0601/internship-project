import React, { Fragment } from "react";
import "../../assets/css/achivements.css";
import AchievementCard from "./AchievementCard";
import Container from "react-bootstrap/Container";

function achivements() {
  return (
    <Fragment>
      <div className="achievementBg">
        <div className="BgDepth d-flex align-items-center justify-content-center">
          <h2 className="text-center achievementHeader">
            Students Achivements
          </h2>
        </div>
      </div>
      <Container>
        <AchievementCard />
        <AchievementCard alter={true} />
      </Container>
    </Fragment>
  );
}

export default achivements;
