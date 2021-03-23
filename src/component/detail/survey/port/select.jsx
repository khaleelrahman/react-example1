import React from "react";
import './select.scss'
const Select =(props)=>{
    return(
        <div>
        <div className='porttext'> {props.title}
        {props.formikport.errors[props.text] &&
          props.formikport.touched[props.text] &&
          <span className='reqcols'>
            {props.formikport.errors[props.text]}
          </span>}</div>
          <select id={props.text}  name={props.text} className={`${props.size} select`} value={props.formikport.values[props.text]} onChange={props.formikport.handleChange} onBlur={props.formikport.handleBlur} >
          <option value="" label="Select a Port Type" className='optsty' />
          <option value={props.options.val1} label={props.options.opt1} className='optsty'/>
          <option value={props.options.val2} label={props.options.opt2} className='optsty'/>
          
          </select>
          </div>
    )
}
export default Select;