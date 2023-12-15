import {
    RouterProvider,
    createBrowserRouter,
    createHashRouter,
} from "react-router-dom";

import NotFound from "./components/notfound";
import Layout from "./components/layout";
import Home from "./screen/home";
import Shop from "./screen/shop";
import Order from "./screen/order";
import Class from "./screen/class";
import Directing from "./screen/directing";
import { useSetRecoilState } from "recoil";
import { useEffect } from "react";
import { currentMode } from "./project_common";

const router = createHashRouter(
    [
        {
            path: "/",
            element: <Layout />,
            errorElement: <NotFound />,
            children: [
                {
                    path: "",
                    element: <Home />,
                },
                {
                    path: "shop",
                    element: <Shop />,
                },
                {
                    path: "order",
                    element: <Order />,
                },
                {
                    path: "class",
                    element: <Class />,
                },
                {
                    path: "directing",
                    element: <Directing />,
                },
            ],
        },
        {
            path: "/instead_of_me_flower_shop",
            element: <Layout />,
            errorElement: <NotFound />,
            children: [
                {
                    path: "",
                    element: <Home />,
                },
                {
                    path: "shop",
                    element: <Shop />,
                },
                {
                    path: "order",
                    element: <Order />,
                },
                {
                    path: "class",
                    element: <Class />,
                },
                {
                    path: "directing",
                    element: <Directing />,
                },
            ],
        },
    ],
    { basename: "/instead_of_me_flower_shop" }
);

function App() {
    const setCurrentMode = useSetRecoilState(currentMode);

    useEffect(() => {
        if (document.documentElement.clientWidth < 500)
            setCurrentMode("mobile");
    }, []);

    return <RouterProvider router={router} />;
}

export default App;
