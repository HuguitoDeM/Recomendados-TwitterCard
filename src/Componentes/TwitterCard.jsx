/* eslint-disable react/prop-types */
import { useState } from "react";
import {PopUpTwitter} from './PopUpTwitter.jsx'


export  function TwitterCard({usuario, nombre, siguiendo}){
    const [Isfollowing, setFollowing]= useState(siguiendo)
    const [IsUnfollowing, setUnFollowing]= useState("Siguiendo")
const [isMouseInside, setIsMouseInside]= useState(false)


    let text = Isfollowing ? IsUnfollowing : "Seguir" ; 
    
 let clasesBotton = Isfollowing ?  "TwitterCard-button Isfollowing": "TwitterCard-button"; 

let imagen= `https://unavatar.io/twitter/${usuario}`

function handleclick(){
setFollowing(!Isfollowing)
}
function handleEntermouse(){ 
        setUnFollowing("Dejar de seguir");
    
    }
function handleLeavemouse(){
    setUnFollowing("Siguiendo")
}    



    return(
 <>
 
<article className="TwitterCard" > 
<header className="TwitterCard-header"
          onMouseEnter={() => setIsMouseInside(true)}   
          onMouseLeave={() => setIsMouseInside(false)}
        >
          <img className="TwitterCard-img" src={imagen} alt="" />
          <div className="TwitterCard-div">
            <strong className="TwitterCard-div-h1">{nombre}</strong>
            <span className="TwitterCard-div-span">@{usuario}</span>
          </div>
          {isMouseInside && <PopUpTwitter usuario={usuario} nombre={nombre} img={imagen} siguiendo={clasesBotton} text={text} />}
        </header>
 <aside>
    <div className={clasesBotton} onClick={handleclick} onMouseLeave={handleLeavemouse} onMouseEnter={handleEntermouse}>{text}</div>
 </aside>
 
 
 </article>

 </>
 
 
     )
 }