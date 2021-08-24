import React from 'react'

export default function Product({product,handleAdd}) {
    
    return (

         
        <div className="col-md-3 mb-3">  
        <div className="card">
                <img src={product.image} className="card-img-top"
                 style={{height:'12rem'}}   alt={product.name} />
        <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <h6 className="card-text">${product.price}</h6>
                    <div className="actions">                 
                    <button onClick={() => handleAdd(product)}
                        className="">Add To Cart
                    <i className="fas fa-shopping-cart"></i>
                        </button>
                        </div>
                 
        </div>
            </div>
            </div>

    ) 
}
