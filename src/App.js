import Nav from "./component/Navbar"
import Foot from "./component/Footer"
import './App.css';
import {useState} from 'react';

function App() {
  
  const [hey, setHey] = useState(false)
 
 

  return (
    <div> 
     <div className={hey ? "hola" :" hole"}><h1>salut</h1></div>
     <div className="test">
      <button onClick ={()=>setHey(!hey)}>true</button>
      
     </div>
     <div className="main">
     
     </div>
     
    </div>
  
  );
}

export default App;
