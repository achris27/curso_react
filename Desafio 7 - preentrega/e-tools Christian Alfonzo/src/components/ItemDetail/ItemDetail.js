import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({data , itemId}) => {

    //console.log("DATA EN DETAIL:", itemId)

  return (
    <div className='Detail'>
    <h1>{data[itemId].title}</h1>
    <img src={data[itemId].image} alt={data[itemId].title} className='Item_Image'></img>
    <h3>${data[itemId].price}</h3>
    <p>{data[itemId].description}</p>
    </div>
    
  )
}

export default ItemDetail
