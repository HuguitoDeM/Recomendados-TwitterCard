// eslint-disable-next-line react/prop-types
export function PopUpTwitter({usuario,nombre,img,siguiendo,text}){


return(

<header>
<div className="TwitterCard-div">
    <img className="TwitterCard-img" src={img} alt="" />
    <strong className="TwitterCard-div-h1" >{nombre}</strong>
    <span className="TwitterCard-div-span">{usuario}</span>
</div>
<button className={siguiendo}>{text}</button>
</header>
)

}