import Item from '../Item/Item'
import './ItemList.css'
import React, { useState, useEffect } from 'react'

const ItemList = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((json) => setProducts((json)));
    }, []);
    console.log('DATA: ', products)

  return (
    <div>
        <h1>Products</h1>
        <div className='Items'>
            {products.map((product) => (
                <Item key={product.id} data={product}/>
            ))}
        </div>
    </div>
  )
}

export default ItemList