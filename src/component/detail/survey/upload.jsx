
import React from "react";
import './upload.scss';
import ImageThumb from "./image";
const FileUploader = props => {
  const [file, setFile] = React.useState("");
    const hiddenFileInput = React.useRef(null);
    const handleClick = event => {
      hiddenFileInput.current.click();
    };
    const handleChange = event => {
     setFile(event.target.files[0]);
     
    };
    return (
      <div>
        
        {
          file? <div className='imgg'> <ImageThumb image={file} /></div>:<div className='up-but' onClick={handleClick}> &#128247;
          </div>
        }
       
        <input type="file"
               ref={hiddenFileInput}
               onChange={handleChange}
               style={{display:'none'}} 
        /> 

       
      </div>
    );
  };
  export default FileUploader;