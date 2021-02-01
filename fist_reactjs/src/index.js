import React from 'react';
import ReactDOM from 'react-dom';
import './scss/app.scss'
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
const nombre = 'Omar';
const sesion  =  true;
const pixeles = '60px'
const pais = undefined;
const JSX = (
  <>
  {sesion === true ? 
    <> 
      <h1 className="titulo" style={{color:'red', fontSize:pixeles}}>Hola {nombre}</h1>
      <p>Interactuando con jsx en react</p>
      {/* Si la variable pais está vacia, no imprime el fracmento de codigo JSX*/}
      {pais && <p>Tu eres de: {pais}</p>}
    </>
    :
    <p>NO Has iniciado sesion</p>}
  </>
  )

// const verificarsesion = (sesion) => {
//   if(sesion === true) {
//     return JSX;
//   } else {
//     return <h1>No has iniciado sesion</h1>
//   }
// }


// ReactDOM.render(
//     verificarsesion(sesion)
//   ,
//   document.getElementById('root')
// );

ReactDOM.render(
 JSX
,
document.getElementById('root')
);
