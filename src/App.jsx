import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from './Layout/MainLayout';
import HomePage from "./pages/HomePage.jsx";
import ProductPage from "./pages/ProductPage.jsx"; 
import NotFoundPage from "./pages/NotFoundPage.jsx";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage />} />
        <Route path="product/:productId" element={<ProductPage />} /> 
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  )
  return (
      <RouterProvider router={router}/>
  );
};

export default App;