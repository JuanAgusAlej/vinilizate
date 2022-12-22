export function CartItem({data,delFromCart}) {
    const {id,name,price,quantity} = data
    console.log(id)
    return (
        <div style={{borderBottom:"thin solid gray"}}>
          <h4>{name}</h4>  
          <h5>${price}.00 x {quantity} = ${price * quantity}.00</h5>
          <button onClick={()=> delFromCart(id)}>Eliminar Uno</button>
          <br/>
          <button onClick={()=> delFromCart(id,true)}>Eliminar Todos </button>
          <br/><br/>
        </div>
    )
}
