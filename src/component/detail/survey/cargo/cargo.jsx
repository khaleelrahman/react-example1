import { useFormik } from "formik";
import React,{useState} from "react";
import * as Yup from 'yup';
import Input from "../form/input";
import Select from "../port/select";
import Cargend from "./cargend";
import './cargo.scss'
import Date from "./date";
const Cargodata=()=>{
   var c1=[{id:1,title:'Cargo Commodity',text:"cargoc",option:{'opt1':'Apple','opt2':'Orange',val1:'apple',val2:'orange'},value:""},{id:2,title:'Cargo Garde',text:"cargogr",option:{'opt1':'Coal Grade A','opt2':'Coal Grade B',val1:'Coal Grade A',val2:'Coal Grade B'},size:'smallc',value:""}]
   var c11=[{id:3,title:'Cargo Quantity',text:"cargoq",size:'smallc1',value:""}]
   var c2=[{id:1,title:'Hold',text:"hold",option:{'opt1':'Apple','opt2':'Orange',val1:'Apple',val2:'Orange'},size:'smallc2',value:""},{id:2,title:'Cargo Stowage',text:"cargost",option:{'opt1':'Apple','opt2':'Orange',valu:'',val1:'APPLE',val2:'ORANGE'},size:'smallc2',value:""}]
   var c21=[{id:3,title:'% MOLOO',text:"mollo",size:'smallc2',value:""}]
   var c3=[{id:1,title:'Load Port',text:"load",option:{'opt1':'Srilanka','opt2':'Mumbai',val1:'Srilanka',val2:'Mumbai'},size:"loadsmall"}]
   var c31=[{id:1,title:'Load Date',text:'ldate'}]
   var c4=[{id:1,title:'Discharge Port',text:"discharge",option:{'opt1':'Dubai','opt2':'Dubai',val1:'Dubai',val2:'Dubai'},size:"loadsmall"}]
   var c41=[{id:1,title:'Discharge Date',text:'ddate'}]
  
   const [cosub,setCosub]=useState(false)
   const formikcargo = useFormik({
    initialValues: {
      cargoc: '', cargogr:'', cargoq:'',hold:'',cargost:'',mollo:'',load:"",ldate:"",discharge:"",ddate:""
    },
    validationSchema: Yup.object({ 
       cargoc:Yup.string().required('Required'),
       cargogr: Yup.string().required('Required'),
       cargoq:Yup.string().required('Required'),
       hold: Yup.string().required('Required'),
       cargost:Yup.string().required('Required'),
       mollo:Yup.string().required('Required'),
       load:Yup.string().required('Required'),
       ldate:Yup.string().required('Required'),
       discharge:Yup.string().required('Required'),
       ddate:Yup.string().required('Required'),
      
    }),
    onSubmit: (values, { setSubmitting }) => {
      setCosub(!cosub)
      setTimeout(() => {
       
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
  }});
    return(
        <div className="mainclass">
        <form onSubmit={formikcargo.handleSubmit}>
        <div className='cargmain'>

        {
            c1.map((items)=>
            <div>
              <Select key={items.id} title={items.title} formikport={formikcargo} text={items.text} options={items.option} size={items.size}/>
              </div>)
          }
        {c11.map((items)=>
            <div>
            <Input key={items.id} items={items.title} formik={formikcargo} text={items.text} value={items.value} size={items.size}/>
            </div>)
        }
        
        </div>
        <div className='cargmain'>
        { c2.map((items)=>
            <div>
              <Select key={items.id} title={items.title} formikport={formikcargo} text={items.text} options={items.option} size={items.size}/>
              </div>)
          }
          {c21.map((items)=>
            <div>
            <Input key={items.id} items={items.title} formik={formikcargo} text={items.text} value={items.value} size={items.size} />
            </div>)
        }
        </div>
        <div className='carggri'>
        <div className='cargmain1'>
        <div className='cargload'> { c3.map((items)=>
            
              <Select key={items.id} title={items.title} formikport={formikcargo} text={items.text} options={items.option} size={items.size}/>
              )
          }</div>
          <div className='cargdate'>
          { c31.map((items)=>
            
            <Date key={items.id} title={items.title} formikport={formikcargo} text={items.text}  size={items.size}/>
            )
        }
          </div>
         
          
        <div className='cargload1'> { c4.map((items)=>
            
              <Select key={items.id} title={items.title} formikport={formikcargo} text={items.text} options={items.option} size={items.size}/>
              )
          }</div>
          <div className='cargodate1'>
          { c41.map((items)=>
            
            <Date key={items.id} title={items.title} formikport={formikcargo} text={items.text}  size={items.size}/>
            )
        }
          </div>
         
        </div>
        </div>
        <button type="submit" className='submicargo' disabled={formikcargo.isSubmitting} onClick={formikcargo.handleChange}>ADD CARGO</button>
        
        </form>
       <div className='addcargo'><div className='addtext'>CARGO ADDED</div></div>
       {cosub&&<div className='cargolist'><div><span className='cargonummain'><span className='cargonum'>01</span></span><span className='country'>{formikcargo.values.cargogr}</span><span className='cargconmain'><span className='cargaddload'>{formikcargo.values.load}</span><span className='cargaddate'>({(formikcargo.values.ldate)})</span><span className='cargarr'>-</span><span className='cargaddload'>{formikcargo.values.discharge}</span><span className='cargaddate1'>({formikcargo.values.ddate})</span></span><span className='holdcarg'>HOLD #2</span></div></div>}
       
       <div className='addcargo'>
       <Cargend formikcargo={formikcargo}/>
       </div>
       </div>
        
    )
}
export default Cargodata;
