import { createBrowserRouter } from "react-router-dom";
import Start from "../../layouts/Start";
import Home from "../../Pages/Home/Home/Home";
import Category from "../../Pages/Category/Category/Category";
import DynamicNews from "../../Pages/DynamicNews/DynamicNews/DynamicNews";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Start></Start>,
        children: [
            {
                path: "/",
                loader: async () => fetch("http://localhost:5000/news"),
                element: <Home />
            },
            {
                path: "category/:id",
                loader: async ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <Category />
            },
            {
                path: "news/:id",
                loader: async ({ params }) => fetch(`http://localhost:5000/news/${params.id}`),
                element: <DynamicNews />
            }
        ]
    }
])