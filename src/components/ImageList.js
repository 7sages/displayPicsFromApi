import React from "react";
import "./Imagelist.css";

const ImageList = props => {
  const images = props.images.map(image => {
    return (
      <img alt={image.description} key={image.id} src={image.urls.regular} />
    );
  });
  return <div className="image-list">{images}</div>;
};
export default ImageList;
