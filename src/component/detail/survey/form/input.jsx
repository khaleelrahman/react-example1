import React from "react";
import './input.scss'
const Input=(props)=>{
   

    return(
        <div>
        <div className= {`${props.size} cargtext`}>{props.items}   {props.formik.errors[props.text] &&props.formik.touched[props.text] &&(
            <span className='reqcol'>{props.formik.errors[props.text]}</span>)}</div>
        <input
        id={props.text}
        name={props.text}
        type={props.text}
        onChange={props.formik.handleChange}
        value={props.formik.values[props.text]}
        className={`${props.size} inpsty`}
      />
      </div>
    )
}
export default Input