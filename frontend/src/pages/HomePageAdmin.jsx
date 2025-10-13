import '../styles/HomePage.css';
import { Row, Col, Button } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';
import Header from '../components/Header';

function HomePageAdmin() {
  const opciones = [
    { texto: 'Cuotas', ruta: '/cuotas-admin' },
    { texto: 'Reserva Canchas', ruta: '/canchas' },
    { texto: 'Eventos', ruta: '/eventos' },
    { texto: 'Actividades', ruta: '/actividades' },
    { texto: 'Administrativos', ruta: '/administrativos' }, 
    { texto: 'Socios', ruta: '/socios'},
    { texto: 'Profesores', ruta: '/profesores' },
    { texto: 'Canchas' , ruta: '/gestionCanchas' }
  ];

  return (
    <div>
      <Header></Header>
      <div className="home-triangle"></div>

      <div className="home-container">
        <h3 className="home-title" style={{color: 'red'}}>Home</h3>

        <Row className="g-3">
          {opciones.map(opcion => (
            <Col key={opcion.texto} xs={12}>
              <div className="home-card">
                <strong>{opcion.texto}</strong>
                <Button variant="dark" className="rounded-circle" href={opcion.ruta}>
                  <ArrowRight size={20} />
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default HomePageAdmin;
