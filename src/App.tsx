import { Outlet } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import './App.css';
import { MyProvider } from "./Components/MyProvider";

export function App() {
  return(
    <div>
      <MyProvider>
      <Header></Header>
      <main>
      <Outlet/>
      </main>
      <Footer></Footer>
      </MyProvider>
    </div>
  )
}


