import React from "react";
import { motion } from "framer-motion";

function ImageGrid({ setSelectedImg }) {
  return (
    <div className="image-grid">
      <motion.div
        className="img-wrap"
        layout
        whileHover={{ opacity: 1 }}
        s
        onClick={() =>
          setSelectedImg(
            "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          )
        }
      >
        <motion.img
          src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          alt="uploaded pic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        />
      </motion.div>

      <motion.div
        className="img-wrap"
        layout
        whileHover={{ opacity: 1 }}
        s
        onClick={() =>
          setSelectedImg(
            "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          )
        }
      >
        <motion.img
          src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          alt="uploaded pic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        />
      </motion.div>

      <motion.div
        className="img-wrap"
        layout
        whileHover={{ opacity: 1 }}
        s
        onClick={() =>
          setSelectedImg(
            "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          )
        }
      >
        <motion.img
          src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          alt="uploaded pic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        />
      </motion.div>
      <motion.div
        className="img-wrap"
        layout
        whileHover={{ opacity: 1 }}
        s
        onClick={() =>
          setSelectedImg(
            "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          )
        }
      >
        <motion.img
          src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          alt="uploaded pic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        />
      </motion.div>
    </div>
  );
}

export default ImageGrid;
