import Home from "./pages/Home";
import { ProductList } from "./pages/ProductList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="products/category" element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default App;
