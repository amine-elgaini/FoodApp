import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import { Route, Routes } from "react-router-dom";


export default function CookApp() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/FoodApp/" element={<Home/>}></Route>
        <Route path="/FoodApp/Products" element={<Products/>}></Route>
        <Route path="/FoodApp/ProductDetails/:id" element={<ProductDetails/>}></Route>
      </Routes>
    </>
  )
}
