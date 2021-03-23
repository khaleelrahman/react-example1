import React from "react";
import { useFormik} from "formik";
import * as Yup from 'yup';
import Input from "../form/input";
import '../form/form.scss'
const Formdata1=()=>{
    var k1=[{id:0,name:'Voyage Speed For Ballest Leg',text:'text',value:"",size:'small'},{id:1,name:'Voyage Speed For Laden Leg',text:'text1',value:"",size:'small'},{id:2,name:'ME Consumption for Ballast leg',text:'text2',value:""},
    {id:3,name:'ME Consumption for Laden leg',text:'text3',value:""},{id:4,name:'Additional Consumption at Sea/Port',text:'text4',value:""},{id:5,name:'Notice Of Readiness',text:'text5',value:""}]
    const formik = useFormik({
      initialValues: {
        text:"",text1:"",text2:"",text3:"",text4:"",text5:""
      },
      validationSchema: Yup.object({
         text:Yup.string().required('Required'),
         text1:Yup.string().required('Required'),
         text2:Yup.string().required('Required'),
         text3:Yup.string().required('Required'),
         text4:Yup.string().required('Required'),
         text5:Yup.string().required('Required'),
      }),
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });
    
    return (
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className='cargmain'>
            <div className='h4left'>
              {k1.map((items)=>
                <Input key={items.id} items={items.name} formik={formik} text={items.text} value={items.value} size={items.size}/>
                )}
            </div>
       
        </div>
        <button type="submit" className='submitf' onClick={formik.handleChange}>Submit</button>
      </form>
      </div>
    );
  }
  export default Formdata1;