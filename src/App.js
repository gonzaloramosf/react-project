import NavBar from './components/nav-bar/navBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Item from './components/Item/Item';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>

      <div id='items'>
        <ItemListContainer name='celular' price={50000} stock={7}/>
        <Item/>
      </div>
    </div>
  );
}

export default App;
