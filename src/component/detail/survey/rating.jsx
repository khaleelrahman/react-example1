import React, { useState } from "react";
import './rating.scss'
import FileUploader from "./upload";
import ImageThumb from "./image";
const Rating=(items,a)=>{
    var [fArray,setFarray]=useState([])
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
    const [file, setFile] = useState();
    const [fileValid, setFilevalid] = useState(false);
   
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
    console.log(fArray)
 return(
        <div className='ratemain'>
        <span className='maintit'>{items.items.name}</span>&emsp; {
            ((!coll.coll1||!coll.coll2||!coll.coll3)&&!fileValid) && <span className='req'>*Refernece photographs are mandatory for ratings falling under poor category</span>
        }
        <div className='gridmain'>
        <div className='gridview'>
            <div className={coll.coll1?'col':'col3'} onClick={colChange1}><div className='rat'>1</div></div>
            <div className={coll.coll2?'col':'col3'} onClick={colChange2}><div className='rat'>2</div></div>
            <div className={coll.coll3?'col':'col3'} onClick={colChange3}><div className='rat'>3</div></div>  
            <div className={coll.coll4?'col':'col2'} onClick={colChange4}><div className='rat'>4</div></div>
            <div className={coll.coll5?'col':'col2'} onClick={colChange5}><div className='rat'>5</div></div>
            <div className={coll.coll6?'col':'col2'} onClick={colChange6}><div className='rat'>6</div></div>
            <div className={coll.coll7?'col':'col2'} onClick={colChange7}><div className='rat'>7</div></div>
            <div className={coll.coll8?'col':'col1'} onClick={colChange8}><div className='rat'>8</div></div>
            <div className={coll.coll9?'col':'col1'} onClick={colChange9}><div className='rat'>9</div></div>
            <div className={coll.coll10?'col':'col1'} onClick={colChange10}><div className='rat'>10</div></div>
            {
                (!coll.coll8||!coll.coll9||!coll.coll10) &&<div className='col1res'>Good</div>
            }
            {
                (!coll.coll4||!coll.coll5||!coll.coll6||!coll.coll7) &&<div className='col2res'>Fair</div>
            }
            {
                (!coll.coll1||!coll.coll2||!coll.coll3) &&<div className='col3res'>Poor</div>
            }
            <div><div className='colcam' onClick={upload}><FileUploader file={file} setFile={setFile} fArray={fArray} setFarray={setFarray} fileValid={fileValid} setFilevalid={setFilevalid} coll={coll}/></div></div>  
            
        </div>
        </div>
        <div className='imgdiv'>
        { 
         fArray.map((itm=>(<ImageThumb image={itm} />)))
        }
        </div>
        </div>
    )
}
export default Rating;