import React from 'react';
import DetalleDeProducto from './components/DetalleDeProducto';

function ProductPage() {
  return (
    <div>
      <h1>Página de detalle de productos</h1>
      <DetalleDeProducto
        name="Nombre del producto"
        description="Descripción del producto"
        price="$99.99"
        sku="12345"
        quantity="10"
      />
    </div>
  );
}

export default ProductPage;
