import './App.css';
import { useState } from 'react'
import google from './img/google.png'
import hamburger from './img/hamburger.png'
import items from './items'
import NavBar from './NavBar';


function Home() {



  var [search, setSearch] = useState('')
  var [results, setResults] = useState([])

  var options = [
    'electrodomesticos', 'instrumentos musicales', 'moda', 'deporte', 'computacion'
  ]


  function getOptions(e) {

    if (e.target.value.length === 0) {
      setSearch(e.target.value)
      setResults([])
      return
    }

    setSearch(e.target.value)

    var resultado = options.filter(function (options) {
      return options.startsWith(e.target.value)
    })
    setResults(resultado)
  }



  var [page, setPage] = useState(0)

  var pages = items

  function nextPage() {
    if (page === pages.length - 1) {
      return;
    }
    setPage(page + 1)
  }




  return (
    <>
      <div className='first-nav'>
        <a href="#footer"> Sign in</a> or
        <a href="#footer"> Create an account</a>
         
        <div className='search'>
          <p>Mostrando resultado de busqueda para {search}</p>
          <input name='email' value={search} onInput={(e) => getOptions(e)} />
          <div>
            {
              results.map((results, i) => {
                return <div key={i}>{results}</div>
              })
            }
          </div>
        </div>
         <NavBar />
       
      </div>

      <div className='second-nav'>
        <img className="logo" src={google} alt=" logo" />

        <div className="mini-menu">

          <div className="hamburgesa">
            <img src={hamburger} alt="" />
          </div>

          <div className="menu"></div>


        </div>


      </div>
      <div className='banner'>
        <div className="overlay">
          <h1>Lorem Ipsum</h1>
          <button>Learn More</button>
        </div>
      </div>


      <p>Mostrar paginas {page + 1} de {pages.length}</p>

      <div className='items'>

        {

          pages[page].map(function (dato) {
            return <div className='App-items' key={dato.P}>
              <img src={dato.img} alt='img' />
              <p>{dato.P}</p>
            </div>

          })
        }
        <button onClick={() => setPage(0)}>
          Primer pagina
        </button>

        <div className="pagina" onClick={nextPage}>
          Ver mas productos
        </div>

        <button onClick={() => setPage(pages.length - 1)}>
          Ultima pagina
        </button>

      </div>

      <div className="footer">

        <p>Suscribirte al newsletter</p>

        <form action="" metod="post">
          <input type="text" />
          <button>Enviar</button>
        </form>
      </div>

      <div className="cookie">
        En este sitio utilizamos cookies para mejorar el servicio.
        <a href="#">Aceptar</a>

      </div>


    </>

  )
}

export default Home;
