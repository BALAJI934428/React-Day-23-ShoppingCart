import React from 'react'

function Product(props) {
  return (
    <div>
      <div className="col mb-5">
    <div className="card h-100">
        
        <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        
        <div className="card-body p-4">
            <div className="text-center">
                
                <h5 className="fw-bolder">{props.product.name}</h5>
                
                ${props.product.description}
            </div>
        </div>
        
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent"></div>
      
        
        {props.isInCart ? (
        <button onClick={() => props.onRemoveCart(props.product)} className="text-center btn btn-outline-dark mt-auto" >Remove from Cart</button> ) : (
            <button onClick={() => props.onAddCart(props.product)} className=" text-center btn btn-outline-dark mt-auto">Add to Cart</button>
        )
        }
    </div>
    </div>
    </div>

  )
}

export default Product