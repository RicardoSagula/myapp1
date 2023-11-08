import logo from './logo.svg';
import React from 'react';
import DetalleDeProducto from './Componentes/DetalleDeProducto';

function App() {
  const DatosProducto=
 
  const name: "Nombre del Producto";
  description: "Descripción del Producto";
  price: 100.0;
  sku: "SKU123456";
  quantity: 10;
  
  return (
    <div className="App">
      <h1>Detalle del Producto</h1>     
      <DetalleDeProducto={DatosProducto} />
      
    </div>
  );
}

export default App;
