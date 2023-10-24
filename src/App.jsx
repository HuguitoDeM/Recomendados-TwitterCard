import {TwitterCard} from './Componentes/TwitterCard'
import './stiles.css'
export function App(){
return(
  <div className='App'> 
   
   <TwitterCard nombre="Hugo desiderio" usuario="HuguitoDeM" siguiendo/>
  <TwitterCard nombre="Maxi de la rosa " usuario="TheRealVodkaAKA" siguiendo={false}/>

  <TwitterCard usuario="purodesasa" nombre="Yara" siguiendo={false}/>
  </div>
       
    

)
}