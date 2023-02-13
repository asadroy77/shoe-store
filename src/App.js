import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Products } from './components/Products/Products';
import { commerce } from './lib/commerce';
import { BrowserRouter, Outlet , Routes, Route, Link,useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import Cart from "./components/Cart/Cart";



function App() {

  const [shoes,setShoes] = useState([]);
  const [cart,setCart] = useState({});


 const fetchdata= async()=>{
  const{data} = await commerce.products.list();
  setShoes(data)
 }

const fetchcart = async()=> {
  setCart(await commerce.cart.retrieve())
}

const addtocarthandler = async(product_id,quantity)=>{
  const item = await commerce.cart.add(product_id,quantity)
console.log(item)
  setCart(item)
}



 useEffect(()=>{

  fetchdata()
  fetchcart()
 },[])



  return (<>
  <BrowserRouter>
  <Navbar total = {cart.total_items}></Navbar >
  <Routes>


    <Route path='/' element={<Products shoes={shoes} addtocarthandler={addtocarthandler}></Products>}></Route>

    <Route path='/cart' element={ <Cart cart={cart}></Cart>}></Route>
  
     

  </Routes>
</BrowserRouter>
  </>)
}


export default App;
