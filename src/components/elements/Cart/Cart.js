import React from 'react';
import styles from './index.module.css'

const Cart = () => {
    const carts = useCart();
    return (
        <div className={styles.cart}>
            <h3>Cart</h3>
            {carts.map((cart,index))}
        </div>
    )
}

export default Cart;