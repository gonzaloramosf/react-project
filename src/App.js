// +
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Components
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {CartProvider} from './Context/CartContext'
// Pages
import HomePage from './Pages/HomePage';
import AboutUsPage from './Pages/AboutUsPage';
import ProductsPage from './Pages/ProductsPage';
import ContactPage from './Pages/ContactPage';
import NotFoundPage from './Pages/NotFoundPage';
import CartPage from './Pages/CartPage';
import CheckoutPage from './Pages/CheckoutPage';
import PurchaseReceivedPage from './Pages/PurchaseReceivedPage';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/'>
            <Route index element={<HomePage/>} />
            <Route path='/products'> 
              <Route index element={<ProductsPage/>}/>
              <Route path=':itemId' element={<ItemDetailContainer/>} />
            </Route>
            <Route path='/category/:categoryId' element={<ProductsPage/>}/>
            <Route path='/cart'>
              <Route index element={<CartPage/>} />
              <Route path='/cart/checkout' element={<CheckoutPage/>} />
            </Route>
            <Route path='/purchasereceived/:orderId' element={<PurchaseReceivedPage/>}/>
            <Route path='/contact' element={<ContactPage/>} />
            <Route path='/about' element={<AboutUsPage/>} />
            <Route path='*' element={<NotFoundPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
    // Falta el <Footer/>
  );
}
export default App;