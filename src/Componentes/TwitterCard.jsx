/* eslint-disable react/prop-types */
import { useState } from "react";
import {PopUpTwitter} from './PopUpTwitter.jsx'
export  function TwitterCard({usuario, nombre, siguiendo}){
    const [Isfollowing, setFollowing]= useState(siguiendo)
    const [IsUnfollowing, setUnFollowing]= useState("Siguiendo")

    let text = Isfollowing ? IsUnfollowing : "Seguir" ; 
    
 let clasesBotton = Isfollowing ?  "TwitterCard-button Isfollowing": "TwitterCard-button"; 



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
 <PopUpTwitter/>
<article className="TwitterCard" > 
    <header className="TwitterCard-header">
    <img className="TwitterCard-img" src={`https://unavatar.io/twitter/${usuario}`} alt="" />

 <div className="TwitterCard-div"><strong className="TwitterCard-div-h1">{nombre}</strong> 
 
 <span className="TwitterCard-div-span">@{usuario}</span></div>
 </header> 
 <aside>
    <div className={clasesBotton} onClick={handleclick} onMouseLeave={handleLeavemouse} onMouseEnter={handleEntermouse}>{text}</div>
 </aside>
 
 
 </article>

 </>
 
 
     )
 }