import { Outlet } from "react-router-dom";
import "./App.css";
import ErrorBoundary from "./Components/ErrorBoundary";
import { Footer } from "./Components/Footer";
import { TheHeader } from "./Components/Header";

export function App() {
  return (
    <div id="hello">
      <ErrorBoundary>
        <TheHeader></TheHeader>
      </ErrorBoundary>
      <main>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
      <ErrorBoundary>
        <Footer></Footer>
      </ErrorBoundary>
    </div>
  );
}
