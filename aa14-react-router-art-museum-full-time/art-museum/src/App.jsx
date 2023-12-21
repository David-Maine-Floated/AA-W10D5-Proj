import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import harvardArt from './data/harvardArt';

console.log(harvardArt);

const router = createBrowserRouter([
  {
    path: '*',
    element: <h2>Page Not Found</h2>,
  },
  {
    path: '/',
    element: <>
      <h2>Harvard Art Museum</h2>
      <p>Look, but Don&apos;t Touch. Please select a Gallery in the navigation bar.</p>
    </>,
  },
]);

function App() {
  return <RouterProvider router ={router} />;
}

export default App;
