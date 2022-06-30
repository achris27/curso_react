import React, { useEffect } from 'react'
import './ItemDetail.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const ItemDetail = ({ data }) => {
  
  console.log("DATA EN DETAIL:", data)

  const { id } = useParams();
  useEffect( () => {
    console.log('recibi:',id)
    return () => {
      console.log('cambiado:',id)
    }
  },[id]);

  return (
    <div className='Detail'>
    <h1>{data[id].title}</h1>
    <img src={data[id].image} alt={data[id].title} className='Item_Image'></img>
    <h3>${data[id].price}</h3>
    <p>{data[id].description}</p>
    <Link to={'/category/{data[id].category}'}><p>Categoria: </p><a>{data[id].category}</a></Link>
    </div>
    
  )
}

export default ItemDetail

/*
    <h1>{data[itemId].title}</h1>
    <img src={data[itemId].image} alt={data[itemId].title} className='Item_Image'></img>
    <h3>${data[itemId].price}</h3>
    <p>{data[itemId].description}</p>
    <Link to={'/category/:id'}><p>Categoria: </p><a>{data[itemId].category}</a></Link>
*/