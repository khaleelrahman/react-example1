import React from "react";

import './input.scss'
const Input=(props)=>{
    console.log(props.text)

    return(
        <div>
        <div className='cargtext'>{props.items}   {props.formik.errors[props.text] &&props.formik.touched[props.text] &&(
            <span className='reqcol'>{props.formik.errors[props.text]}</span>)}</div>
        <input
        id={props.text}
        name={props.text}
        type={props.text}
        onChange={props.formik.handleChange}
        value={props.formik.values[props.text]}
        className='inpsty'
      />
      </div>
    )
}
export default Input