import React from "react";
import './details.scss'
import Header from '../header/header'

import DetailCard from "./detailCard";



const Detail=(data,usedata)=>{
var  a=[1,2,3,4,5,6,7,8,9,10]
console.log(data)
console.log(data.location.state.usedata.udata)


return(
    
 <div>
 <Header userName={data.location.state.usedata.state.udata} />
    <div className="split left">
        
            
           <div  className='card-containered' >
           <div className='card-headered'><div className='card-text-headered'> <img alt='no' src={data.location.state.data.image}/><p >{data.location.state.data.name}</p></div></div>
             
             <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?</h5>
             <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?</h5>
            </div>
    </div>

    <div className="split right">
        
         <div className='divide'>
          {a.map((index)=>(
            <DetailCard />
          ))}
          </div> 
     </div>
</div>

)}
export default Detail;