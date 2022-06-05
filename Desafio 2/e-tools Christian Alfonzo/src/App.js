import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
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
