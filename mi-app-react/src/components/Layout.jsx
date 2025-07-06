import 'bootstrap/dist/css/bootstrap.min.css';
import fondo from '../assets/fondo.jpg';
import Header from './Header';

function Layout({ children, withBackground = false }) {
  if (withBackground) {
    return (
      <div 
        style={{
          backgroundImage: `url(${fondo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          width: '100%',
          margin: 0,
          padding: 0
        }}
      >
        <Header />
        {children}
      </div>
    );
  }
  
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
