import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Divider from '@mui/material/Divider';
import Header from '../components/Header';
import '../styles/Contacto.css';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


import '../styles/HomePage.css';

function Contacto() {
  return (
    <>
    <Header></Header>
    <Divider sx={{ margin: '20px 0' }} />
    <div>
    
    

<div style={{ width: "100%", height: "400px", justifyContent: "center", display: "flex" }}>
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{ display: "flex", alignItems: "center" }}>
            <AddLocationAltIcon />Encontranos
          </Typography>
        </CardContent>
      <CardActionArea>
       <iframe 
        title='Mapa Club Universal'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.831111884651!2d-57.96506657563219!3d-34.93577237510814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e87e3ba5fa4f%3A0x985b898e98e583d3!2sAsociaci%C3%B3n%20Cultural%20y%20Deportiva%20Universal!5e0!3m2!1ses!2sar!4v1756912101971!5m2!1ses!2sar"
        width="600" 
        height="450" 
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">

      </iframe>
        
      </CardActionArea>
    </Card>
</div>
<Divider sx={{ margin: '20px 0' }} />
<div className="contacto-container" id='redes'>
      <p>
        <InstagramIcon /> <a href='https://share.google/aOjoodw0n41FFuXM3'>Seguinos en Instagram</a>
      </p>
      <p>
        <FacebookIcon /> <a href='https://www.facebook.com/ACyDUniversal/?locale=es_LA'>Seguinos en Facebook</a>
      </p>
    </div>
</div>
    </>
  );
}

export default Contacto;
