import React, { useContext } from 'react'
import './CartItems.css'
import { ProductContext } from '../App';

export default function CartItems({ product }) {
    
    const { handleDelete, handleAdd, handleRemove } = useContext(ProductContext)
    return (
         <li className="cart-item">
            <header>
                <h2> {product.name}</h2>
                <div className="summary">        
                  <span className="price">${product.price.toFixed(2)}</span>
                    <span className="amount mb-2">x{product.qty}</span>
                    <img className="cart-img"  src={product.image} alt="" />
                    </div>
            </header>
                <div className="actions">
                    <button onClick={() => handleAdd(product)}>+</button>
                    <button onClick={() => handleRemove(product)}>-</button>
                    <button onClick={() => handleDelete(product)}><i class="fa fa-trash" aria-hidden="true"></i></button>
                </div>
              
        </li>
    )
}
