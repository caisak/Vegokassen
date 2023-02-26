import { Outlet } from "react-router-dom";
import './App.css';
import { Footer } from "./Components/Footer";
import { TheHeader } from "./Components/Header";

export function App() {
  return(
    <div id="hello">
      <TheHeader></TheHeader>
      <main>
        <Outlet/>
      </main>
      <Footer></Footer>
    </div>
  )
}


