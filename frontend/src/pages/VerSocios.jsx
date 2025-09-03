import '../styles/HomePage.css';
import '../styles/VerSocios.css';
import Accordion from 'react-bootstrap/Accordion';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Header from '../components/Header';
import ListGroup from 'react-bootstrap/ListGroup';
import CuotasAdminPage from './CuotasAdminPage';
import { useNavigate } from 'react-router-dom';

function VerSocios() {
  //ver socios:nom,apell,ver cuotas:(filtrador de tomi), dar de baja
    const todosURL = 'http://localhost:3000/api/socios'
    const navigate = useNavigate();
    const bajaURL = ''
    const [socios, setSocios] = useState([]);
    useEffect(() => {
      const fetchSocios = async () => {
        const response = await fetch('http://localhost:3000/api/socios', { method: 'GET' });
        const data = await response.json();
        setSocios(data.socios); 
      };
      fetchSocios();
    }, []);

    const handleDarDeBaja = (id) => {
      const validacion = window.confirm("¿Estás seguro de que deseas dar de baja a este socio?");
      if (!validacion) return;
      const fetchBaja = async () => {
        const response = await fetch(`${bajaURL}/${id}`, { method: 'DELETE' });
        if (response.ok) {
          setSocios(prevSocios => prevSocios.filter(socio => socio.id !== id));
          alert("Socio eliminado exitosamente.");
        }
      };
      fetchBaja();
    };

    const verSusCuotas = (id) => {
      navigate(`/cuotas-admin`, { state: { defId: id } });
    };

    if (socios.length === 0) {
    return <h1>Cargando socios...</h1>;
  }
  return (
    <>
    <Header></Header>
     
      <br />
      {socios.map (socio => 

        <ListGroup as="ul" id='lista' >
          <ListGroup.Item as="li" id='itemSocio'>
            <p>{socio.nombre} {socio.apellido}</p>
            <p><Button variant="outline-success" className='boton' onClick={() => verSusCuotas(socio.id)}> Ver cuotas
              {/* <Link to={`/cuotas-admin`} >Ver cuotas</Link> */}
            </Button>
          <Button variant="outline-success" className='boton' onClick={() => handleDarDeBaja(socio.id)}>
            Dar de Baja
          </Button></p>
          </ListGroup.Item>
        </ListGroup>
        
      )}
      <br />
    </>
  );
}

export default VerSocios;
