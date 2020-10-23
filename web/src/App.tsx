import React from 'react';
import './styles/global.css';

import Routes from './routes';

//A Interface serve para definir o formato de um objeto, serve para a tipagem de dados, deixar ele mais padronizado ou organizado, por isso utiliza-se o TypeScript ao invés do JavaScript

interface TitleProps{ //Sempre que vc for utilizar uma interface, como no exemplo, vc deve colocar ela na propiedade da function, como no exemplo abaixo, com isso, será puxado, será linkado a interface e o que está dentro dela, como o text dizendo que é uma string.
  text: string;
}

function Title(props: TitleProps){ // Isso veio da Interface, que com isso será linkado o que está configurado/definido pela interface, que o texto que é uma propiedade do title é um tipo de dado string
  return(
    <h1>{props.text}</h1>
  )
}

//JSX - JavaScript XML
//Componente = é uma função("function") que retorna(return) um HTML, igual ao exemplo abaixo.
//Propiedades = São os "Atributos", parecido com o que com o HTML, só que dentro dos Componentes, como no Title, por exemplo,

function App() {
  return (
    /*<div id="page-landing">
      <h1>Hello World!</h1>
    </div>
    /*<div className="App">
      <Title text="Titulo 1" />
      <Title text="Titulo 2" />
    </div>*/
    <Routes/>
  );
}

export default App;
