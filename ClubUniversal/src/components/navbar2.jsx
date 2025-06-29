import Nav from 'react-bootstrap/Nav';
import '../styles/Header.css';

function TabsExample() {
  return (
    <div id="barra" className='container-fluid'>
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <img src="../assets/logoUniversal.png" alt="" />
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/login">Iniciar sesion</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/registro'>Registrarse</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/'>
          Inicio
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
  );
}

export default TabsExample;