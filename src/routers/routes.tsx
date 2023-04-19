import { createBrowserRouter } from "react-router-dom";
import App from '../App'
import { Suspense, lazy } from "react";
const Home = lazy(() => import("../pages/Home/Home"))
const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Suspense fallback={"loading..."}> <Home /></Suspense>
            }
        ]
    }
])

export default routes