import {Container} from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShipppingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Header/>
        <Container>
        <main className='py-3'>
          <Routes>
          <Route path='/' element={ <HomeScreen/> } exact />
          <Route path='/login' element={ <LoginScreen/> }  />
          <Route path='/register' element={<RegisterScreen/>} />
          <Route path='/product/:id' element={ <ProductScreen/> } />
          <Route path='/cart/:id'  element={<CartScreen/>} />
          <Route path='/cart/'  element={<CartScreen/>} />
          <Route path='/profile'  element={<ProfileScreen/>} />
          <Route path='/shipping'  element={<ShippingScreen/>} />
          <Route path='/payment'  element={<PaymentScreen/>} />
          <Route path='/placeorder' element={<PlaceOrderScreen/>} />
          <Route path='/order/:id' element={<OrderScreen/>} />
          </Routes> 
          </main>
        </Container>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
