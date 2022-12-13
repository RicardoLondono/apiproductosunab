import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/App.css';
import ProductosCreados from '../pages/ProductosCreados';
import Navegacion from '../layouts/Navegacion';
import CrearProductos from '../pages/CrearProductos';
import ProductoDetalle from '../pages/ProductoDetalle';

function App() {
  return (
    <BrowserRouter>
    <Navegacion/>
      <Routes>
        <Route path='/' element={<ProductosCreados/>}/>
        <Route path='/crearproductos' element={<CrearProductos/>}/>
        <Route path='/producto/:id' element={<ProductoDetalle/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
