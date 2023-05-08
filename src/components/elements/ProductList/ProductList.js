import React from "react";
import styles from './index.module.css'
import Image from "next/image";
import { useCartDispatch } from "@/context/CartContext";

const ProductList = ({ products }) => {
    const dispacth = useCartDispatch()

    const handleAddToCart = product => {
      
    }
    // console.log("y = " + JSON.stringify(products));
    return (
        <div className={styles['product-list']}>
        {products.map((product, index) => {
          return (
          <div
             key={index}
             className={styles['product-list__product-card']}
          >

            <div className={styles['product-list__product-card__image']}>
              <Image
                src={product.img_product}
                alt={product.name}
                fill
                style={{objectFit: 'contain'}}
                />
            </div>
            <div className={styles['product-list__product-card__desc']}>
              <p>{product.name}</p> 
              <button onClicl={()=> handleAddToCart(product)}>+</button>
            </div>
          </div>
          )
        })}
        </div>
    );
}

export default ProductList;