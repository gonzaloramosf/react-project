import NavBar from './components/NavBar/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutUsPage from './Pages/AboutUsPage';
import ProductsPage from './Pages/ProductsPage';
import ContactPage from './Pages/ContactPage';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage/>} />
          <Route path='/products'> 
            <Route index element={<ProductsPage/>}/>
            <Route path=':itemId' element={<ItemDetailContainer/>} />
          </Route>
          <Route path='/contact' element={<ContactPage/>} />
          <Route path='/about' element={<AboutUsPage/>} />
          <Route path='*' element={<NotFoundPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    // Falta el <Footer/>
  );
}

export default App;
