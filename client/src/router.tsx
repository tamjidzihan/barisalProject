import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ServiceLayout from "./pages/ServiceLayout";
import ServiceItemPage from "./pages/ServiceItemPage";
import Test from "./components/Auth/Test";
import Login from "./components/Auth/Login";
import Registration from "./components/Auth/Registration";
import AuthModal from "./components/Auth/Test";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "/login", element: <Login /> },
            { path: "/test", element: <AuthModal /> },
            { path: "/registration", element: <Registration /> },
            { path: "/service/:slug", element: <ServiceLayout /> },
            { path: "/service/:mainServiceSlug/:mainServiceID/:id", element: <ServiceItemPage /> },
        ]

    }
])



export default router;