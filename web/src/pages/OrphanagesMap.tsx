import React from 'react';

// Esse Import do Link serve para que quando vc clicar no botão para ir para uma outra página, não seja carregado um monte de arquivos como arquivos css, tsx, e um monte de outros arquivos. Ao Final no botão, ao invés de utilizar a tag <a href="/app">, utiliza-se o componente <Linl to="/app">, assim deixa mais leve e não tendo que carregar todos os arquivos novamente no site.

import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import {Map, TileLayer} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />

                    <h2>Escolha um orfanto no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita</p>
                </header>
                <footer>
                    <strong>Porto Ferreira</strong>
                    <h4>São Paulo</h4>
                </footer>
            </aside>
            <Map
                center={[-21.8659105,-47.4784653]}
                zoom={15}
                style={{width: '100%', height: '100%'}}
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                {/*<TileLayer url={'https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}'}/>*/}
                <TileLayer url="https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGJvcnRvbHVjY2kiLCJhIjoiY2tnYnJkNXJ1MGpzOTJ0bDRzdm1sdDlwdCJ9.7PPLABjRteoFoiyEDoHhXQ"/>
            </Map>
            <Link to="" className="create-orphanage">
                <FiPlus size="{32}" color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;