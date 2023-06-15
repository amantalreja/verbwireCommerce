import React from 'react';
import './ImageList.css';
const ImageList = ({ images }) => {
  console.log(images);
  return (
    <div className="flexParent">
      {images.map((image, index) => (
        <div key={index} className="flexChild">
          <img src={image.link} alt={image.title} />
          <p>{image.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageList;
