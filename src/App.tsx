import { Outlet } from "react-router-dom";
import {Footer} from "./Components/Footer";
import {Header} from "./Components/Header";

import './App.css';

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


