import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Main from "./pages/Main.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Cart from "./pages/Cart.jsx";
import Detail from "./pages/Detail.jsx";
import NotFound404 from "./pages/NotFound404.jsx";
import { ProductContextProvider } from "./context/product.jsx";
import { ThemeContextProvider } from "./context/theme.jsx";
import { UserContextProvider } from "./context/user.jsx";
import Admin from "./pages/admin/Admin.jsx";
import AddProduct from "./components/admin/AddProduct.jsx";
import ListProducts from "./components/admin/ListProducts.jsx";
import HomeAdmin from "./components/admin/HomeAdmin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound404 />,
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "",
        element: <HomeAdmin />,
      },
      {
        path: "addproduct",
        element: <AddProduct />,
      },
      {
        path: "listproducts",
        element: <ListProducts />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <UserContextProvider>
        <ProductContextProvider>
          <RouterProvider router={router} />
        </ProductContextProvider>
      </UserContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
