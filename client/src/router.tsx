import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ServiceLayout from "./pages/ServiceLayout";
import ServiceItemPage from "./pages/ServiceItemPage";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: "/service/:slug",
                element: <ServiceLayout />,
                children: [

                ]
            },
            { path: "/service/:mainServiceSlug/:mainServiceID/:id", element: <ServiceItemPage /> },

        ]

    }
])



export default router;