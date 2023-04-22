import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Header from "./components/Header.jsx";
// import Footer from "./components/Footer.jsx";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Error from "./pages/Error.jsx";
import Posts from "./pages/Posts.jsx";
import Products from "./pages/Products.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<SingleProduct />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
