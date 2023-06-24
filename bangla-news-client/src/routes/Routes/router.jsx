import { createBrowserRouter } from "react-router-dom";
import Start from "../../layouts/Start";
import Home from "../../Pages/Home/Home/Home";
import Category from "../../Pages/Category/Category/Category";
import News from "../../Pages/News/News/News";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Start></Start>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "category/:id",
                element: <Category />
            },
            {
                path: "news/:id",
                element: <News />
            }
        ]
    }
])