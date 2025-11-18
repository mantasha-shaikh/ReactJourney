import { HomePage } from "./pages/HomePages";
import { Routes, Route } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />}/>
        <Route path="checkout" element={<div>Hello owrld </div>} />
      </Routes>
    </>
  );
}

export default App;
