import React, { useContext } from 'react'
import data from '../Data/data'
import Product from './Product';
import { ProductContext } from '../App';

export default function ProductsList() {
    const { handleAdd } = useContext(ProductContext);
    const { products } = data;
    return (
        <div className="row">
                  <h1 className="text-center mb-2">All Products</h1>
            {products.map((product) => (
                <Product key={product.id}
                    product={product}
                    handleAdd={handleAdd}/>
            ))}
            
        </div>
    )
}
