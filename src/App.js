import NavBar from './components/nav-bar/navBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <ItemListContainer name='celular' price={50000} stock={7}/>
    </div>
  );
}

export default App;
