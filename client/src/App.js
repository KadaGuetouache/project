import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";
import Favorite from "./pages/Favorite";
import Profile from "./pages/Profile";
import ScrollToTop from "./components/ScrollToTop";
import { useSelector } from "react-redux";

function App() {
	const user = useSelector( state => state.user.currentUser )
  return (
    <Router>
			<ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="products/:category" element={<ProductList />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="cart" element={!user ? <Navigate to="/login" replace /> : <Cart />} />
        <Route path="success" element={!user ? <Navigate to="/login" replace /> : <Success />} />
        <Route path="/favorite" element={!user ? <Navigate to="/login" replace /> : <Favorite />} />
        <Route path="/profile" element={!user ? <Navigate to="/login" replace /> : <Profile currentUser={ user }/>} />
				<Route path="login" element={user ? <Navigate to="/" replace /> : <LogIn />} />
        <Route path="register" element={ <Register />} />
        <Route path="*" element={ <NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
