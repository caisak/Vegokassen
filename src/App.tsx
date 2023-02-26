import { Outlet } from "react-router-dom";
import './App.css';
import { Footer } from "./Components/Footer";
import { TheHeader } from "./Components/Header";
import { MyProvider } from "./Components/MyProvider";

export function App() {
  return(
    <div id="hello">
      <MyProvider>
      <TheHeader></TheHeader>
      <main>
        <Outlet/>
      </main>
      <Footer></Footer>
      </MyProvider>
    </div>
  )
}


