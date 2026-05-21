import {Routes,Route} from 'react-router'
import axios from 'axios'
import CheckoutPage from './pages/CheckoutPage/CheckoutPage'
import OrdersPage from './pages/OrdersPage/OrdersPage'
import TrackingPage from './pages/TrackingPage/TrackingPage'
import { useEffect,useState } from 'react'
import { NotFoundPage } from './pages/notfound/NotFoundPage'
import { HomePage } from './pages/HomePage/HomePage'
import './App.css'

function App() {
    const [cart,setCart] =useState([])
    useEffect(()=>{
   axios.get("/api/cart-items").then((response) => {
      setCart(response.data)
      // console.log(response.data);
    });
    },[])
 

  return (
    <>
    <Routes>
      <Route index element={<HomePage  cart={cart} />}/>
        <Route path="checkout" element={<CheckoutPage cart={cart}/>}/>
          <Route path="orders" element={<OrdersPage/>}/>
            <Route path="tracking" element={<TrackingPage/>}/>
              <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
   

    </>
  )
}

export default App
