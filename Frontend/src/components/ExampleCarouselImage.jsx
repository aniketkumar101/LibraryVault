import React from 'react';

function ExampleCarouselImage({ imageUrl, altText }) {
  return (
    <img
      className="d-block w-100"
      src={imageUrl}
      alt={altText}
    />
  );
}

export default ExampleCarouselImage;
