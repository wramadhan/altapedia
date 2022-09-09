import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import DetailProduct from "./pages/DetailProduct";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import MyProduct from "./pages/MyProduct";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<DetailProduct />} />
        <Route path="/myproduct" element={<MyProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
