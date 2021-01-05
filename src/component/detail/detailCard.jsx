import React,{useState} from "react";
import './details.css'
import { Popup } from "reactjs-popup";
const DetailCard=()=>{

    const [isOpen, setIsOpen] = useState(false);
const [addOpen, setAdd] = useState(false);
const[addSubmit,setSubmit]=useState(false);
const [title, setTitle] = useState('')
const togglePopup = () => {
  setIsOpen(!isOpen);
}
const toggleAdd = () => {
  setAdd(!addOpen);
}
const toggleSubmit = () => {
    setSubmit(!addSubmit);
    setAdd(addOpen);
  }
  console.log(title)

    return(
        
         
           
        <div  className='card-containered' >
        <div className='card-headered'><h1 className='card-text-headered'>your fav lang</h1></div>
        {isOpen && <div>
          <input type='checkbox' value='Python'/>
          <label>Python</label>
          <input type='checkbox' value='Python'/>
          <label>JavaScript</label>
          <input type='checkbox' value='Python'/>
          <label>C</label>
          <input type='checkbox' value='Python'/>
          <label>C++</label>
         
          {
              addSubmit&&  <>
              
              <input type='checkbox' value='Python'/>
          <label>{title}</label>
              
              </>
          }
          
          { <div>
            <Popup
            trigger={(
                <button onClick={toggleAdd}>Add</button>
            )}
            position="right center"
            closeOnDocumentClick
          >
            <span> <input type='text' onChange={event => setTitle(event.target.value)}/>
            <button onClick={toggleSubmit} >Submit</button>
            
            </span>
          </Popup>
            </div>
          }
        </div>}
        <div className='card-footed'   >
<div ><button onClick={togglePopup} className='submiteded'> ...</button> </div></div>
       
        
      
  </div>

    )
}
export default DetailCard