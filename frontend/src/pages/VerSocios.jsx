import '../styles/HomePage.css';
import Accordion from 'react-bootstrap/Accordion';
import React,  { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

async function VerSocios() {
  //ver socios:nom,apell,ver cuotas:(filtrador de tomi), dar de baja
    const todosURL = ''
    const bajaURL = ''
    const [socios, setSocios] = useState([]);
    useEffect(() => {
      const fetchSocios = async () => {
        const response = await fetch(`${todosURL}`);
        const data = await response.json();
        setSocios(data);
      };
      fetchSocios();
    }, []);

    const handleDarDeBaja = (id) => {
      const validacion = alert("¿Estás seguro de que deseas dar de baja a este socio?");
      if (!validacion) return;
      const fetchBaja = async () => {
        const response = await fetch(`${bajaURL}/${id}`, { method: 'DELETE' });
        if (response.ok) {
          setSocios(socios.filter(socio => socio.id !== id));
          alert("Socio eliminado exitosamente.");
        }
      };
      fetchBaja();
    };

    if (socios.length === 0) {
    return <h1>Cargando socios...</h1>;
  }
  return (
    <>
     <Accordion defaultActiveKey="0" flush>
      <h1>Lista de socios</h1>
      {socios.map (socio => 
      <Accordion.Item eventKey={socio.id} key={socio.id}>
        <Accordion.Header className="titulo"> {socio.nombre} {socio.apellido} -
          
          <Button variant="outline-success"><Link to={`/rutacuotasdelsocio`}>Ver cuotas</Link></Button>
          <Button variant="outline-success" onClick={() => handleDarDeBaja(socio.id)}>Dar de Baja</Button>
        </Accordion.Header>
        <Accordion.Body>
           <h4>Descripción:</h4>
          <p>{book.descripcion}</p>
          <br />
        </Accordion.Body>
      </Accordion.Item>
      )}
      
    </Accordion>

    </>
  );
}

export default VerSocios;
