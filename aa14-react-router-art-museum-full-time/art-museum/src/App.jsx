import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import harvardArt from './data/harvardArt'

console.log(harvardArt);

const router = createBrowserRouter([
  {
    path: '*',
    element: <h2>Page Not Found</h2>,
  },
]);

function App() {
  return <RouterProvider router ={router} />;
}

export default App;
