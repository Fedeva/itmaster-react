import { 
  BrowserRouter as Router , Routes,
  Route,
} from "react-router-dom"
import Home from './Home'
import Contact from './Contact'
import NotFound from "./404";
import Reproductor from "./Reproductor";


function App() {

    return (
      <Router>
            <Routes>
                  <Route path="/"  exact element={<Home />} />
             

                 <Route path="/Contacto"element={<Contact/>} />

                 <Route path="/Reproductor" element={<Reproductor/>}/>

              
                 <Route path="*" element={<NotFound/>}/>

             
              </Routes>  
      </Router>
    );
}

export default App;
