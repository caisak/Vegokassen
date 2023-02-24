import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { App } from './App';
import { Home } from './pages/Home';
import { HowItWorks } from './pages/HowItWorks';
import { Products } from './pages/Products';
import { Recipies } from './pages/Recipes';

const router = createBrowserRouter(createRoutesFromElements(

<Route path="/" element={<App/>}>
  <Route index element={<Home/>}></Route>
  <Route path="products" element={<Products />} />
  <Route path="howitworks" element={<HowItWorks/>}/>
  <Route path="recipies" element={<Recipies/>}/>
  <Route path="*" element= {<h2>404 NOT FOUND</h2>}/>
</Route>


)

)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<React.StrictMode>
 <RouterProvider router= {router}/>
</React.StrictMode>
);