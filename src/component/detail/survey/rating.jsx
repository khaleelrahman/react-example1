import React, { useState } from "react";
import ImageThumb from "./image";
import './rating.scss'
import FileUploader from "./upload";
const Rating=(items,a)=>{
    const [uploadd,setUpload]=useState(true)
    const[val,setVal]=useState(false)
    const [coll,setColl1]=useState({
        coll1:true,
        coll2:true,
        coll3:true,
        coll4:true,
        coll5:true,
        coll6:true,
        coll7:true,
        coll8:true,
        coll9:true,
        coll10:true,
    })
    console.log(items)
    const colChange1=()=>{
            setColl1({...coll,coll1:!coll.coll1,coll2:true,coll3:true,coll4:true,coll5:true,coll6:true,coll7:true,coll8:true,coll9:true,coll10:true,})
            setUpload(false)
            setVal(true)
            
    }
    const colChange2=()=>{
        setColl1({...coll,coll1:true,coll2:!coll.coll2,coll3:true,coll4:true,coll5:true,coll6:true,coll7:true,coll8:true,coll9:true,coll10:true,})
        setUpload(false)
        setVal(true)
    }
    const colChange3=()=>{
        setColl1({...coll,coll1:true,coll2:true,coll3:!coll.coll3,coll4:true,coll5:true,coll6:true,coll7:true,coll8:true,coll9:true,coll10:true,})
        setUpload(false)
        setVal(true)
    }
    const colChange4=()=>{
        setColl1({...coll,coll1:true,coll2:true,coll3:true,coll4:!coll.coll4,coll5:true,coll6:true,coll7:true,coll8:true,coll9:true,coll10:true,})
        setUpload(true)
        setVal(true)
    }
    const colChange5=()=>{
        setColl1({...coll,coll1:true,coll2:true,coll3:true,coll4:true,coll5:!coll.coll5,coll6:true,coll7:true,coll8:true,coll9:true,coll10:true,})
        setUpload(true)
        setVal(true)
    }
    const colChange6=()=>{
        setColl1({...coll,coll1:true,coll2:true,coll3:true,coll4:true,coll5:true,coll6:!coll.coll6,coll7:true,coll8:true,coll9:true,coll10:true,})
        setUpload(true)
        setVal(true)
    }
    const colChange7=()=>{
        setColl1({...coll,coll1:true,coll2:true,coll3:true,coll4:true,coll5:true,coll6:true,coll7:!coll.coll7,coll8:true,coll9:true,coll10:true,})
        setUpload(true)
        setVal(true)
    }
    const colChange8=()=>{
        setColl1({...coll,coll1:true,coll2:true,coll3:true,coll4:true,coll5:true,coll6:true,coll7:true,coll8:!coll.coll8,coll9:true,coll10:true,})
        setUpload(true)
        setVal(true)
    }
    const colChange9=()=>{
        setColl1({...coll,coll1:true,coll2:true,coll3:true,coll4:true,coll5:true,coll6:true,coll7:true,coll8:true,coll9:!coll.coll9,coll10:true})
        setUpload(true)
        setVal(true)
    }
    const colChange10=()=>{
        setColl1({...coll,coll1:true,coll2:true,coll3:true,coll4:true,coll5:true,coll6:true,coll7:true,coll8:true,coll9:true,coll10:!coll.coll10})
        setUpload(true)
        setVal(true)
    }
    const upload=()=>{
        setUpload(true)
    }
    console.log(val)
 return(
        <div>
        
        {items.items.name+'*'}&emsp;{
            (items.subi&&!val)&& <span className='req'>Required</span>
        }
        <div className='gridview'>
            <div className={coll.coll1?'col':'col3'} onClick={colChange1}>1</div>
            <div className={coll.coll2?'col':'col3'} onClick={colChange2}>2</div>
            <div className={coll.coll3?'col':'col3'} onClick={colChange3}>3</div>  
            <div className={coll.coll4?'col':'col2'} onClick={colChange4}>4</div>
            <div className={coll.coll5?'col':'col2'} onClick={colChange5}>5</div>
            <div className={coll.coll6?'col':'col2'} onClick={colChange6}>6</div>
            <div className={coll.coll7?'col':'col2'} onClick={colChange7}>7</div>
            <div className={coll.coll8?'col':'col1'} onClick={colChange8}>8</div>
            <div className={coll.coll9?'col':'col1'} onClick={colChange9}>9</div>
            <div className={coll.coll10?'col':'col1'} onClick={colChange10}>10</div>
            {
                (!coll.coll8||!coll.coll9||!coll.coll10) &&<div className='col1'>Good</div>
            }
            {
                (!coll.coll4||!coll.coll5||!coll.coll6||!coll.coll7) &&<div className='col2'>Fair</div>
            }
            {
                (!coll.coll1||!coll.coll2||!coll.coll3) &&<div className='col3'>Poor</div>
            }
            <div className='col' onClick={upload}><FileUploader/></div>
        </div>
        {
            (!uploadd) &&<p className='imgtext'>*You must upload Image</p>
        }
        
        </div>
    )
}
export default Rating;