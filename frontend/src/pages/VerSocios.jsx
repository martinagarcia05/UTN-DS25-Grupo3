import '../styles/HomePage.css';
import '../styles/VerSocios.css';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Header from '../components/Header';
import ListGroup from 'react-bootstrap/ListGroup';

function VerSocios() {
    const sociosURL = 'http://localhost:3000/api/socios';
    const navigate = useNavigate();
    const [socios, setSocios] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchSocios = async () => {
        try {
          const response = await fetch(sociosURL, { method: 'GET' });
          const data = await response.json();
          //se muestran solo los socios activos por defecto
          const sociosActivos = data.socios.filter(socio => socio.estado === 'ACTIVO');
          setSocios(sociosActivos);
        } catch (error) {
          console.error("Error al cargar los socios:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchSocios();
    }, []);

    const handleDarDeBaja = (id) => {
      const validacion = window.confirm("¿Estás seguro de que deseas dar de baja a este socio? Su estado cambiará a 'Inactivo'.");
      if (!validacion) return;

      const fetchBajaLogica = async () => {
        try {
          const response = await fetch(`${sociosURL}/${id}/estado`, { 
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            //se cambia el estado
            body: JSON.stringify({ estado: 'INACTIVO' }),
          });

          if (response.ok) {
            //si se cambio el estado a inactivo, lo saco de la lista visible
            setSocios(prevSocios => prevSocios.filter(socio => socio.id !== id));
            alert("El estado del socio se ha cambiado a 'Inactivo' exitosamente.");
          } else {
            const errorData = await response.json();
            alert(`Error al dar de baja: ${errorData.message || 'Error desconocido'}`);
          }
        } catch (error) {
          console.error("Error de red al intentar dar de baja:", error);
          alert("Error de conexión. No se pudo completar la operación.");
        }
      };
      
      fetchBajaLogica();
    };

    const verSusCuotas = (id) => {
      navigate(`/cuotas-admin`, { state: { defId: id } });
    };

    if (loading) {
      return (
        <>
          <Header />
          <h1 className="text-center mt-5">Cargando socios...</h1>
        </>
      );
    }

    return (
      <>
        <Header />
        <br />
        <ListGroup as="ul" id='lista'>
          {socios.length > 0 ? (
            socios.map(socio => (
              <ListGroup.Item as="li" key={socio.id} id='itemSocio' className="d-flex justify-content-between align-items-center">
                <p className="mb-0">{socio.nombre} {socio.apellido}</p>
                <div>
                  <Button variant="outline-success" className='boton' onClick={() => verSusCuotas(socio.id)}>
                    Ver cuotas
                  </Button>
                  <Button variant="outline-danger" className='boton' onClick={() => handleDarDeBaja(socio.id)}>
                    Dar de Baja
                  </Button>
                </div>
              </ListGroup.Item>
            ))
          ) : (
            <h3 className="text-center text-muted">No hay socios activos para mostrar.</h3>
          )}
        </ListGroup>
        <br />
      </>
    );
}

export default VerSocios;
