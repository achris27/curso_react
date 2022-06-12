import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <ItemListContainer greeting='Hello Word' />
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
