import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css'
import React, { useState, useEffect } from 'react'


const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((json) => setProducts((json)));
    }, []);

    //console.log('DATA: ', products)

    return(
      <div className="ItemListContainer">
        <ItemList datas={products}/>
      </div>
    );
};

export default ItemListContainer;