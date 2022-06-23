import Item from '../Item/Item'
import './ItemList.css'
import React from 'react'

const ItemList = (datas) => {

  return (
    <div>
        <h1>Products</h1>
        <div className='Items'>
            {datas.data.map((data) => (
                <Item key={data.id} data={data}/>
            ))}
        </div>
    </div>
  )
}

export default ItemList