import google from './img/google.png'
import hamburger from './img/hamburger.png'

function SegundoNavegador(){
    return(
<div className='second-nav'>
        <img className="logo" src={google} alt=" logo" />

        <div className="mini-menu">

          <div className="hamburgesa">
            <img src={hamburger} alt="" />
          </div>

          <div className="menu"></div>

        </div>
      </div>
    )
}

export default SegundoNavegador;