import ItemCount from '../ItemCount/ItemCount'

const initial = 1;

const ItemListContainer = ({greeting}) => {
  function onAdd(number) {
    console.log("Se sumó al carrito la cantidad de: " + number);
  }
  
    return(
      <div className="App">
        <p>{greeting}</p>
        <ItemCount stock="10" inicial={initial} onAdd={onAdd}/>
      </div>
    );
};

export default ItemListContainer;