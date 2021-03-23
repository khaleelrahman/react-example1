import React from "react";
import './date.scss'
const Date=(props)=>{
    return(
        <div>
        <div className='cargotext'> {props.title}
        {props.formikport.errors[props.text] &&
          props.formikport.touched[props.text] &&
          <span className='reqcold'>
            {props.formikport.errors[props.text]}
          </span>}</div>
          <input
          id={props.text}
          name={props.text}
          type='date'
          onChange={props.formikport.handleChange}
          value={props.formikport.values[props.text]}  className='cargdate1'/>
         
          </div>
    )
}
export default Date;