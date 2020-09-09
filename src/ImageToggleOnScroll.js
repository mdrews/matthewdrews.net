import React, { useRef } from 'react';

const ImageToggleOnScroll = ({primary, secondary}) => {

  const imageRef = useRef(null);

  return(<img 
      src={primary}
      onMouseOver={() => {imageRef.current.src = secondary}}
      onMouseOut={() => {imageRef.current.src = primary}}
      ref={imageRef}
      />);
};

export default ImageToggleOnScroll;