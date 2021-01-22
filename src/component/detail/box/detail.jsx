import React, { useState } from "react";
import './details.scss'
import Header from '../../header/header'
import { ErrorMessage, Field, Formik,Form } from "formik";
import DetailCard from "./detailCard";
import Rating from "../survey/rating";
const Detail=(data)=>{
var  a=[1,2,3,4,5,6,7,8,9,10]
var head=[{id:0,name:'Surface Request'},{id:1,name:'Hard Rust'},{id:3,name:'Loose Points'},{id:4,name:'Hard Strains'},{id:5,name:'Crago Residues'},{id:6,name:'Repairs'}]
const [button,setButton]=useState(true)
const [button2,setButton2]=useState(true)
const [subi,setSubi]=useState(false)
const subit=()=>{
  setSubi(true)
}
const change=()=>{
  setButton(!button)
  setButton2(true)
}
  const change2=()=>{
    setButton2(!button2)
    setButton(true)
  }
return(    
 <div>
 <Header  />
    <div className="split left"> 
        <div  className='left-card' >
            <div className='card-headered'>
              <div className='card-text-headered'> 
                <img className='imag' alt='no' src={data.location.state.data.image}/>
                <p >{data.location.state.data.name}</p>
              </div>
            </div>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
            </h5>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
            </h5>
        </div>
          <div className="maindiv">
            <div className={button ? "box-true": "box-false"} onClick={change}>
              <p>&#10004; Transerve Bulkhead  <span className="align">&#9654;</span> </p>
            </div>
            <div className={button2 ? "box-true": "box-false"} onClick={change2}>
              <p>&#10004; Bilge Hooper <span className="align">&#9654;</span> </p>
            </div>
          </div>
    </div>
    <div className="split right">
      {!button &&
        <div className='divide'>
        <div className="marg2">
            {a.map((index)=>(
              <DetailCard  key={index}/>
            ))}
            </div>
        </div> 
      }
      {!button2 &&
        <div className='divide'>
          <div className="marg">
          {head.map(items=>(
          <Rating key={items.id} items={items} subi={subi}/>
            
          ))}
          </div> 
          <div><button className='submi' onClick={subit}>Save</button></div>
        </div> 
      }
    </div>
</div>

)}
export default Detail;