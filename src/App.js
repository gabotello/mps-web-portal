import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap"
import SingInUp from "./page/SingInUp/";
import { ToastContainer} from "react-toastify"

function App() {

  //const [user, setUser] = useState( {"name" : "Gregory"}); // cuando tiene un objecto llamado gregory devuelve null
  // const [user, setUser] = useState(null); 
  const [user, setUser] = useState({name : "Gregory"}); 

  //  return ( <div> {user ? <h1> Estas Logueado </h1> : <h1>No estas logueado</h1> } </div> );

  return ( 
  <div> 
    {user ? (
      <div>
        <SingInUp/>
        </div>
  )   : (
      <h1>No estas logueado</h1> 
  )} 
  <ToastContainer
  position="top-right"
  autoClose={5000}
  hideProgressBar
  newestOnTop={false}
  closeOnClick
  rtl={false}  
  draggable
  pauseOnHover
  pauseOnVisibilityChange
  />
  </div> 
  );

}

export default App;




