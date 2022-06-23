import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({data}) => {

    let vari = 2;
    console.log("DATA EN DETAIL:", data)

  return (
    <div className='Detail'>
        <h1>{data[vari].title}</h1>
        <img src={data[vari].image} alt={data[vari].title} className='Item_Image'></img>
        <h3>${data[vari].price}</h3>
        <p>{data[vari].description}</p>
    </div>
    
  )
}

export default ItemDetail

/*
*/