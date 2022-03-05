// +
import './GlobalStyles.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Components
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {CartProvider} from './Context/CartContext'
import {UserProvider} from './Context/UserContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
// Pages
import AboutUsPage from './Pages/AboutUsPage';
import ProductsPage from './Pages/ProductsPage';
import ContactPage from './Pages/ContactPage';
import NotFoundPage from './Pages/NotFoundPage';
import CartPage from './Pages/CartPage';
import CheckoutPage from './Pages/CheckoutPage';
import PurchaseReceivedPage from './Pages/PurchaseReceivedPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import ProfilePage from './Pages/ProfilePage'

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route index element={<ProductsPage/>}/>
            <Route path='/'>
              <Route path='/products'> 
                <Route index element={<ProductsPage/>}/>
                <Route path=':itemId' element={<ItemDetailContainer/>} />
              </Route>
              <Route path='/category/:categoryId' element={<ProductsPage/>}/>
              <Route path='/cart'>
                <Route index element={<CartPage/>} />
                <Route path='/cart/checkout' element={
                <ProtectedRoute>
                  <CheckoutPage/>
                </ProtectedRoute>}
                />
              </Route>
              <Route path='/purchasereceived/:orderId' element={<PurchaseReceivedPage/>}/>
              <Route path='/contact' element={<ContactPage/>} />
              <Route path='/about' element={<AboutUsPage/>} />
              <Route path='/profile' element={
              <ProtectedRoute>
                <ProfilePage/>
              </ProtectedRoute>} 
              />
              <Route path='/login' element={<LoginPage/>} />
              <Route path='/register' element={<RegisterPage/>} />
              <Route path='*' element={<NotFoundPage/>} />
            </Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </CartProvider>
    </UserProvider>
    // Falta el <Footer/>
  );
}
export default App;