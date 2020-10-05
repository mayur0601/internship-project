import React from "react";
import "../../assets/css/lessons.css";

function LessonSection3() {
  return (
    <div className="lessonsSection">
      <h2 className="">TECHNICAL REQUIREMENTS</h2>
      <ul className="list mr-5">
        <li>
          <p>
            A strong internet connection: ideally a broadband connection with a
            recommended minimum download and upload speed of 10 mbps.  The
            higher the bandwidth, the more stable the audio and video
            connection.{" "}
          </p>
        </li>
        <li>
          <p>
            The built-in speakers and microphone on your device will suffice.
            For higher quality, we recommend an external microphone and a
            professional headset or external speaker. You can also use a mixer
            for better sound output which you can connect with your instrument.
            For very advanced students, we recommend recording and sending a
            video of your performance prior to the lessons to ensure that
            subtleties are not lost.
          </p>
        </li>
        <li>
          <p>
            We recommend using zoom (where we can offer multiple camera angles
            and screen-share amongst many other functions), but are able to
            teach via other platforms such as Skype and Facetime.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default LessonSection3;
