import React, { useEffect, useState } from 'react';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import { Link } from 'react-router-dom';
import mapMarkerImg from '../../images/map-marker.svg';

import './styles.css';
import mapIcon from '../../utils/mapIcon';
import api from '../../services/api';

interface OrphanagesProps {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}
const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<OrphanagesProps[]>([]);

  useEffect(() => {
    api.get('orphanages').then((response) => {
      setOrphanages(response.data);
    });
  }, []);

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />
          <h2>Escolha um orfatanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Ribeirão Preto</strong>
          <p>São Paulo</p>
        </footer>
      </aside>

      <Map
        center={[-21.1681121, -47.8328526]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        {/** url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.APP_MAP_TOKEN}`} */}
        <TileLayer url="https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoianVsaW92aWVjZWxpIiwiYSI6ImNrZzZ2dzViZjAxZ3EyeW16NGN1OWhpdnMifQ.PbwtqzryWz3w6F4RUwyeBw" />

        {orphanages.map((orphanage) => (
          <Marker
            position={[orphanage.latitude, orphanage.longitude]}
            icon={mapIcon}
            key={orphanage.id}
          >
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              {orphanage.name}
              <Link to={`/orphanages/${orphanage.id}`}>
                <FiArrowRight size={20} color="#fff" />
              </Link>
            </Popup>
          </Marker>
        ))}
      </Map>
      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
};

export default OrphanagesMap;
