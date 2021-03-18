import React from 'react';
import { shallow } from 'enzyme';
// import { render } from '@testing-library/react';

import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp/>', () => {

  // test('Debe de mostrar el mensaje "Que hay de nuevo viejo?"', () => {

  //   // debo renderizar el componente y evaluar sobre el mismo
  //   const saludo = 'Que hay de nuevo viejo?';

  //   //wrapper es el producto renderizado de lo que quiero mostrar
  //   const { getByText } = render(<PrimeraApp saludo={saludo} />); //recibe un componente, que es lo que quiero renderizar

  //   expect(getByText(saludo)).toBeInTheDocument();

  // });

  test('Debe de mostrar <PrimeraApp/> correctamente', () => {

    const saludo = 'Que hay de nuevo viejo?';

    //el hsallow es similar al render pero nos va a dar otras opciones como simular clicks etc
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de mostrar el subtitutlo enviado por props', () => {

    const saludo = 'Que hay de nuevo viejo?';
    const subtitulo = 'this is a fucking subtitle';

    //el hsallow es similar al render pero nos va a dar otras opciones como simular clicks etc
    const wrapper = shallow(
      <PrimeraApp
        saludo={saludo}
        subtitulo={subtitulo}
      />
    );

    const textoParrafo = wrapper.find('p').text(); //puede buscar por #id .clases o elementos h1 h2 p

    expect(subtitulo).toBe(textoParrafo);
    
  });


});