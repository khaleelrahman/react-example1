import React,{useState} from "react";
import './details.scss'
const DetailCard=()=>{
    const[isOpen,setOpen]=useState(false)
    const [isAdd,setAdd]=useState(false)
    const[isAddd,setAddd]=useState(false)
    const [isAdd1,setAdd1]=useState(false)
    const [isSub,setSub]=useState(false)
    const togglePopup=()=>{
      setOpen(!isOpen)
    }
    const subBox=()=>{
      setSub(true)
      
    setAdd(false)
    }
    const [inputList, setInputList] = useState([{ }]);
    const toggleAdd=()=>{
      setAdd(true)
      setAdd1(true)
      setAddd(true)
      
    }
    const check=()=>{
      setAdd(true)
      setInputList([...inputList, { first:"" }]);
    }

    const handleInputChange = (e, index) => {
      const { name, value } = e.target;
      const list = [...inputList];
      list[index][name] = value;
      setInputList(list);
    };
  return(
    
      <div  className='card-containered' >
        <div className='card-headered'><h1 className='card-text-headered'>your fav lang</h1></div>
        
        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?</h6>
        <div className='card-footed'  >
          <button onClick={togglePopup} className='submiteded'> ...</button> </div>
          {isOpen && <div className="check">
            <div className='alaign'>
              <div ><p ><input type='checkbox' />
              <label >Python</label> </p></div>
              
             <span> <p>  <input type='checkbox' />
              <label>JavaScript</label></p></span>
              <div ><p> <input type='checkbox' />
              <label>C</label></p></div>
              <span ><p><input type='checkbox' />
              <label>C++</label></p></span>
              {isSub&&<div>
                {
                  inputList.map(items => {
                    return (
                      <div>
                     <p> <input type='checkbox'/> {items.first}</p> 
                        </div>
                        )})
                }
                </div>
              }
              {isAdd&&<div>
                {
                  inputList.map((x, i) => {
                    return (
                      <div>
                      <input type='checkbox'/>  <input
                          name="first"
                          value={x.first}
                          onChange={e => handleInputChange(e, i)}
                          className='butfalse'
                        />
                        </div>
                        )})
                }
                </div>
              }
              {
                !isAddd &&  <button onClick={toggleAdd} >Add</button>
              }
              {
                isAdd1 &&<div>
               <button onClick={check}>Add!</button> <span><button onClick={subBox}>Submit</button></span></div>
              }
              </div>
              </div>
            }         
          </div>
    )
}
export default DetailCard