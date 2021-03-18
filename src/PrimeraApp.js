import React from 'react';
import PropTypes from 'prop-types';

// FC
const PrimeraApp = ({ saludo, subtitulo }) => {

  return (
    <>
      <h1>{saludo}xdxdxd</h1>
      {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> null es el replace y 3 el espacio */}
      <p>{subtitulo}</p>
    </>
  );
};

//aqui podemos definir el tipo de nuestras propiedades
PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired
};

PrimeraApp.defaultProps = {
  subtitulo: 'Soy un subtitulo'
};

export default PrimeraApp;
