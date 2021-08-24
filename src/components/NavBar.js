import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { ProductContext } from '../App';
import CartIcon from '../design/CartIcon';
import './Navbar.css'

export default function NavBar() {
  const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
 const {cartItemsLength,setShowCart} = useContext(ProductContext)
  
  const btnClasses = `cartButton ${btnIsHighLighted ? 'bump' : ''}`;

  useEffect(() => {
    if (cartItemsLength === 0) {
      return;
    }
    setBtnIsHighLighted(true)

    const timer = setTimeout(() => {
      setBtnIsHighLighted(false)
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cartItemsLength]);

  
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">Graphics Cards</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active"
                  aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">Products</NavLink>
              </li>
         
            </ul>
          </div>

            <button onClick={() => setShowCart(prevCart => prevCart = !prevCart)}
              className={btnClasses}>
              <span className="icon"> 
               <CartIcon/>
              </span>
              <span>  Your Cart</span>
             <span className="badge">
                {cartItemsLength}</span>
            </button>
           
        </div>
      </nav>
    )
}
