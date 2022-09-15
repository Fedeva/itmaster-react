import items from './items'
import {useState} from 'react'

function Itemslists() {

 var [page,setPage] = useState(0)
 var [email, setEmail] = useState()

  var pages = items

  function nextPage(){
    if(page === pages.length -1){
      return;
    }
      setPage(page + 1)
  }



  return (
    <>
  
  <input name='email' value={email} onInput={(e)=>setEmail(e.target.value)}/>
    
     
      <p>Mostrar paginas {page+1} de {pages.length}</p>

      <div className='items'>

        {

          pages[page].map(function (dato) {
            return <div className='App-items' key={dato.P}>
              <img src={dato.img} alt='img' />
              <p>{dato.P}</p>
            </div>

          })
        }
        <button onClick={()=>setPage(0)}>
          Primer pagina
        </button>

        <div className="pagina" onClick={nextPage}>
          Ver mas productos
        </div>

        <button onClick={()=>setPage(pages.length-1)}>
          Ultima pagina
        </button>

      </div>
      </>
  )
}

export default Itemslists

