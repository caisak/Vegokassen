import React from 'react';
import ReactDOM from 'react-dom/client';


import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { App } from './App';
import { Homepage } from './pages/Homepage';
import { HowItWorks } from './pages/HowItWorks';
import { Productpage } from './pages/Product';
import { ReceptPage } from './pages/ReceptPage';

const router = createBrowserRouter(createRoutesFromElements(

<Route path="/" element={<App/>}>
  <Route index element={<Homepage/>}></Route>
  <Route path="productpage" element={<Productpage />} />
  <Route path="howitworks" element={<HowItWorks/>}/>
  <Route path="receptpage" element={<ReceptPage/>}/>
  <Route path="*" element= {<h2>404 NOT FOUND</h2>}/>
</Route>


)

)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<React.StrictMode>
 <RouterProvider router= {router}/>
</React.StrictMode>
);