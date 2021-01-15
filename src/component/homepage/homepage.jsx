import React from "react";
import { Redirect } from "react-router-dom";
import { useQuery } from "@apollo/client";
import  Card  from "./list";
import './card.scss'
import { QUERRY } from './gqlquery';
import Header from "../header/header";




 const Home=()=>{
    const {loading,data}=useQuery(QUERRY,{ errorPolicy: 'all' })
    if(!localStorage.getItem('user')){
      return <Redirect to ='/login'/>
    }
    if (loading) return <div className="loading">loading...</div>
    return (
          <div>
            <Header  />
            {data &&(
                <div className="header">
                  <div className='card-list'>
                  {data.episodesByIds[0].characters.map((mon,index)=>
                  (<Card   key={index} mon={mon} index={index}/>))}
                  </div>
                </div>
                )}
        </div>
    
    )}
export default Home
