import SingleProduct from "./Products/SingleProduct";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./modules/About";
import AllProducts from "./modules/AllProducts";
import Cart from "./modules/Cart/Cart";
import CategoryProducts from "./modules/CategoryProducts";
import Contact from "./modules/Contact";
import Home from "./modules/Home";
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/categories/:name" element={<CategoryProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>Sorry! 404</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
