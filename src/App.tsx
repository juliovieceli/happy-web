import React from 'react';
import 'dotenv/config';
import Routes from './routes';

import 'leaflet/dist/leaflet.css';
import './styles/global.css';

const App: React.FC = () => {
  return <Routes />;
};

export default App;
