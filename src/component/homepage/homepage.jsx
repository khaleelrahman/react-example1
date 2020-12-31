import React from "react";

import { gql, useQuery } from "@apollo/client";
import  Card  from "./list";
import './card.css'
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


 const Home=()=>{
    
     const {data}=useQuery(QUERRY)
    console.log(data)
    return (
        
        
    <>
    <Header/>
     {data &&(
    <div className="card-list">
    {data.episodesByIds[0].characters.map((mon,index)=>
        (<Card key={index} mon={mon} index={index}/>))}
    </div>
    
    )}
    </>
    
    )}
export default Home
