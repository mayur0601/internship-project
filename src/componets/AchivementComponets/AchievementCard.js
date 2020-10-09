import React from "react";
import "../../assets/css/achievementCard.css";
const alteStyles = {
  a_card: {
    flexDirection: "row-reverse",
    textAlign: "right",
  },
  imgBx: {
    left: "-25px",
  },
  contentBx: {
    right: "-25px",
    padding: "20px 100px 20px 60px",
  },
};

function AchievementCard(props) {
  const {
    body,
    featured,
    studentName,
    designation,
    imageUrl,
  } = props.achivement;

  const AchievementCardMarkup = props.alter ? (
    <div className="a-container">
      <div className="a-card" style={alteStyles.a_card}>
        <div className="imgBx" style={alteStyles.imgBx}>
          <img src={imageUrl} alt="" />
        </div>
        <div className="contentBx" style={alteStyles.contentBx}>
          <div className="content">
            <h2>{studentName}</h2>
            <p>{body}</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="a-container">
      <div className="a-card">
        <div className="imgBx">
          <img src={imageUrl} alt="" />
        </div>
        <div className="contentBx">
          <div className="content">
            <h2>{studentName}</h2>
            <p>{body}</p>
          </div>
        </div>
      </div>
    </div>
  );
  return AchievementCardMarkup;
}

export default AchievementCard;
