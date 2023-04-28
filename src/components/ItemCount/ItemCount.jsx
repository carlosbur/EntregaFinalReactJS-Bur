import './ItemCount.css'

const ItemCount = ({ max, cantidad, modify }) => {


  const sumar = () => {
    if (cantidad < max) {
      modify(cantidad + 1)
    }
  }

  const restar = () => {
    if (cantidad < 1) {
      modify(0)
    } else
      modify(cantidad - 1)
  }

  // const reset = () => {
  //   setCounter (0)
  // }

  return (
    <>
      <div className='tituloContador'>
        <h4>{cantidad}</h4>
      </div>
      <div className='botones'>
        <button onClick={sumar}>➕</button>
        <button onClick={restar}>➖</button>
        {/* <button onClick={reset}>🔄</button> */}
      </div>
    </>
  )
}

export default ItemCount

