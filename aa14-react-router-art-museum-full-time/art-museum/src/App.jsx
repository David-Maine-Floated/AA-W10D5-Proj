import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    NavLink
} from "react-router-dom";
import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation/GalleryNavigation";
console.log(harvardArt);

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: (
                    <>
                        <h2>Harvard Art Museum</h2>
                        <p>
              Look, but Don&apos;t Touch. Please select a Gallery in the
              navigation bar.
                        </p>
                    </>
                ),
            },
        ],
    },
    {
        path: "*",
        element: <h2>Page Not Found</h2>,
    },
]);

function Layout() {
    return (
        <div className="page-wrapper">
            <GalleryNavigation galleries={harvardArt.records} />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

function App() {
    return <RouterProvider router={router} />;
}

export default App;
