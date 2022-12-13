import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CrearProductoFormulario({callback}) {

  const [titulo, setTitulo] = useState('')
  const [imagen, setImagen] = useState('')
  const [precio, setPrecio] = useState('')
  const [categoria, setCategoria] = useState('')
  const [descripcion, setDescripcion] = useState('')

  const enviarFormulario = (e)=>{
    e.preventDefault()
    callback(titulo, imagen, precio, categoria, descripcion)

  }

  return (
    <Form onSubmit={enviarFormulario}>
        <Form.Group className="mb-3" controlId="titulo">
        <Form.Label>Titulo</Form.Label>
        <Form.Control type="text" placeholder="ingrese el titulo del producto"  required
        value={titulo} onChange={e=> setTitulo(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="imagen">
        <Form.Label>Imagen</Form.Label>
        <Form.Control type="url" placeholder="ingrese la url de la imagen del producto"  required
        value={imagen} onChange={e=> setImagen(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="precio">
        <Form.Label>Precio</Form.Label>
        <Form.Control type="number" placeholder="ingrese el precio del producto"  required
        value={precio} onChange={e=> setPrecio(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="categoria">
        <Form.Label>Categoria</Form.Label>
        <Form.Control as='select' type="select" required
          value={categoria} onChange={e=> setCategoria(e.target.value)}>
            <option value=''>Seleccione</option>
            <option value='1'>Tecnologia</option>
            <option value='2'>Moda</option>
        </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="descripcion">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="ingrese una descripcion del producto"  required
        value={descripcion} onChange={e=> setDescripcion(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Crear Producto
      </Button>
    </Form>
  );
}

export default CrearProductoFormulario;