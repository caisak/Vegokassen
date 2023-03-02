import { Outlet } from "react-router-dom";
import './App.css';
import { CartProvider } from "./CartContex";
import { Footer } from "./Components/Footer";
import { TheHeader } from "./Components/Header";

export function App() {
  return(
    <div id="hello">
      <CartProvider>
        <TheHeader></TheHeader>
        <main>
          <Outlet/>
        </main>
        <Footer></Footer>
      </CartProvider>
    </div>
  )
}


