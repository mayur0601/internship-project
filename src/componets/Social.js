import React from "react";
// import { Link } from "react-router-dom";
import "../assets/css/Social.css";

function Social() {
  return (
    <div className="social">
      <a
        className="facebook social-btn"
        href="https://www.instagram.com/la_crescendo?r=nametag"
      >
        <i className=" fa fa-instagram  social-img-Ig"></i>
      </a>

      <a
        className="gmail social-btn"
        href="mailto:laacrescendo@gmail.com?cc=laacrescendo@gmail.com&subject=Enquiry"
      >
        <img
          className=" social-img"
          src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000017_1549330467_google-logo.png"
          alt="g+"
        />
      </a>

      <a
        className="whatsapp social-btn"
        href="https://wa.me/<+91 9923229632>"
        // target="_blank"
      >
        <img
          className="social-img"
          src="https://ninjasfiles.s3.amazonaws.com/asset_0000000000000018_1549330485_whatsapp-logo.png"
          alt="w-app"
        />
      </a>

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
