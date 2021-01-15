import React from 'react'
import { withRouter } from 'react-router-dom'
import './card.scss'
 const Card=(props)=>{
    const onsubmited=()=>{
        if('user')
        {
            props.history.push({pathname:'/details', state:{data:props.mon}})
        }
    }
    return(
        <div className='card-container'>
            <div className='card-header'>
                <h1 className='card-text-header'>{props.mon.name}</h1>
            </div>
            <h1 className='card-text'>Status: &emsp;{props.mon.status}</h1>
            <div className='card-foot' onClick={onsubmited}  >
                <div >
                    <button className='submited'>View Details</button>
                </div>
            </div>
        </div>
    )}
export default withRouter(Card);