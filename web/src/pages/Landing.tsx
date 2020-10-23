import React from 'react';

import '../styles/pages/landing.css';
import logoImg from '../images/logo.svg';
import {FiArrowRight} from 'react-icons/fi';

// Esse Import do Link serve para que quando vc clicar no botão para ir para uma outra página, não seja carregado um monte de arquivos como arquivos css, tsx, e um monte de outros arquivos. Ao Final no botão, ao invés de utilizar a tag <a href="/app">, utiliza-se o componente <Linl to="/app">, assim deixa mais leve e não tendo que carregar todos os arquivos novamente no site.
import {Link} from 'react-router-dom';

//Para colocar uma variável do JavaScript dentro do HTML, é só colocar as chaves ({}).

function Landing(){
    return(
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logoImg} alt="Happy"/>
            <main>
                <h1>Leve felicidade para o mundo</h1>
                <p>Visite orfanatos e mude o dia de muitas crianças</p>
            </main>
            <div className="location">
                <strong>Porto Ferreira</strong>
                <span>São Paulo</span>
            </div>
            <Link to="/app" className="enter-app">
                <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>
            </Link>
            </div>
        </div>
    );
}

export default Landing;