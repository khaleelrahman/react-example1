import React from "react";
import { useFormik} from "formik";
import * as Yup from 'yup';
import Input from "../form/input";
import '../form/form.scss'
const Formdata2=()=>{
    var k2=[{id:1,name:'Safety/Security And Environment Protection',text:'text',value:""},{id:2,name:'Scrubber Options',text:'text1',value:""},{id:3,name:'Ballest Treatment',text:'text2',value:""},
    {id:4,name:'Mooring Ropes',text:'text3',value:""},{id:5,name:'Instructions From Imsbc Code',text:'text4',value:""},{id:6,name:'Stevedore Damages',text:'text5',value:""},
    {id:7,name:'Usage Of Tugs',text:'text3',value:""},{id:8,name:'Statement Of Facts',text:'text3',value:""}]
    const formik = useFormik({
      initialValues: {
        text:"",text1:"",text2:"",text3:"",text4:"",text5:"",text6:"",text7:""
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
              {k2.map((items)=>
                <Input key={items.id} items={items.name} formik={formik} text={items.text} value={items.value}/>
                )}
            </div>
        <button type="submit" className='submitf' onClick={formik.handleChange}>Submit</button>
        </div>
      </form>
      </div>
    );
  }
  export default Formdata2;