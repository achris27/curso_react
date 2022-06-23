import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import NavBar from './components/NavBar/NavBar'


function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <div className='ItemListContainer'>
        <ItemDetailContainer />
      </div>
      <main>
        <h1>E-tools</h1>
        <p>Christian Alfonzo</p>
      </main>
      <footer>
        <p>lorem ipsum</p>
      </footer>
    </div>
  );
}

export default App;
