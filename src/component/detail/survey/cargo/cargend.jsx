import React from "react";
import Input from "../form/input";
import Date from "./date";
import './cargend.scss'
import FileUploader from "../upload";
const Cargend=(props)=>{
    var c51=[{id:1,title:'Layacan Days From',text:'lfdate'}]
    var c61=[{id:1,title:'Layacan Days To',text:'ltdate'}]
    var c81=[{id:1,title:'Conversion To Gmt',text:"to",size:'smallc3',value:""}]
    var c91=[{id:1,title:'Cargo Remains',text:"to",value:"",size:"smallc4"},{id:2,title:'Stowage Factor',text:"to",value:"",size:"smallc4"}]
    var c101=[{id:1,title:'Quality Above Maximum Cp Acceptence',text:"to",size:'smallc5',value:""}]
    var c111=[{id:1,title:'Dead Frieght',text:"to",size:'smallc6',value:""}]
    var c121=[{id:1,title:'Hold Bilge Requirment',text:"to",value:"",size:"small7"},{id:2,title:'Bill Of Loading',text:"to",value:"",size:'small7'}]
    return(
        <div>
            <div className='addcargomain'>
                { c51.map((items)=>
                <div>
                    <Date key={items.id} title={items.title} formikport={props.formikcargo} text={items.text}  size={items.size}/>
                </div>)
                }
                <div className='laycanfro'></div>
                {c61.map((items)=>
                <div className='loycanfst'>
                    <Date key={items.id} title={items.title} formikport={props.formikcargo} text={items.text}  size={items.size}/>
                </div>)
                }
                <div className='laycanfro1'></div>
                {c81.map((items)=>
                <div className='gmt'>
                    <Input key={items.id} items={items.title} formik={props.formikcargo} text={items.text} value={items.value} size={items.size}/>
                </div>
                )
                }
            </div>
            <div className='addcargomain1'>
            {c91.map((items)=>
                <Input key={items.id} items={items.title} formik={props.formikcargo} text={items.text} value={items.value} size={items.size}/>
                )
            }
            </div>
            <div className='stowage'>
                <div className='stowage-planl'>
               <div className='stowage-upload'><input type='text'/><span></span></div> 
                </div>
                <div className='stowage-planr'>
                <div className='plan1'><input type="checkbox" id="plan1" name="plan1" value="PLAN1"/><label for="plan1"> Stowage Plan1</label></div>
                <div className='plan1'><input type="checkbox" id="plan2" name="plan2" value="PLAN2"/><label for="plan2"> Stowage Plan2</label></div>
                <div className='plan1'><input type="checkbox" id="plan3" name="plan3" value="PLAN3"/><label for="plan3"> Stowage Plan3</label></div>
                </div>
            
            </div>
           <div className='qualitymain'>
               <div>
               {c101.map((items)=>
                <Input key={items.id} items={items.title} formik={props.formikcargo} text={items.text} value={items.value} size={items.size}/>
                )
            }
               </div> 
               <div className='dead'>{c111.map((items)=>
                <Input key={items.id} items={items.title} formik={props.formikcargo} text={items.text} value={items.value} size={items.size}/>
                )
            }</div>
           
           </div>
           <div className='qualitymain1'>
           
               {c121.map((items)=>
                <Input key={items.id} items={items.title} formik={props.formikcargo} text={items.text} value={items.value} size={items.size}/>
                )
            }
           </div>
        </div>

        )
}
export default Cargend;