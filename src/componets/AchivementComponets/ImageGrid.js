import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

function ImageGrid({ setSelectedImg }) {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    axios
      .get("/gallery")
      .then((res) => {
        setGallery(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const galleryMarkup = gallery.map((picture) => (
    <motion.div
      className="img-wrap"
      layout
      whileHover={{ opacity: 1 }}
      s
      onClick={() => setSelectedImg(`${picture.imageUrl}`)}
    >
      <motion.img
        src={picture.imageUrl}
        alt="uploaded pic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      />
    </motion.div>
  ));

  return <div className="image-grid">{galleryMarkup}</div>;
}

export default ImageGrid;
