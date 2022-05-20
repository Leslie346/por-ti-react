import React from 'react';
import './App.css';
import './Titulo.css';
import './Receta.css';
import './Detalle.css';
import Titulo from './components/Titulo';
import Head from './components/Head';
import Detalle from './components/Detalle';
import Recetas from './components/Recetas-cont';

function App() {
  return (
    <div className="App">
      <div className='Section-list'>
      <head>
        <Head />
      </head>
   <Titulo />
   <p className="App-p">Te compartimos algunas recetas que pueden ayudarte a mejorar tu salud.</p>
   <Recetas />
   </div>
   <div className='Section-detail'>
   <Detalle />
   </div>
   </div>
  );
}

export default App;
