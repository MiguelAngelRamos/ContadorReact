import React from 'react';
import ReactDOM from 'react-dom';
import ContadorApp from './ContadorApp';
import './index.css';


ReactDOM.render( <ContadorApp contadorProps={10}/>, document.getElementById('root'));