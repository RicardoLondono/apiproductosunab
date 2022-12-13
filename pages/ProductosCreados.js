import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { PRODUCTOSCREADOS_GET_ENDPOINT } from '../css/connections/endpoints';
import { useEffect, useState } from 'react';
import ProductoCard from '../components/ProductoCard';

function ProductosCreados() {

    const [productos, setProductos] = useState([])

    useEffect(()=>{
        axios.get(PRODUCTOSCREADOS_GET_ENDPOINT)
        .then((response)=>{
            setProductos(response.data)
        })
        .catch(err=>{
            console.error(err)
        })
    }, [])



  return (
    <Container>
      <Row>
            <h1>Productos Creados</h1>
            {productos.map(producto=> <ProductoCard key={producto.idProducto} producto={producto}/>)}
        </Row>
    </Container>
  );
}

export default ProductosCreados;