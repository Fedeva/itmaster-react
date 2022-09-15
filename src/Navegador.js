import {useState} from 'react'

function Navegador(){

  var [search, setSearch] = useState('')
  var [results, setResults] = useState([])

  var options =[
    'electrodomesticos', 'instrumentos musicales', 'moda','deporte','computacion'
  ]
   
  function getOptions(e){
      
    if(e.target.value.length === 0) {
      setSearch(e.target.value)
      setResults([])
      return 
    }

    setSearch(e.target.value)

   var resultado = options.filter(function (options){
     return options.startsWith(e.target.value)
    })
    setResults(resultado)
  }

    return(
        <div className='first-nav'>
        <a href="#footer"> Sign in</a> or
        <a href="#footer"> Create an account</a>
      
         <div className='search'>
           <p>Mostrando resultado de busqueda para {search}</p>
           <input name='email' value={search} onInput={(e)=>getOptions(e)}/>
         <div>
          {
            results.map((results,i) => {
              return <div key={i}>{results}</div>
            })
          }
          </div>
         </div>
      
      </div>
    )
}

export default Navegador;