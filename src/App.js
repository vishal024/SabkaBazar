import React,{useState,useEffect} from "react"
import axios from "axios"
import NavBar from "./Components/NavBar/index"
import { Routes, Route} from "react-router-dom"
import Home from "./Components/Home/index"
import Products from "./Components/Products/index"
import SignIn  from "./Components/SignIn/index"
import Register  from "./Components/Register/index"
import Cart from "./Components/Cart/index"
import ProductsData from "./Components/server/products/get.json"
import CategoriesData from "./Components/server/categories/get.json"
import DiscountData from "./Components/server/banners/get.json"

function App() {
    const [productItem, setProductItem] = useState(ProductsData);
    const [categoryItem, setCategoryItem] = useState(CategoriesData);
    const [discountItem, setDiscountItem] = useState(DiscountData)
    const [cartItems, setCartItems] = useState([]);

    const handleAddproduct = (product) =>{
        const ProductExist = cartItems.find((item) => item.id === product.id)
        if(ProductExist){
          setCartItems(cartItems.map((item)=> item.id === product.id ? {
            ...ProductExist, quantity: ProductExist.quantity+1} : item
          ))
          }
          else{
            setCartItems([...cartItems,{product, quantity:1}])
          }
    }
  return (
    <>
         <NavBar/>
         <Routes>
           <Route path="/" element={<Home categoryItem={categoryItem} discountItem={discountItem}/>}/>
           <Route path="/products" element={<Products productItem={productItem} categoryItem={categoryItem} handleAddproduct={handleAddproduct}/>}/>
           <Route path="/signin" element={<SignIn/>}/>
           <Route path="/register" element={<Register/>}/>
           <Route path="/cart" element={<Cart cartItems={cartItems} handleAddproduct={handleAddproduct}/>}/>
         </Routes>

    </>
  );
}

export default App;
