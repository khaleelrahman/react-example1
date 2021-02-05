import React from "react";
import { Field,ErrorMessage,Form,Formik,useFormik} from "formik";
import * as Yup from 'yup';
import Input from "./input";
import './form.scss'
const Formdata=()=>{
  var k=[{id:0,name:"Cargo Gears",text:"text",value:""},{id:1,name:"Cargo Grabs",text:"text1",value:""},{id:2,name:"Hold Cleaning instructions",text:"text2",value:""},
  {id:3,name:"Cargo Hold Condition",text:"text3",value:""}, {id:4,name:"Cargo Hold Readiness",text:"text4",value:""},{id:5,name:"Prepration For Loading",text:"text5",value:""},
  {id:6,name:"Prepration After Loading",text:"text6",value:""},{id:7,name:"Access to Holds",text:"text7",value:""},{id:8,name:"Railing of Hatch Covers",text:"text8",value:""},
  {id:9,name:"Sweeping Of Hatch Covers",text:"text9",value:""},{id:10,name:"Cargo Hold Lights",text:"text10",value:""},{id:11,name:"Cargo Hold Ladders And Access",text:"text11",value:""}]
  const formik = useFormik({
    initialValues: {
      text:"",text1:"",text2:"",text3:"",text4:"",text5:"",text6:"",text7:"",text8:"",text9:"",text10:"",text11:""
    },
    validationSchema: Yup.object({
       text:Yup.string().required('Required'),
       text1:Yup.string().required('Required'),
       text2:Yup.string().required('Required'),
       text3:Yup.string().required('Required'),
       text4:Yup.string().required('Required'),
       text5:Yup.string().required('Required'),
       text6:Yup.string().required('Required'),
       text7:Yup.string().required('Required'),
       text8:Yup.string().required('Required'),
       text9:Yup.string().required('Required'),
       text10:Yup.string().required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  console.log(k)
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className='cargmain'>
          <div className='h4left'>
            {k.map((items)=>
              <Input key={items.id} items={items.name} formik={formik} text={items.text} value={items.value}/>
              )}
          </div>
      <button type="submit" onClick={formik.handleChange}>Submit</button>
      </div>
    </form>
    </div>
  );
}
export default Formdata