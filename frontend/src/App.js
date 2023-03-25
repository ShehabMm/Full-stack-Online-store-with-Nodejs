import Home from "pages/home/Home";
import Root from "./pages/Root";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Form,
  Route,
  RouterProvider,
} from "react-router-dom";
import Cart from "pages/cart/Cart";
import Productdetails from "pages/productDetails/ProductDetails";
import SwiperComponent from "pages/swiper/swiper"
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="Productdetails/:id" element={<Productdetails />} />
      <Route path="SwiperComponent" element={<SwiperComponent />} />

      <Route path="Form" element={<Form />} />


      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
