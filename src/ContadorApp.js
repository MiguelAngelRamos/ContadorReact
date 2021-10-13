import React, {useState} from 'react'
import PropTypes from 'prop-types';
const ContadorApp = ( {contadorProps} ) => {
  const [contador, setContador] = useState(contadorProps);
  
  const sumar = () => {
    console.log('llamando a sumar');
    setContador(contador + 1);
  }

  const restar = () => {
    console.log('restar');
    setContador(contador - 1);
  }

  const reset = () => {
    console.log('reset');
    setContador(contadorProps)
  }
  return (
    <>
      <div className="container mt-5">
        <h1>Contador App</h1>
        <h2>Valor del contador:  {contador} </h2>
        {/* <button className="btn btn-success" onClick={ () => { sumar()}}>+1</button> */}
        <button className="btn btn-success" onClick={sumar}>+1</button>
        <button className="btn btn-warning" onClick={reset}> Reset</button>
        <button className="btn btn-danger" onClick={restar}>-1</button>
      </div>
      
    </>
  )
}
ContadorApp.propTypes = {
  contadorProps: PropTypes.number.isRequired
}
export default ContadorApp
