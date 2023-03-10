import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { App } from './App';
import { CartProvider } from './CartContex';
import ErrorBoundary from './Components/ErrorBoundary';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { HowItWorks } from './pages/HowItWorks';
import { Products } from './pages/Products';
import { Recipies } from './pages/Recipes';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App/>}>
    <Route index element={<Home/>}></Route>
    <Route path="produkter" element={<Products />} />
    <Route path="safunkardet" element={<HowItWorks/>}/>
    <Route path="recept" element={<Recipies/>}/>
    <Route path="cart" element={<Cart/>}/>
    <Route path="*" element= {<h2>404 NOT FOUND</h2>}/>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<React.StrictMode>
  <ErrorBoundary>
    <CartProvider>
      <RouterProvider router= {router}/>
    </CartProvider>
  </ErrorBoundary>
</React.StrictMode>
);