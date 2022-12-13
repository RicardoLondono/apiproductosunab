import Card from 'react-bootstrap/Card';

function ProductoCard({producto}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.imagen} />
      <Card.Body>
        <Card.Title>{producto.titulo}</Card.Title>
        <Card.Text>${producto.precio}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductoCard;