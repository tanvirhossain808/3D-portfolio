import { createBrowserRouter } from "react-router-dom";
import App from "../App";

export const Router = createBrowserRouter(
    [
        {
            path: "",
            element: <App />,
            children: [
                {
                    path: "/about",
                    element: "about"
                },
                {
                    path: "/projects", element: "Projects"
                },
                {
                    path: "/contact", element: "contact"
                }
            ]
        }


    ]
)