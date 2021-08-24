import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom';

//Components
import Home from './components/Home';
import ProductsList from './components/ProductsList';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Cart from './components/Cart';

export const ProductContext = React.createContext();

const LOCAL_STORAGE = 'graphiqueCart.hicm';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const storage = localStorage.getItem(LOCAL_STORAGE);
    if(storage != null) setCartItems(JSON.parse(storage))
},[])

 useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE,JSON.stringify(cartItems))
 }, [cartItems]); 
  

function handleAdd(product) {
  const exist = cartItems.find(p => p.id === product.id)
  if (exist) {
    setCartItems(cartItems.map((item) => item.id === product.id ? 
    {...exist,qty:item.qty + 1} : item))
  } else {
    setCartItems([...cartItems, {...product,qty:1}])
  }
  };

  function handleRemove(product) {
    const exist = cartItems.find(p => p.id === product.id)
    if (exist.qty === 1) {
      setCartItems(cartItems.filter(el => el.id !== product.id))
    } else {
      setCartItems(cartItems.map((item) => item.id === product.id ? 
      {...exist,qty:item.qty - 1} : item))
    }
  }

  function handleDelete(product) {
    setCartItems(
      cartItems.filter(el => el.id !== product.id)
    )
  }

function hideCartHandler() {
  setShowCart(false)
}

  const cartItemsContext = {
    handleAdd,
    cartItems,
    setCartItems,
    setShowCart,
    handleRemove,
    handleDelete,
    showCart,
     cartItemsLength: cartItems.length
  }

  return (
    <ProductContext.Provider value={cartItemsContext}>
      <NavBar setShowCart={setShowCart} cartItemsLength={cartItems.length} />
      <main className="container mt-3">
        {showCart && <Cart cartItems={cartItems} hideCartHandler={hideCartHandler}/>}
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/products' component={ProductsList}/>
        </Switch>
        </main>
      <Footer/>
      </ProductContext.Provider>
  )
}

export default App
