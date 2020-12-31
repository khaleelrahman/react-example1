import React from "react";

import { ErrorMessage, Field, Formik,Form } from "formik";
import {  withRouter } from "react-router-dom";
import './login.css'

const Basic=(props)=>{
    console.log(props)
    return(
    <div className="main">
    <p className='sign'>Login</p>
    <Formik initialValues={{email:"",password:""}}
    validate={
        values=>{
            const errors={};
            if(!values.email){
                errors.email='Required';
            }
            else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                errors.email='Invalid Email Address'
            }
            if(values.password!=='123456'){
                errors.password='Invalid Email Address or Password'
            }
            if(!values.password){
                errors.password='Required';
            }
            return errors;
        }
    }
    onSubmit={(values)=>{
        console.log(values.email)
            if (values){
                props.history.push("/homepage")
            }
    }}
    
    >
    {({
        
        isSubmitting,
    })=>(
        <Form className='form1'>
            <Field className='un' type='email' name="email" placeholder="Enter Your Email"/>
            <ErrorMessage name='email' component='div'/>
            <Field type='password' name="password" className="pass" placeholder="Enter Your Password"/>
            <ErrorMessage name='password' component='div'/>
           <button name='submit' className="submit" type='submit' onClick={onsubmit}>Login</button>
           
        </Form>
    ) }   
    
    
    </Formik>
    </div>
    )}
export default withRouter( Basic)