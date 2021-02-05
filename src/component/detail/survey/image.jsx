import React from "react";
import './image.scss'


const ImageThumb = ({ image }) => {
    return<span className="adjstimag"><img className='imgg'  src={URL.createObjectURL(image)} alt={image.name} /></span>;
   
  };
  export default ImageThumb