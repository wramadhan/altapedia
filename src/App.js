import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import DetailProduct from "./pages/DetailProduct";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import MyProduct from "./pages/MyProduct";
import Cart from "./pages/Cart";
import UpdateProfile from "./pages/UpdateProfile";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />
        <Route path="/detail/:id" element={<DetailProduct />} />
        <Route path="/myproduct" element={<MyProduct />} />
        <Route path="/myproduct/:id" element={<EditProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
