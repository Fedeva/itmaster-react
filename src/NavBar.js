import {Link} from 'react-router-dom'

function NavBar(){
    return(
      <div className='NavBar'>
        <Link to='/'>Home</Link>
       
       <Link to='/Contacto'>Contacto</Link>
       
       <Link to='/Reproductor'>Musica</Link>
      </div>
    )
}

export default  NavBar;