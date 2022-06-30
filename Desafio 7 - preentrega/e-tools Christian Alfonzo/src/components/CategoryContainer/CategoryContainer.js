import Item from '../Item/Item'
import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const CategoryContainer = ({datas}) => {

    const { category } = useParams();
    useEffect( () => {
      console.log('recibi:', category)
      return () => {
        console.log('cambiado:', category)
      }
    },[ category ]);

  return (
    <div>
        <h1>Products</h1>
        <div className='Items'>
            {datas.category.map((data) => (
                <Link to={'/item/' + data.id}>
                  <Item key={data.id} data={data}/>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default CategoryContainer