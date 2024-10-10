import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/home/home";
import ContactMe from "./component/contactMe/contactMe";
import Course from "./component/course/course";
import Login from "./component/login/login";
import CourseAbout from "./component/course/course-about";
import CourseVidoe from "./component/course-video/course-vidoe";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/contact-me",
        element: <ContactMe />
    },
    {
        path: "/course",
        element: <Course />
    },
    {
        path: '/course/:id',
        element: <CourseAbout />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: '/course-video/:id',
        element: <CourseVidoe />
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