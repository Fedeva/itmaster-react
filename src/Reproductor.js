import Temas from './Temas'
import kill from './img/kill.jpg'
import {useState} from 'react'

function Reproductor (){

  var [tema, setTema] = useState(0)
  

  function nextTema(){
    if( tema === Temas.length -1){
        return;
    }
        setTema(tema + 1)
    }

    function backTema(){
        if( tema === Temas.length -8){
            return;
        }
        setTema(tema - 1)
    } 
 
    function playTema(){
   
    }
   
  

    return(
        <>
    <div className='repo'>
    <img src={kill}alt='img'/>

    {
        Temas[tema].map(function(dato){
         return <div className='App-repo' key={dato.p}> 
              <p>{dato.item}</p>
              </div>
        })
     }

   <button onClick={backTema}>
        Anterior
     </button>

     <button onClick={playTema}>
        Play
    </button>

    <button onClick={nextTema}>
        Siguiente
    </button>
    
    </div>
      


   

        </>

    )
}

export default Reproductor;
