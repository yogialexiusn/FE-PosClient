// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import React, { useEffect, useState} from "react";
import Layout from "@/components/layouts/Layout";
import api from "@/api";
import ProductList from "@/components/elements/ProductList/ProductList";
import Cart from "@/components/elements/Cart/Cart";
import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // hook react state tempat penampungan data
  
  const [products, setProducts] = useState([])

  const fetchProduct = async () => {
    // const response = await api.get('/localhost:3000');
    const response = await api.get('/products');
    const data = await response.data.payload;
    setProducts(data);
    console.log("response = " + JSON.stringify(response))
    console.log("data = " + JSON.stringify(data))
  }
  // hook react js, componen use effek, efek render
  useEffect( () => {
    fetchProduct();
  }, [])

  return (
    <>
      <Layout>
        <h1>Home Page</h1>
        <div className={styles.home}>
          <ProductList products={products}/>
          <Cart />
        </div>
      </Layout>
    </>
  );
}
