import './NavBar.css';
import logo from "../images/logo.png"

const NavBar = () => {
    return(
        <div className='div'>
            <nav className='nav'>
                <a href="home" className='button_logo'><img src= {logo} className='logo' alt="Inicio"></img></a>
                    <form action='search' className='form'>
                        <input type={"text"} className='text'></input>
                        <input type={"submit"} className='button_search' value={"Buscar"}></input>
                    </form>
                <div className='div_nav'>
                <a href="kart" className='button'>Carrito</a>
                <a href="myAccount" className='button'>Mi cuenta</a>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;