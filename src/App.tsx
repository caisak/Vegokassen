import { Outlet } from "react-router-dom";
import Header from "./Components/Header";

export function App() {
  return(
    <div>
      <Header></Header>
      <main>
      <Outlet/>
      </main>
      




    </div>
  )
}


