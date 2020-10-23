import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// O Switch serve para que seja chamada apenas uma rota por vez

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

// A Propiedade exact serve para não causar conflito com o endereço da página
function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OrphanagesMap} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;