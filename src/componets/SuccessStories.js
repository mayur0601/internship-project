import React from "react";
import CardItem from "./CardItem";
import "./SuccessStories.css";

function SuccessStories() {
  return (
    <div>
      <div className="header">
        <h1 className="text-center">STUDENTS ACHIVEMENTS</h1>
      </div>
      <div className="cards">
        {/* <h1>Student Achivements</h1> */}
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="https://stories.eku.edu/sites/stories.eku.edu/files/imagecache/news_feature_stories_homepage_marquee/page_header_images/ligia_tossato_photo.jpg"
                text="Explore the hidden waterfall deep inside the Amazon Jungle"
                label="Adventure"
                path="/services"
              />
              <CardItem
                src="https://bloximages.chicago2.vip.townnews.com/crossville-chronicle.com/content/tncms/assets/v3/editorial/c/9f/c9f38e27-e618-5528-af58-7deb020b870a/53cb3e18c70da.image.jpg?resize=500%2C532"
                text="Travel through the Islands of Bali in a Private Cruise"
                label="Luxury"
                path="/services"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="https://www.wright.edu/sites/www.wright.edu/files/styles/teaser_aspect_3_2/public/uploads/2020/Jun/article/David-Dao-20523_030-2.jpg?itok=0ZuEz9FJ"
                text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                label="Mystery"
                path="/services"
              />
              <CardItem
                src="https://oryshihorinstitute.com/wp-content/uploads/2020/05/About-Ory-Shihor-Institute.jpg"
                text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                label="Mystery"
                path="/services"
              />
            </ul>
          </div>
          <button type="button" class="btn btn-primary">
            See More..
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessStories;
