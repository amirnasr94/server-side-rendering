import {createBrowserRouter} from "react-router-dom";
import About from "../components/About";
import App from "../App";
import Contact from "../components/Contact";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/contact",
        element:<Contact/>
    }
])