import NavBar from './components/nav-bar/navBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutUsPage from './Pages/AboutUsPage';
import ProductsPage from './Pages/ProductsPage';
import ContactPage from './Pages/ContactPage';
import ProductDetailPage from './Pages/ProductDetailPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage/>} />
          <Route path='/products'> 
            <Route index element={<ProductsPage/>}/>
            <Route path=':itemId' element={<ProductDetailPage/>} />
          </Route>
          <Route path='/contact' element={<ContactPage/>} />
          <Route path='/about' element={<AboutUsPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    // Falta el <Footer/>
  );
}

export default App;
