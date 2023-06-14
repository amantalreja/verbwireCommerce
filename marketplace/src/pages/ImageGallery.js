import React from 'react';

const ImageGallery = ({ images }) => {
  return (
    <div>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.link} alt={`Image ${index}`} />
          <h3>{image.title}</h3>
          <p>{image.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
