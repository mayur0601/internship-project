import React, { useEffect, useState, Fragment } from "react";
import CardItem from "./CardItem";
import "../../assets/css/SuccessStories.css";
import { Link } from "react-router-dom";
import axios from "axios";

function SuccessStories() {
  const [achivements, setAchivements] = useState([]);

  useEffect(() => {
    axios
      .get("/achievements")
      .then((res) => {
        setAchivements(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  let count = 1;
  let check = true;

  const storiesMarkup = achivements.map((achievement) => (
    <Fragment key={achievement.achievementId}>
      {achievement.featured ? (
        <CardItem
          src={achievement.studentName}
          text={achievement.body}
          label={achievement.designation ? achievement.designation : null}
        />
      ) : null}
    </Fragment>
  ));

  return (
    <div>
      {/* <div className="header">
        <h1 className="text-center">STUDENTS ACHIVEMENTS</h1>
      </div> */}
      <div className="cards">
        <h1 styles={{ color: "black" }}>Student Achivements</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="https://stories.eku.edu/sites/stories.eku.edu/files/imagecache/news_feature_stories_homepage_marquee/page_header_images/ligia_tossato_photo.jpg"
                text="Travel through the Islands of Bali in a Private Cruise"
                label="Adventure"
              />
              <CardItem
                src="https://bloximages.chicago2.vip.townnews.com/crossville-chronicle.com/content/tncms/assets/v3/editorial/c/9f/c9f38e27-e618-5528-af58-7deb020b870a/53cb3e18c70da.image.jpg?resize=500%2C532"
                text="Travel through the Islands of Bali in a Private Cruise"
                label="Luxury"
              />
              <CardItem
                src="https://www.wright.edu/sites/www.wright.edu/files/styles/teaser_aspect_3_2/public/uploads/2020/Jun/article/David-Dao-20523_030-2.jpg?itok=0ZuEz9FJ"
                text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                label="Mystery"
                path="/services"
              />
              <CardItem
                src="https://www.wright.edu/sites/www.wright.edu/files/styles/teaser_aspect_3_2/public/uploads/2020/Jun/article/David-Dao-20523_030-2.jpg?itok=0ZuEz9FJ"
                text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                label="Mystery"
                path="/services"
              />
            </ul>
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
