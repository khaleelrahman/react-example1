import React ,{useState}from "react";

import { ErrorMessage, Field, Formik,Form } from "formik";
import {  withRouter } from "react-router-dom";
import './login.scss'
import { logdata } from "./data.json";
import * as Yup from 'yup';

const LoginValidation = Yup.object().shape({
    
    email: Yup
      .string()
      .email()
      .required(),
    password: Yup
      .string()
      .min(6)
      .max(16)
      .required('Invalid Email or password'),
  })

const Basic=(props)=>{
    console.log(props)
    const[isLogin,setLogin]=useState(false);
    console.log(logdata[0].email)
    return(
    <div className="main">
    <p className='sign'>Login</p>
    <Formik initialValues={{email:"",password:""}}
    validationSchema= {LoginValidation}
    onSubmit={(values)=>{
        console.log(values.email)
        console.log(logdata[0].password)
        if (values.email===logdata[0].email&&values.password===logdata[0].password){
        setLogin(!isLogin);
        }
            
           
            
        }}
    
    
    >
    {({
        
        isSubmitting,
    })=>(
        <Form className='form1'>
            <Field className='un' type='email' values={logdata[0].email}  name="email" placeholder="Enter Your Email"/>
            <ErrorMessage name='email' component='div' className="err"/>
            <Field type='password' name="password" className="pass" placeholder="Enter Your Password"/>
            <ErrorMessage name='password' component='div' className='err'/>
           <button name='submit' className="submit" type='submit' onClick={onsubmit}>Login</button>
           
        </Form>
    ) }   
    
    
    </Formik>
    {
        isLogin&&<div>
        {
           
                 props.history.push({pathname:'/homepage', state:{udata:logdata[0].username}})
             
        }        
        
        </div>
    }
    </div>
    )}
export default withRouter( Basic)