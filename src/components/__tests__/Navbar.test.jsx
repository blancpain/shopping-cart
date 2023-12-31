import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RouterProvider, createMemoryRouter, createRoutesFromElements } from 'react-router-dom';
import { CartProvider } from '../../ShoppingCartContext';
import routesConfig from '../../routes/RoutesConfig';

describe('Navbar navigation', () => {
  const router = createMemoryRouter(createRoutesFromElements(routesConfig()), {
    initialEntries: ['/'],
  });

  it('click correctly goes to /contact', async () => {
    const user = userEvent.setup();
    render(
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>,
    );

    await user.click(screen.getByText(/Contact/i));

    expect(screen.getByText(/get in touch/i)).toBeInTheDocument();
  });
});
