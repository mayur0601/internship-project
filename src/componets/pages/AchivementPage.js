import React from "react";
import Achivements from "../AchivementComponets/achivements";
import Gallery from "../AchivementComponets/Gallery";

function AchivementPage() {
  return (
    <div className="achivements">
      <Achivements />
      <div className="gap">
        <h1 className="text-center">GALLERY</h1>
      </div>
      <Gallery />
    </div>
  );
}

export default AchivementPage;
