import { createBrowserRouter } from "react-router-dom";
import Start from "../../layouts/Start";
import Home from "../../Pages/Home/Home/Home";
import Category from "../../Pages/Category/Category/Category";
import DynamicNews from "../../Pages/DynamicNews/DynamicNews/DynamicNews";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Register/Register/Register";
import PrivateRoute from "../../Pages/PrivateRoute/PrivateRoute/PrivateRoute";
import TermsAndConditions from "../../Pages/Others/TermsAndConditions/TermsAndConditions";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Start></Start>,
        children: [
            {
                path: "/",
                loader: async () => fetch("https://bangla-news-server-mu.vercel.app/news"),
                element: <Home />
            },
            {
                path: "category/:id",
                loader: async ({ params }) => fetch(`https://bangla-news-server-mu.vercel.app/category/${params.id}`),
                element: <Category />
            },
            {
                path: "news/:id",
                loader: async ({ params }) => fetch(`https://bangla-news-server-mu.vercel.app/news/${params.id}`),
                element: <PrivateRoute><DynamicNews /></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/terms",
                element: <TermsAndConditions></TermsAndConditions>
            }
        ]
    }
])