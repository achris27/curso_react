import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import CartContainer from './components/CartContainer/CartContainer';

import NavBar from './components/NavBar/NavBar'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar/>
        </header>
        <Routes>
          <Route exact path='/' element={<ItemListContainer />} />
          <Route exact path='/category/:id' element={<ItemListContainer />}/>
          <Route exact path='/item/:id' element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


/*
      <div className='ItemListContainer'>
        <ItemListContainer />
      </div>
      <main>
        <h1>E-tools</h1>
        <p>Christian Alfonzo</p>
      </main>
      <footer>
        <p>lorem ipsum</p>
      </footer>
*/