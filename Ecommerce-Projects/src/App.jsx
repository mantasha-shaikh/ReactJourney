import { HomePage } from "./pages/HomePages";
import { Routes, Route } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="checkout" element={<div>Hello owrld </div>}></Route>
      </Routes>
    </>
  );
}

export default App;
