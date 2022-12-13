import axios from "axios"
import { useEffect, useState } from "react"
import { Card, Container, Row } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import { PRODUCTODETALLE_GET_ENDPOINT } from '../css/connections/endpoints';
import EliminarProductoBoton from "./EliminarProductoBoton";

const ProductoDetalle= ()=>{

    const [producto, setProducto] = useState([])
    const {id} = useParams()
    const navegar = useNavigate()

    useEffect(()=>{
        axios.get(`${PRODUCTODETALLE_GET_ENDPOINT}/${id}`)
        .then(response=>{
            setProducto(response.data)
        }).catch(err=>{
            navegar(-1)
        })
    }, [id, navegar])

    return(
        <Container className='mt-3 mb-3'>
            <Row className='justify-content-md-center'>
                <h1>Detalles del Producto</h1>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={producto.imagen} />
                    <Card.Body>
                        <Card.Title>{producto.titulo}</Card.Title>
                        <Card.Text>${producto.precio}</Card.Text>
                        <Card.Text>{producto.categoria}</Card.Text>
                        <Card.Text>{producto.descripcion}</Card.Text>
                        <EliminarProductoBoton id={producto.idProducto} titulo={producto.titulo}/>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )

}

export default ProductoDetalle