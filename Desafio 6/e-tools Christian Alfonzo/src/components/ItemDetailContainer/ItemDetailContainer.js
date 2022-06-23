import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((json) => setProducts((json)));
    }, []);
    console.log("DATA EN DETAILCONTAINER:", products);

    const int = 1;

    return (
        <div>
            <h1>Detalle del Item</h1>
            <br></br>
            <br></br>
            <br></br>
            <ItemDetail data={products}/>
        </div>
    )
}

export default ItemDetailContainer