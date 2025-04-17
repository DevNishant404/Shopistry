import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./components/Navbar";

function App() {
  return ( 
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/cart" element={<Cart></Cart>}></Route>
      <Route path="/product" element={<ProductDetails></ProductDetails>}></Route>
    </Routes>
    </BrowserRouter>
   );
}

export default App;