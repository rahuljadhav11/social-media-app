import React from "react";
import "./user-image.scss";

const UserImage = ({ position, imagePath }) => (
  <img
    className={ position === "left" ? "user-image-left" : (position === "right" ? "user-image-right" : null) }
    src={imagePath}
    alt="KL Rahul"
  />
);

export default UserImage;
