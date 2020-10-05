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
  const AchievementCardMarkup = props.alter ? (
    <div className="a-container">
      <div className="a-card" style={alteStyles.a_card}>
        <div className="imgBx" style={alteStyles.imgBx}>
          {/* <img src={require("../images/piano-5267749_1920.jpg")} alt="" /> */}
        </div>
        <div className="contentBx" style={alteStyles.contentBx}>
          <div className="content">
            <h2>Responsive Card</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              eius pariatur eum nostrum dicta expedita! Omnis, dicta. Eveniet
              itaque numquam sint. Neque quibusdam eos similique amet placeat
              sint cupiditate debitis?
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="a-container">
      <div className="a-card">
        <div className="imgBx">
          {/* <img
            src={require("https://images.unsplash.com/photo-1578410170179-bb10594ed395?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80")}
            alt=""
          /> */}
        </div>
        <div className="contentBx">
          <div className="content">
            <h2>Responsive Card</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              eius pariatur eum nostrum dicta expedita! Omnis, dicta. Eveniet
              itaque numquam sint. Neque quibusdam eos similique amet placeat
              sint cupiditate debitis?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  return AchievementCardMarkup;
}

export default AchievementCard;
