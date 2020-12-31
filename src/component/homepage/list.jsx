import React from 'react'
import { withRouter } from 'react-router-dom'
import './card.css'

 const Card=(props)=>{
console.log(props)

const onsubmited=()=>props.history.push({pathname:'/details', state:{data:props.mon}})


return(
    <div>
    <div className='card-container'>
    <div className='card-header'><h1 className='card-text-header'>{props.mon.name}</h1></div>
    <h1 className='card-text'>Status: &emsp;{props.mon.status}</h1>
    
    <div className='card-foot' onClick={onsubmited}  >
    <div ><button className='submited'>View Details</button></div>
    </div>
    </div>
    
    </div>
)}
export default withRouter(Card);