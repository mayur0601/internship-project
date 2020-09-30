import React from "react";
import { Link } from "react-router-dom";
import "./Social.css";

function Social() {
  return (
    <div className="social">
      <Link className="facebook social-btn" href="">
        <img
          className="social-img"
          src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000014_1549330414_facebook-logo.png"
          alt="fb"
        />
      </Link>

      {/* <Link className="linkedin" className="social-btn" target="_blank" href="">
        <img
          className="social-img"
          src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000015_1549330433_linkedin-logo.png"
          alt="in"
        />
      </Link> */}

      <Link className="twitter social-btn" href="">
        <img
          className="social-img"
          src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000016_1549330452_twitter-logo.png"
          alt="twi"
        />
      </Link>

      <Link className="gmail social-btn" href="">
        <img
          className="social-img"
          src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000017_1549330467_google-logo.png"
          alt="g+"
        />
      </Link>

      <Link className="whatsapp social-btn" href="">
        <img
          className="social-img"
          src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000018_1549330485_whatsapp-logo.png"
          alt="w-app"
        />
      </Link>

      {/* <Link id="mail" className="social-btn"  href="">
        <img
          className="social-img"
          src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000019_1549330510_mail-logo.png"
          alt="mail"
        />
      </Link> */}
    </div>
  );
}

export default Social;
