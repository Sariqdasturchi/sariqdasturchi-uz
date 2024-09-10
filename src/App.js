import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/home/home";
import ContactMe from "./component/contactMe/contactMe";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/contact-me",
        element: <ContactMe />
    }
]);

function App() {

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App