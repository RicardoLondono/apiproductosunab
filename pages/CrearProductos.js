import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import CrearProductoFormulario from '../components/CrearProductoFormulario';
import { CREARPRODUCTOS_POST_ENDPOINT } from '../css/connections/endpoints';


function CrearProductos() {

  const navegar = useNavigate()

  const crear= (producto)=>{
    axios.post(CREARPRODUCTOS_POST_ENDPOINT, producto)
    .then(response=>{
      console.log(response.data)
      navegar('/')
    })
    .catch(err=>{
      console.error(err)
    })
  }

  return (
    <Container>
      <h1>Crear Productos</h1>
      <Row>
        <CrearProductoFormulario callback={crear}/>
      </Row>
    </Container>
  );
}

export default CrearProductos;