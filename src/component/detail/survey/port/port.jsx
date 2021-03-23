import React, { useState } from 'react';
import {  useFormik} from 'formik';
import './port.scss';
import * as Yup from 'yup';
import  information  from "./information.svg";
import Input from '../form/input';
import Select from './select';



const Example = () =>{
  const [posub,setPosub]=useState(false)
  var k3=[{id:1,name:'Load Port Information',text:'text',value:"",},{id:2,name:'Load Port Restrictions',text:'text1',value:""},{id:3,name:'Load Port Agent Details',text:'text2',value:""},
  {id:4,name:'Bunkering Port(If Applicable)',text:'text3',value:""}]

  var k4=[{id:1,title:'Port Type',text:'port',value:"",option:{'opt1':'Load Port','opt2':'Discharge Port'}},{id:2,title:'Port Name',text:'name',value:"",option:{'opt1':'Apple','opt2':'Orange'}}]

const formikport = useFormik({
  initialValues: {
    port: '',
    name:"", text:"",text1:"",text2:"",text3:""
  },
  validationSchema: Yup.object({
     port:Yup.string().required('Required'),
     name: Yup.string().required('Required'),
     text:Yup.string().required('Required'),
     text1:Yup.string().required('Required'),
     text2:Yup.string().required('Required'),
     text3:Yup.string().required('Required'),
    
  }),
  onSubmit: (values, { setSubmitting }) => {
    setPosub(!posub)
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
}});
 return(
  <div className='mainpo'>
        <form onSubmit={formikport.handleSubmit}>
        <div className='portmain'>
        {
          k4.map((items)=>
            <Select key={items.id} title={items.title} formikport={formikport} text={items.text} options={items.option}/>
            )
        }
          </div>
          <div >
          <div className='h4leftp'>
              {k3.map((items)=>
                <Input key={items.id} items={items.name} formik={formikport} text={items.text} value={items.value}/>
                )}
            </div>
          </div>
         <button type="submit" className='submiport' disabled={formikport.isSubmitting} onClick={formikport.handleChange}>ADD PORT</button>
        </form>
        <div className='portres'>Port List</div>
        {posub&&<div className='portlist'><div><span className='portnummain'><span className='portnum'>01</span></span><span className='country'>Srilanka</span><span className='ptype'>{formikport.values.port}</span><span><img className='infoimg' src={information} alt='arow'/></span></div></div>}
  </div>)
;}
export default Example