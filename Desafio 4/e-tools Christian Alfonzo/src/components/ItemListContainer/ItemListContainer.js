import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({greeting}) => {
    return(
      <div className="App">
        <p>{greeting}</p>
        <ItemCount stock="10" inicial="1"/>
      </div>
    );
};

export default ItemListContainer;