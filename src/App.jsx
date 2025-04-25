import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Footer from "./components/Footer";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";

function App() {
  return ( 
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/cart" element={<Cart></Cart>}></Route>
      <Route path="/product/:id" element={<ProductDetails></ProductDetails>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/faq's" element={<Faq></Faq>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
    </Routes>
    <Footer></Footer>

    </BrowserRouter>
   );
}

export default App;