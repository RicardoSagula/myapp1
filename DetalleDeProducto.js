import React from 'react';

function DetalleDeProducto(props) {
    return (
      <div>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <span>Precio: {props.price}</span>
        <span>SKU: {props.sku}</span>
        <span>Cantidad disponible: {props.quantity}</span>
      </div>
    );
  }
  
  export default DetalleDeProducto;
  