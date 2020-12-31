import React from "react";
import './details.css'
import Header from '../header/header'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';



const Detail=(data)=>{

console.log(data.location.state.data.name)
const onsubmited=()=>data.history.push()
return(
    
 <div>
 <Header/>
    <div className="split left">
        <div className="centered">
            
             <h2>Details</h2>
             <img alt='no' src={data.location.state.data.image}/>
             <p>{data.location.state.data.name}</p>
             <p>{data.location.state.data.status}</p>
             <p>{data.location.state.data.species}</p>
             <p>{data.location.state.data.type}</p>
             <p>{data.location.state.data.gender}</p>
        </div>
    </div>

    <div className="split right">
        <div className="centered">
            
            <h2>Check It Out</h2>
            <div onClick={onsubmited} className='card-containered'>
            <p> <Popup
            trigger={<button className="button"> Open Modal </button>}
            modal
            nested
          >
            {close => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> Choose Your Framework </div>
                <div className="content">
                <div ><span> <input type='checkbox'/>React </span>
                <span> <input type='checkbox'/>Angular </span></div>
                <div><span> <input type='checkbox'/>Django</span>
                <span> <input type='checkbox'/>Veu </span></div>
                </div>
                <div className="actions">
                  <Popup
                    trigger={<button className="button"> Trigger </button>}
                    position="top center"
                    nested
                  >
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                      magni omnis delectus nemo, maxime molestiae dolorem numquam
                      mollitia, voluptate ea, accusamus excepturi deleniti ratione
                      sapiente! Laudantium, aperiam doloribus. Odit, aut.
                    </span>
                  </Popup>
                  <button
                    className="button"
                    onClick={() => {
                      console.log('modal closed ');
                      close();
                    }}
                  >
                    close modal
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </p></div>
     </div>
</div>
</div>

)}
export default Detail;