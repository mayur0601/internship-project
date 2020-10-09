import React, { useState } from "react";
import "../../assets/css/Gallery.css";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";

function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="gallery">
      {/* <div className="title">
        <h1 className="text-center">GALLERY</h1>
      </div> */}

      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default Gallery;
