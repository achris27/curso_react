import "./ItemCount.css";
import { useState } from "react";

const ItemCount = ({stock, inicial, onAdd}) => {

    inicial = parseInt(inicial);
    let [number, setNumber] = useState(inicial);

    const button_plus = () => {   
        if(number < stock){
            setNumber(number + 1);
        }
    };

    const button_minus = () => {
        if(number > 0){
            setNumber(number - 1);
        }
    };
    
        return(
            <div className="App">
                <input type="number" value={number} className="item_cant"></input>
                <br></br>
                <button onClick={button_minus} className="button_item">restar</button>
                <button onClick={() => onAdd(number)} className="button_item">Sumar al carrito</button>
                <button onClick={button_plus} className="button_item">sumar</button>
            </div>
        );
};

export default ItemCount;