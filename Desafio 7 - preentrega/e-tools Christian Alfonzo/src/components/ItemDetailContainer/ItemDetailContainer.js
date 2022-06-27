import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {

    const [products, setProducts] = useState([]);

    const {id} = useParams();

    //console.log(id);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((json) => setProducts((json)));
    }, [id]);

    //console.log("DATA EN DETAILCONTAINER:", products);
    return (
        <div>
            <h1>Detalle del Item</h1>
            <br></br>
            <br></br>
            <br></br>
            <ItemDetail data={products} itemId={id}/>
        </div>
    )
}

export default ItemDetailContainer