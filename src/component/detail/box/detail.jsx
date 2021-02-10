import React, { useState } from "react";
import './details.scss'
import { Redirect, withRouter } from "react-router-dom";
import Header from '../../header/header'
import DetailCard from "./detailCard";
import Rating from "../survey/rating";
import Formdata from "../survey/form/form"
import Formdata1 from "../survey/form1/form1";
import Formdata2 from "../survey/form2/form2";
const Detail=(data)=>{
var  a=[1,2,3,4,5,6,7,8,9,10]
var head=[{id:0,name:'Surface Request'},{id:1,name:'Hard Rust'},{id:3,name:'Loose Points'},{id:4,name:'Hard Strains'},{id:5,name:'Crago Residues'},{id:6,name:'Repairs'}]
const [button,setButton]=useState(true)
const [button2,setButton2]=useState(true)
const [button3,setButton3]=useState(true)
const [button4,setButton4]=useState(true)
const [button5,setButton5]=useState(true)
const [button6,setButton6]=useState(true)
const [subi,setSubi]=useState(false)
const subit=()=>{
  setSubi(true)
}
const change=()=>{
  setButton(!button)
  setButton2(true)
  setButton3(true)
  setButton4(true)
  setButton5(true)
  setButton6(true)
}
  const change2=()=>{
    setButton2(!button2)
    setButton(true)
    setButton3(true)
    setButton4(true)
    setButton5(true)
    setButton6(true)
  }
  const change3=()=>{
    setButton3(!button3)
    setButton(true)
    setButton2(true)
    setButton4(true)
    setButton5(true)
    setButton6(true)
  }
  const change4=()=>{
    setButton4(!button4)
    setButton(true)
    setButton2(true)
    setButton3(true)
    setButton5(true)
    setButton6(true)
  }
  const change5=()=>{
    setButton5(!button5)
    setButton(true)
    setButton2(true)
    setButton3(true)
    setButton4(true)
    setButton6(true)
  }
  const change6=()=>{
    setButton6(!button6)
    setButton(true)
    setButton2(true)
    setButton3(true)
    setButton4(true)
    setButton5(true)
  }
  if(!localStorage.getItem('user')){
    return <Redirect to ='/login'/>
  }
return(    
 <div>
 <Header  />
    <div className="split left"> 
    <div className="mai">
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
              <div className='boxfont'> TRANSERVE BULKHEAD  <span className="align">&#9658;</span> </div>
            </div>
            <div className={button2 ? "box-true": "box-false"} onClick={change2}>
              <div className='boxfont'> BILGE HOOPER <span className="align">&#9658;</span> </div>
            </div>
            <div className={button3 ? "box-true": "box-false"} onClick={change3}>
            <div className='boxfont'> CARGO HOLD AND GEAR <span className="align">&#9658;</span> </div>
           </div>
           <div className={button4 ? "box-true": "box-false"} onClick={change4}>
            <div className='boxfont'> CONSUMPTION & ROB <span className="align">&#9658;</span> </div>
           </div>
           <div className={button5 ? "box-true": "box-false"} onClick={change5}>
           <div className='boxfont'> NOTICES<span className="align">&#9658;</span> </div>
          </div>
          <div className={button6 ? "box-true": "box-false"} onClick={change6}>
          <div className='boxfont'> OTHER INSTRUCTIONS <span className="align">&#9658;</span> </div>
         </div>
          </div>
          </div>
    </div>
    <div className="split right">
    <div className='rightdiv'>
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
      {!button4 &&
        <div className='divide'>
          <div className="marg">
          {
          <div>
          <div className='cargo'>ADD CONSUMPTION & ROB DETAILS</div>
            <Formdata1/></div>
          }
          </div> 
        </div> 
      }
      {!button6 &&
        <div className='divide'>
          <div className="marg">
          {
          <div>
          <div className='cargo'>ADD OTHER INSTRUCTIONS DETAILS</div>
            <Formdata2/></div>
          }
          </div> 
        </div> 
      }
    </div>
    </div>
</div>
)}
export default withRouter( Detail);