import '../styles/HomePage.css';
import '../styles/VerSocios.css';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Header from '../components/Header';
import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert';
import Modal from 'react-bootstrap/Modal';
// 1. IMPORTAR COMPONENTES PARA EL BUSCADOR
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function VerSocios() {
    const sociosURL = 'http://localhost:3000/api/socios';
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [notification, setNotification] = useState({ show: false, message: '', variant: '' });
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [socioIdToProcess, setSocioIdToProcess] = useState(null);

    // 2. AÑADIR ESTADOS PARA LA BÚSQUEDA
    const [masterSociosList, setMasterSociosList] = useState([]); // Lista completa de socios
    const [sociosFiltrados, setSociosFiltrados] = useState([]); // Lista que se muestra en pantalla
    const [dniBusqueda, setDniBusqueda] = useState(''); // El texto del campo de búsqueda

    useEffect(() => {
      if (notification.show) {
        const timer = setTimeout(() => {
          setNotification({ show: false, message: '', variant: '' });
        }, 3000);
        return () => clearTimeout(timer);
      }
    }, [notification]);

    // 3. EFECTO PARA CARGAR LA LISTA INICIAL
    useEffect(() => {
      const fetchSocios = async () => {
        try {
          const response = await fetch(sociosURL, { method: 'GET' });
          const data = await response.json();
          const sociosActivos = (data?.socios || []).filter(socio => socio.estado === 'ACTIVO');
          setMasterSociosList(sociosActivos);
          setSociosFiltrados(sociosActivos); // Inicialmente, la lista filtrada es igual a la completa
        } catch (error) {
          console.error("Error al cargar los socios:", error);
          setNotification({ show: true, message: 'Error al cargar la lista de socios.', variant: 'danger' });
        } finally {
          setLoading(false);
        }
      };
      fetchSocios();
    }, []);

    // 4. EFECTO PARA FILTRAR LA LISTA CUANDO CAMBIA LA BÚSQUEDA
    useEffect(() => {
      const resultado = masterSociosList.filter(socio =>
        socio.dni.toString().includes(dniBusqueda)
      );
      setSociosFiltrados(resultado);
    }, [dniBusqueda, masterSociosList]);


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
          // Actualizamos ambas listas para mantener la consistencia
          setMasterSociosList(prev => prev.filter(socio => socio.id !== socioIdToProcess));
          setNotification({ show: true, message: 'El estado del socio se ha cambiado a Inactivo exitosamente.', variant: 'success' });
        } else {
          setNotification({ show: true, message: 'Error al dar de baja al socio. Por favor, inténtelo de nuevo.', variant: 'danger' });
        }
      } catch (error) {
        console.error("Error de red al intentar dar de baja:", error);
        setNotification({ show: true, message: 'Error de conexión. No se pudo completar la operación.', variant: 'danger' });
      } finally {
        handleCloseConfirmModal();
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
        
        <div className="container mt-4">
          <div className="p-4 border rounded bg-light shadow-sm">
            <h2 className="mb-4">Listado de Socios Activos</h2>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Buscar socio por DNI..."
                aria-label="DNI del socio"
                value={dniBusqueda}
                onChange={(e) => setDniBusqueda(e.target.value)}
              />
              <Button variant="outline-secondary" onClick={() => setDniBusqueda('')}>Limpiar</Button>
            </InputGroup>

            <ListGroup as="ul" id='lista'>
              {sociosFiltrados.length > 0 ? (
                sociosFiltrados.map(socio => (
                  <ListGroup.Item as="li" key={socio.id} id='itemSocio' className="d-flex justify-content-between align-items-center">
                    <p className="mb-0">{socio.nombre} {socio.apellido} - <strong>DNI:</strong> {socio.dni}</p>
                    <div>
                      <Button variant="outline-success" className='boton' onClick={() => verSusCuotas(socio.id)}>
                        Ver cuotas
                      </Button>
                      <Button variant="outline-danger" className='boton' onClick={() => handleShowConfirmModal(socio.id)}>
                        Dar de Baja
                      </Button>
                    </div>
                  </ListGroup.Item>
                ))
              ) : (
                <div className="text-center p-4 text-muted">
                  <h5>{dniBusqueda ? 'No se encontraron socios con ese DNI.' : 'No hay socios activos para mostrar.'}</h5>
                </div>
              )}
            </ListGroup>
          </div>
        </div>
        <br />

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
