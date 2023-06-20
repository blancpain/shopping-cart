import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { CartProvider } from './ShoppingCartContext';

// routes
import routesConfig from './routes/RoutesConfig';

const router = createBrowserRouter(createRoutesFromElements(routesConfig()));

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
