import React, { useState } from "react";
import './details.scss'
import { Redirect, withRouter } from "react-router-dom";
import Header from '../../header/header'
import { ErrorMessage, Field, Formik,Form } from "formik";
import DetailCard from "./detailCard";
import Rating from "../survey/rating";
import Formdata from "../survey/form/form"
const Detail=(data)=>{
var  a=[1,2,3,4,5,6,7,8,9,10]
var head=[{id:0,name:'Surface Request'},{id:1,name:'Hard Rust'},{id:3,name:'Loose Points'},{id:4,name:'Hard Strains'},{id:5,name:'Crago Residues'},{id:6,name:'Repairs'}]
const [button,setButton]=useState(true)
const [button2,setButton2]=useState(true)
const [button3,setButton3]=useState(true)
const [subi,setSubi]=useState(false)
const subit=()=>{
  setSubi(true)
}
const change=()=>{
  setButton(!button)
  setButton2(true)
  setButton3(true)
}
  const change2=()=>{
    setButton2(!button2)
    setButton(true)
    setButton3(true)
  }
  const change3=()=>{
    setButton3(!button3)
    setButton(true)
    setButton2(true)
  }
  if(!localStorage.getItem('user')){
    return <Redirect to ='/login'/>
  }
 
return(    
 <div>
 <Header  />
    <div className="split left"> 
      <div className="detailmain">
        <div className='detailsub'>
          <div>Voyage Number<div className='subcont'>VG035</div></div>
          <div className='contdetail'>Created Date<div className='subcont'>12/Nov/2020</div></div>
          <div className='cont1detail'>Status<div className='subcont'>Not Started</div></div>
          <div>Vessel Name<div className='subcont'>Ocean MaxGrid</div></div>
          <div className='contdetail'>Flag<div className='subcont'>PANAMA</div></div>
          <div className='cont1detail'>IMO Number<div className='subcont'>8814275</div></div>
          
        </div>    
      </div>
          <div className="maindiv">
            <div className={button ? "box-true": "box-false"} onClick={change}>
              <p>&#10004; Transerve Bulkhead  <span className="align">&#9654;</span> </p>
            </div>
            <div className={button2 ? "box-true": "box-false"} onClick={change2}>
              <p>&#10004; Bilge Hooper <span className="align">&#9654;</span> </p>
            </div>
            <div className={button3 ? "box-true": "box-false"} onClick={change3}>
            <p>&#10004; cargo hold and gear <span className="align">&#9654;</span> </p>
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
          <button className='submi' onClick={subit}>SUBMIT RATINGS</button>
        </div> 
      }
      {!button3 &&
        <div className='divide'>
          <div className="marg">
          {
          <div>
          <div className='cargo'>ADD CARGO HOLD GEAR DETAILS</div>
          
            <Formdata/></div>
          }
          </div> 
        </div> 
      }
    </div>
</div>

)}
export default withRouter( Detail);