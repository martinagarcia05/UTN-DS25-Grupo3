import '../styles/HomePage.css';
import '../styles/VerSocios.css';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Header from '../components/Header';
import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal'; // 1. IMPORTAR MODAL

function VerSocios() {
    const sociosURL = 'http://localhost:3000/api/socios';
    const navigate = useNavigate();
    const [socios, setSocios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [notification, setNotification] = useState({ show: false, message: '', variant: '' });

    // 2. AÑADIR ESTADOS PARA EL MODAL DE CONFIRMACIÓN
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [socioIdToProcess, setSocioIdToProcess] = useState(null);

    useEffect(() => {
      if (notification.show) {
        const timer = setTimeout(() => {
          setNotification({ show: false, message: '', variant: '' });
        }, 3000);
        return () => clearTimeout(timer);
      }
    }, [notification]);

    useEffect(() => {
      const fetchSocios = async () => {
        try {
          const response = await fetch(sociosURL, { method: 'GET' });
          const data = await response.json();
          const sociosActivos = data.socios.filter(socio => socio.estado === 'ACTIVO');
          setSocios(sociosActivos);
        } catch (error) {
          console.error("Error al cargar los socios:", error);
          setNotification({ show: true, message: 'Error al cargar la lista de socios.', variant: 'danger' });
        } finally {
          setLoading(false);
        }
      };
      fetchSocios();
    }, []);

    const handleShowConfirmModal = (id) => {
      setSocioIdToProcess(id);
      setShowConfirmModal(true);
    };

    const handleCloseConfirmModal = () => {
      setSocioIdToProcess(null);
      setShowConfirmModal(false);
    };

    const handleConfirmBaja = async () => {
      if (!socioIdToProcess) return;

      try {
        const response = await fetch(`${sociosURL}/${socioIdToProcess}/estado`, { 
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ estado: 'INACTIVO' }),
        });

        if (response.ok) {
          setSocios(prevSocios => prevSocios.filter(socio => socio.id !== socioIdToProcess));
          setNotification({ show: true, message: 'El estado del socio se ha cambiado a Inactivo exitosamente.', variant: 'success' });
        } else {
          setNotification({ show: true, message: 'Error al dar de baja al socio. Por favor, inténtelo de nuevo.', variant: 'danger' });
        }
      } catch (error) {
        console.error("Error de red al intentar dar de baja:", error);
        setNotification({ show: true, message: 'Error de conexión. No se pudo completar la operación.', variant: 'danger' });
      } finally {
        handleCloseConfirmModal(); // Cierra el modal después de la operación
      }
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
        <div className="container mt-3">
          {notification.show && (
            <Alert variant={notification.variant} onClose={() => setNotification({ show: false, message: '', variant: '' })} dismissible>
              {notification.message}
            </Alert>
          )}
        </div>
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
                  {/* 6. EL BOTÓN AHORA MUESTRA EL MODAL */}
                  <Button variant="outline-danger" className='boton' onClick={() => handleShowConfirmModal(socio.id)}>
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

        {/* 7. AÑADIR EL COMPONENTE MODAL AL FINAL */}
        <Modal show={showConfirmModal} onHide={handleCloseConfirmModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Confirmar Baja</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            ¿Estás seguro de que deseas dar de baja a este socio? Su estado cambiará a 'Inactivo'.
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseConfirmModal}>
              Cancelar
            </Button>
            <Button variant="danger" onClick={handleConfirmBaja}>
              Confirmar Baja
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default VerSocios;
