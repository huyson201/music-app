import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import { Suspense, lazy } from "react";
const Home = lazy(() => import("../pages/Home/Home"))
const Detail = lazy(() => import("../pages/Detail/Detail"))
const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Suspense fallback={"loading..."}> <Home /></Suspense>
            },
            {
                path: "/detail",
                element: <Suspense fallback={"loading"}><Detail /></Suspense>
            }
        ]
    }
])

export default routes