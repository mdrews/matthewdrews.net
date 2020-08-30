import React from 'react';
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver';

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver primaryImg='static/trees/1.png' 
                              secondaryImg='static/trees/2.png'
                              alt="" />
      &nbsp;&nbsp;&nbsp;
    </div>
  );
};

export default ImageChangeOnMouseOver;