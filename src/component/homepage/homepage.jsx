import React from "react";

import { gql, useQuery } from "@apollo/client";
import  Card  from "./list";
import './card.scss'
import Header from "../header/header";

const QUERRY=gql`
{
  episodesByIds(ids: [1, 2]) {
    characters {
      name
      status
      species
      type
      gender
      image
      
     
    }
  }
}

`


 const Home=(props)=>{
    
     const {data}=useQuery(QUERRY)
    console.log(data)
    console.log(props.location.state.udata)
    return (
        
        
    <>
    <div>
    <Header  userName={props.location.state.udata} /></div>
     {data &&(
       <div className="header">
    <div className='card-list'>
    {data.episodesByIds[0].characters.map((mon,index)=>
        (<Card key={index} mon={mon} index={index}/>))}
    </div>
    </div>
    )}
    </>
    
    )}
export default Home
