import React, { Fragment, useState, useEffect } from "react";
import "../../assets/css/achivements.css";
import AchievementCard from "./AchievementCard";
import Container from "react-bootstrap/Container";
import axios from "axios";

function Achivements() {
  const [achivements, setAchivements] = useState([]);

  useEffect(() => {
    axios
      .get("/achievements")
      .then((res) => {
        setAchivements(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  let alter = false;

  const achivementMarkup = achivements.map((achivement) => (
    <Fragment>
      {(alter = !alter)}
      <AchievementCard
        key={achivement.achivementId}
        achivement={achivement}
        alter={!alter}
      />
    </Fragment>
  ));
  return (
    <Fragment>
      <div className="achievementBg">
        <div className="BgDepth d-flex align-items-center justify-content-center">
          <h2 className="text-center achievementHeader">Achivements</h2>
        </div>
      </div>
      <Container>{achivementMarkup}</Container>
    </Fragment>
  );
}

export default Achivements;
