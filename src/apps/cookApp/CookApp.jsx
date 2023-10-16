import Navbar from "./components/Navbar";
import ApiFinit from "./pages/ApiFinit";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import { Navigate, Route, Routes } from "react-router-dom";


export default function CookApp() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/FoodApp/" element={<Home/>}></Route>
        <Route path="/FoodApp/ApiFinit/" element={<ApiFinit/>}></Route>
        <Route path="/FoodApp/Products" element={<Products/>}></Route>
        <Route path="/FoodApp/ProductDetails/:id" element={<ProductDetails/>}></Route>

        <Route path="/FoodApp/redirect" element={<Navigate to="/FoodApp/ApiFinit"/>}></Route>
      </Routes>
    </>
  )
}
