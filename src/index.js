import React from 'react';
import ReactDOM from 'react-dom';
// import  PrimeraApp from './PrimeraApp'
import CounterApp from './CounterApp';
import 'antd/dist/antd.css';
import './index.css';

// Donde lo quiero renderizar? en el <div/> del index.html, asi que necesito la referencia por el ID a ese elemento
// 1ro creo la referencia a ese elemento
const divRoot = document.querySelector('#root');

// ahora pones a 'saludo' dentro de 'ReactDOM' usando el metodo .render que recibe lo que queres mostrar seguido de donde lo queres poner
// ReactDOM.render(<PrimeraApp saludo={'Que hay de nuevo viejo?'} />, divRoot);

ReactDOM.render(<CounterApp />, divRoot);