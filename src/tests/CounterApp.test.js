import React from 'react';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp/>', () => {
  
  //let wrapper; // undefined, pierdo el intellisense
  let wrapper = shallow(<CounterApp />); //no es buena practica pero no pierno el intellisense
  beforeEach( () => {
    wrapper = shallow(<CounterApp />); //para que se ejecute en cada test
  });

  test('Debe mostrar CounterApp correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar el valor por efecto de 420', () => {

    const wrapper = shallow(
      <CounterApp
        valor={420}
      />
    );

    const valorHTML = wrapper.find('#test_counter').html();
    expect(valorHTML.includes('420')).toBe(true);
  });

  test('Debe funcionar el btn +1', () => {
    wrapper.find('Button').at(2).simulate('click'); //va el evento que uqiero simular y los valores del evento
    const valorHTML = wrapper.find('#test_counter').html();
    expect(valorHTML.includes('1998')).toBe(true);
  });

  test('Debe funcionar el btn -1', () => {
    wrapper.find('Button').at(0).simulate('click');
    const valorHTML = wrapper.find('#test_counter').html();
    expect(valorHTML.includes('1996')).toBe(true);
  });

  test('Debe funcionar el btn Reset', () => {

    const wrapper = shallow(
      <CounterApp
        valor={420}
      />
    );
    
    wrapper.find('Button').at(2).simulate('click'); //debo modificar el valor par asegurarme que se resetee
    wrapper.find('Button').at(1).simulate('click');
    
    const valorHTML = wrapper.find('#test_counter').html();
    expect(valorHTML.includes('420')).toBe(true);
  });

});