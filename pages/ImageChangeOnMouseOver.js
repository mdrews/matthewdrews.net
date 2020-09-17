import React from 'react';
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver';

const ImageChangeOnMouseOver = () => {
  return(
    <ImageToggleOnMouseOver 
      primary='../static/trees/1.png'
      secondary='../static/trees/2.png'
    />
  )
}

export default ImageChangeOnMouseOver;