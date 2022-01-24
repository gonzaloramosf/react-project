import NavBar from './components/nav-bar/navBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Item from './components/Item/Item';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>

      <div id='items'>
        <ItemListContainer/>
      </div>
    </div>
  );
}

export default App;
