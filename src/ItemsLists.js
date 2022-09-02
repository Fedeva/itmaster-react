import items from './items'

function Itemslists(){
   return(
    <div className='items'>

       {

         items.map(function(dato){
           return<div className='App-items' key={dato.P}>
           <img src={dato.img} alt='img'/>
           <p>{dato.P}</p> 
          </div>
         
          })
        }

          <div className="pagina">Ver mas productos</div>

      </div>

   )
}

export default Itemslists

