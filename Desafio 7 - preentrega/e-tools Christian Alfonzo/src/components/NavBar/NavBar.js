import './NavBar.css';
import logo from "../../images/logo.png";
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <div className='div'>
            <nav className='nav'>
                <a href="/" className='button_nav_logo'><img src= {logo} className='logo' alt="Inicio"></img></a>
                    <form action='search' className='form'>
                        <input type={"text"} className='input_text'></input>
                        <input type={"submit"} className='button_nav' value={"Buscar"}></input>
                    </form>
                <div className='div_nav'>
                <Link to={'/cart'}><CartWidget /></Link>
                <a href="myAccount" className='button_nav'>Mi cuenta</a>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;