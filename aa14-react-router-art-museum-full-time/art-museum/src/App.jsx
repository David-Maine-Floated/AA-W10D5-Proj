import { createBrowserRouter, RouterProvider, Outlet, useRouteError, isRouteErrorResponse } from "react-router-dom";
import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation/GalleryNavigation";
import GalleryView from "./components/GalleryView/GalleryView";
import ArtDescription from "./components/ArtDescription/ArtDescription";
console.log(harvardArt);

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <PageMissiong />,
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
      {
        path: "galleries/:galleryId",
        children: [
          {
            index: true,
            element: <GalleryView galleries={harvardArt.records} />,
          },
          {
            path: "art/:artId",
            element: <ArtDescription galleries={harvardArt.records} />,
            errorElement: <h1>womp womp, :(</h1>,
          },
        ],
      },
    ],
  },
  // {
  //   path: "*",
  //   element: <h2>Page Not Found</h2>,
  // },
]);

function PageMissiong() {
  const error = useRouteError();
  if (isRouteErrorResponse(error))
    console.log(`${error.status} ${error.statusText} ${error.data}`);
  return (
    <>
      <h1>PAGREMSISIGN, :(</h1>
      <p>reson: {`${error.status} ${error.statusText} ${error.data}`}</p>
    </>
  );
}

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
  console.log(harvardArt.records);
  return <RouterProvider router={router} />;
}

export default App;
