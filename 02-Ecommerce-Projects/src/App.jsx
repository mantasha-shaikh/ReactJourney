import {Routes,Route} from 'react-router'
import CheckoutPage from './pages/CheckoutPage/CheckoutPage'
import OrdersPage from './pages/OrdersPage/OrdersPage'
import TrackingPage from './pages/TrackingPage/TrackingPage'
import { NotFoundPage } from './pages/notfound/NotFoundPage'
import { HomePage } from './pages/HomePage/HomePage'
import './App.css'

function App() {


  return (
    <>
    <Routes>
      <Route index element={<HomePage/>}/>
        <Route path="checkout" element={<CheckoutPage/>}/>
          <Route path="orders" element={<OrdersPage/>}/>
            <Route path="tracking" element={<TrackingPage/>}/>
              <Route path="/*" element={<NotFoundPage/>}/>
    </Routes>
   

    </>
  )
}

export default App
