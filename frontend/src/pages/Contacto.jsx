import * as React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Divider from '@mui/material/Divider';
import Header from '../components/Header';

import '../styles/HomePage.css';

function Contacto() {
  return (
    <>
    <Header></Header>
    <Divider sx={{ margin: '20px 0' }} />
    <div className="contacto-container">
      <p><InstagramIcon /> <a href='https://share.google/aOjoodw0n41FFuXM3'>Seguinos en Instagram</a></p>
      <p><FacebookIcon /> <a href='https://www.facebook.com/ACyDUniversal/?locale=es_LA'>Seguinos en Facebook</a></p>
    </div>
    <Divider sx={{ margin: '20px 0' }} />
    <div>
        <p>Mapa</p>
    </div>
    </>
  );
}

export default Contacto;
