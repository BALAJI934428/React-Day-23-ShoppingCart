import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

function Cart({cartItems, onRemoveFromCart}) {
  return (
    <div>
        {cartItems.map(item => (<div key={item.id} >
    
    <Dropdown.Item href="#/action-1" >{item.name} $ {item.description} <br/>
    <button onClick={() => onRemoveFromCart(item)} className="text-center btn btn-outline-dark mt-auto" >Remove from Cart</button> 
    
    </Dropdown.Item>
   
    </div> ))}
    </div>
  )
}

export default Cart