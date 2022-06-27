import Item from '../Item/Item'
import './ItemList.css'
import React from 'react'
import { Link } from 'react-router-dom'

const ItemList = ({datas}) => {

  return (
    <div>
        <h1>Products</h1>
        <div className='Items'>
            {datas.map((data) => (
                <Link to={'/item/' + data.id}>
                  <Item key={data.id} data={data}/>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default ItemList