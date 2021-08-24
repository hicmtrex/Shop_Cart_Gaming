import Modal from '../design/Modal';
import CartItems from './CartItems'
import classes from './Cart.module.css'


export default function Cart({cartItems,hideCartHandler}) {

    const totalPrice = cartItems.reduce((acc, p) => acc + p.price * p.qty, 0);
    return (
        <Modal hideCartHandler={hideCartHandler}>
    
            <ul className={classes['cart-items']}>
                {cartItems.map((product) => (
                    <CartItems key={product.id}
                        product={product} />
                ))}
            </ul>
            <div className={classes.total}> 
                {cartItems.length >= 1 && <h3>Total Price = ${totalPrice}</h3>}
                </div>
            <div className={classes.actions}>
                {cartItems.length >= 1 ? <button onClick={() => alert(`$${totalPrice}`)}
                    className={classes['button--alt']}>Order</button>
                    : <p className={classes.total}>Cart is empty</p>}
                <button onClick={hideCartHandler}
                    className={classes.button}>Close</button>
                    
                   
            </div>
     
            </Modal>
          
    );
};
