import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="products/category" element={<ProductList />} />
        <Route path="product/1" element={<Product />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
