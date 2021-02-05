
import React from "react";
import './upload.scss';

const FileUploader = props => {
  var abcd = []
    const hiddenFileInput = React.useRef(null);
    const handleClick = event => {
     
      hiddenFileInput.current.click();
    };
    const handleChange = event => {
     props.setFilevalid(true)
     console.log(event.target.files)
    
     const fileArray = Array.from(event.target.files)
      fileArray.map(f => f["id"] = Math.random() * Math.pow(10,16))
      props.setFarray(fileArray)
      console.log(fileArray)
    };
    
    return (
      <div>
          <div className='up-but' onClick={handleClick}> &#128247;
          </div>
        <input type="file"
               ref={hiddenFileInput}
               onChange={handleChange}
               multiple='multiple'
               style={{display:'none'}} 
        />
      </div>
    );
  };
  export default FileUploader;