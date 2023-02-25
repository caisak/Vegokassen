import { Outlet } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";

import { library } from "@fortawesome/fontawesome-svg-core";

import { faCartShopping, faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import './App.css';

library.add(faCheckSquare, faCoffee, faCartShopping)



export function App() {
  return(
    <div>
      <Header></Header>
      <main>
      <Outlet/>
      </main>
      <Footer></Footer>
    </div>
  )
}


