import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

// routes
import routesConfig from './routes/RoutesConfig';

const router = createBrowserRouter(createRoutesFromElements(routesConfig()));

function App() {
  return <RouterProvider router={router} />;
}

export default App;
