import ItemCount from "../ItemCount/ItemCount";

const stock = 10;

const onAdd = (n) => {

  console.log(`felicitaciones se agregaron ${n} productos al carrito`)

};
const ItemListContainer = ({greeting}) => {
    return(
      <div className="App">
        <p>{greeting}</p>
        <ItemCount initial={1} stock={stock} onAdd={onAdd} />
      </div>
    );
};

export default ItemListContainer;