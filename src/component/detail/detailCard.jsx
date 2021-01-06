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
        
        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?</h6>
          
        <div className='card-footed'  >
        
          <button onClick={togglePopup} className='submiteded'> ...</button> </div>
          {isOpen && <div className="check">
          <input type='checkbox' value='Python'/>
          <label >Python</label>
          <input type='checkbox' value='Python'/>
          <label>JavaScript</label>
          <input type='checkbox' value='Python'/>
          <label>C</label>
          <input type='checkbox' value='Python'/>
          <label>C++</label>
          {
            addSubmit&&  <div>
            
            <input type='checkbox' value='Python'/>
          <label>{title}</label>
            
            </div>
          }

          { <div>
          <Popup
          trigger={
              <button onClick={toggleAdd}>Add</button>
          }
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
                
            </div>

    )
}
export default DetailCard