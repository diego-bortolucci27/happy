import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Método Render = Recebe tags html e componentes
//Componentes = é uma função("function") que retorna(return) um HTML

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);