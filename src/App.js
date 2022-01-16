import NavBar from './components/nav-bar/navBar';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
        <CartWidget/>
      </header>
      <ItemListContainer name='celular' price={50000}/>
    </div>
  );
}

export default App;
