import { HomePage } from "./pages/HomePages";
import { CheckoutPage } from "./pages/CheckoutPage";
import { OrdersPage } from "./pages/OrderPage";
import { TrackingPage } from "./pages/TrackingPage";
import { Routes, Route } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />}/>
        <Route path="checkout" element={<CheckoutPage/>} />
         <Route path="orders" element={<OrdersPage/>} />
         <Route path="tracking" element={<TrackingPage/>} />
      </Routes>
    </>
  );
}

export default App;
