import { Link } from 'react-router-dom'

const CartWidget = () => {
    return(
        <div className="App">
            <a href="kart" className='button_nav'><i class="tiny material-icons">shopping_cart</i></a>
        </div>
    );
};

export default CartWidget;