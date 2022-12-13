import axios from "axios"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import {ELIMINARPRODUCTOBOTON_DELETE_ENDPOINT} from '../css/connections/endpoints'

const EliminarProductoBoton= ({id, titulo})=>{

    const navegar = useNavigate()

    const eliminar= async ()=>{
        axios.delete(`${ELIMINARPRODUCTOBOTON_DELETE_ENDPOINT}/${id}`)
        .then(response=>{
            navegar('/')
        }).catch(err=>{
            console.error(err)
        })
    }

    const crearAlerta= ()=>{
        const tituloProducto = `Eliminar producto \n ¿Desea eliminar el producto? ${titulo}?`
        return (window.confirm(tituloProducto) === true) ? eliminar() : ()=>{}
    }

    return(
        <Button variant='danger' size="sm" onClick={crearAlerta}>
            Eliminar
        </Button>
    )

}

export default EliminarProductoBoton