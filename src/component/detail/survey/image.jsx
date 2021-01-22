import React from "react";
import './image.scss'


const ImageThumb = ({ image }) => {
    return <img className='imgg'  src={URL.createObjectURL(image)} alt={image.name} />;
   
  };
  export default ImageThumb