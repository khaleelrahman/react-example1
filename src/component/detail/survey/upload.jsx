
import React from "react";
import './upload.scss';

const FileUploader = props => {
  console.log(props)
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
      <div className='imgali'>
          <div className='up-but' onClick={handleClick}><div className= {((!props.coll.coll1||!props.coll.coll2||!props.coll.coll3)&&!props.fileValid) ?'fa emoj':'fa emoj1'}> &#xf030;</div>
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