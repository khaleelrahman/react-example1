
import React from "react";
import './upload.scss';

const FileUploader = props => {
    const hiddenFileInput = React.useRef(null);
    
    const handleClick = event => {
      hiddenFileInput.current.click();
    };
    const handleChange = event => {
      const fileUploaded = event.target.files[0];
      props.handleFile(fileUploaded);
    };
    return (
      <div>
        <div className='up-but' onClick={handleClick}>
        &#128247;
        </div>
        <input type="file"
               ref={hiddenFileInput}
               onChange={handleChange}
               style={{display:'none'}} 
        /> 
      </div>
    );
  };
  export default FileUploader;