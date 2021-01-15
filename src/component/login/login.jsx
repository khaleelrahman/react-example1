import React ,{useState}from "react";

import { ErrorMessage, Field, Formik,Form } from "formik";
import {  Redirect, withRouter } from "react-router-dom";
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
    const[isvalid,setLogin]=useState(false);
    console.log(isvalid)
   if(localStorage.getItem('user')){
        return<Redirect from="/login" to="homepage"/>
   }
    return( 
    <div className="main">
         <p className='sign'>Login</p>
         <Formik initialValues={{email:"",password:""}}
            validationSchema= {LoginValidation}
            onSubmit={(values)=>{
                logdata.forEach(items=>{
                    if(items.email===values.email)
                    {
                        if(items.password===values.password){
                            localStorage.setItem('user',items.username)
                            if(localStorage.getItem('user')){
                            props.history.push({pathname:'/homepage'})}
                        }else{
                            setLogin(!isvalid)
                            props.history.push({pathname:'/login'})
                        }
                        }
                    }
                )} 
        }>
        <Form className='form1'>
            <Field className='un' type='email' values={logdata[0].email}  name="email" placeholder="Enter Your Email"/>
            <ErrorMessage name='email' component='div' className="err"/>
            <Field type='password' name="password" className="pass" placeholder="Enter Your Password"/>
            {
                isvalid&&<div className='err'>Invaild Email or Password</div>
            }
            <button name='submit' className="submit" type='submit' onClick={onsubmit}>Login</button>
        </Form>
        </Formik> 
    </div>
    )}
export default withRouter( Basic)