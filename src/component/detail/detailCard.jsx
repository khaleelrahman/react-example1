import React,{useState} from "react";
import './details.scss'
import { Popup } from "reactjs-popup";
import Box from './box';
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
    setAdd(!addOpen)
    
  }

  const [fields, setFields] = useState([{ value: null }]);

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
    setAdd(!addOpen)
    
  
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
            <div className='alaign'>
              <p><input type='checkbox' value='Python'/>
              <label >Python</label> </p>
              
              <p>  <input type='checkbox' value='Python'/>
              <label>JavaScript</label></p>
            
              <p> <input type='checkbox' value='Python'/>
              <label>C</label></p>
          
              <p><input type='checkbox' value='Python'/>
              <label>C++</label></p>
            
          {
            !addSubmit  &&  <div>
            
            {fields.map((field, idx) => {
              return (
                <div key={`${field}-${idx}`}>
                  <input
                    type="checkbox"
                    
                  /> <input type='text' className='text-bod' onChange={(e)=>setTitle(e.target.value) }/>
              
                </div>
              );
            })}
            
            </div>
          }
         </div>
         
          <div>
              { !addOpen   &&<div>
            
              <button onClick={toggleAdd} className='checkAdd'>Add</button>
             
              </div>
              }
              {
                addOpen && <div>
               
                <button onClick={handleAdd}>Submit</button>
                </div>
              }
         
          </div>

          
          </div> }
                
            </div>

    )
}
export default DetailCard