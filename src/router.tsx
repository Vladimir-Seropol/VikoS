import { createBrowserRouter } from "react-router-dom";
import Not_Found from "./components/pages/Not_Found/notFound";
import Home from "./components/pages/Home";
import Basket from "./components/pages/Basket";
// import ProductPage from "./components/pages/Product";
import Layout from "./components/Layout";

const router = createBrowserRouter([
    {
        path : "/",
        element : <Layout/>,
        children : [
            {index : true, element: <Home/>},
            {path : "basket", element: <Basket/>},
            // {path : "product/:id", element: <ProductPage/>},
            {path: "*", element: <Not_Found/>},
        ],
    },
]);
export default router;
